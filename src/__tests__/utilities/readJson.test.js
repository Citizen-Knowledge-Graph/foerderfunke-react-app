import resourceService from '../../core/services/resourceService';
import axiosClient from '../../core/clients/axiosClient';

jest.mock('../../core/clients/axiosClient');

describe('readJson', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return data when API request is successful', async () => {
        const mockData = { key: 'value' };
        axiosClient.get.mockResolvedValueOnce({ data: mockData });
        const result = await resourceService('/some/file.json');
        expect(axiosClient.get).toHaveBeenCalledWith('/some/file.json');
        expect(result).toEqual(mockData);
    });

    test('should throw an error when API request fails', async () => {
        axiosClient.get.mockRejectedValueOnce(new Error('Network error'));
        await expect(resourceService('/some/invalid-file.json')).rejects.toThrow('Network response was not ok');
        expect(axiosClient.get).toHaveBeenCalledWith('/some/invalid-file.json');
    });
});
