import axiosClient from '@/core/clients/axiosClient';
import { useCachingService } from '@/core/services/cachingService';

const resourceService = {
  async fetchResource(filePath) {
    try {
      const response = await axiosClient.get(filePath);
      return response.data;
    } catch (error) {
      console.error(`Error fetching resource from path: ${filePath}`, error.message);
      throw error;
    }
  },

  async fetchResourceWithCache(filePath) {
    // if the local dev run flat is set, we don't cache and pull the turtle files from the local public/knowledge-base repo clone
    if (process.env.REACT_APP_LOCAL && filePath.toLowerCase().endsWith(".ttl")) {
      const marker = "/knowledge-base/main/";
      const idx = filePath.indexOf(marker);
      return await resourceService.fetchResource("knowledge-base/" + filePath.substring(idx + marker.length));
    }

    const { getResource, setResource } = useCachingService.getState();
    const cached = getResource(filePath);

    if (cached) {
      return cached;
    }

    const data = await resourceService.fetchResource(filePath);
    setResource(filePath, data);
    return data;
  }
};

export default resourceService;