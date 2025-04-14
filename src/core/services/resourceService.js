import axiosClient from '@/core/clients/axiosClient';
import { useCachingService } from '@/core/services/cachingService';

const resourceService = {
  async fetchResource(filePath) {
    const response = await axiosClient.get(filePath);
    return response.data;
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