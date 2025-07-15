import axiosClient from '@/core/clients/axiosClient';
import { useCachingService } from '@/core/services/cachingService';

const resourceService = {
  async fetchResource(filePath) {
    // console.log("fetchResource", filePath);
    if (process.env.REACT_APP_LOCAL) {
      // TODO
    }
    try {
      const response = await axiosClient.get(filePath);
      return response.data;
    } catch (error) {
      console.error(`Error fetching resource from path: ${filePath}`, error.message);
      throw error;
    }
  },

  async fetchResourceWithCache(filePath) {
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