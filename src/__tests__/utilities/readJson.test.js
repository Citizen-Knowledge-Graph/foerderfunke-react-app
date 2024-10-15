import readJson from '../../utilities/readJson';
import api from '../../services/api';

jest.mock('../../services/api');

describe('readJson', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return data when API request is successful', async () => {
        const mockData = { key: 'value' };
        api.get.mockResolvedValueOnce({ data: mockData });
        const result = await readJson('/some/file.json');
        expect(api.get).toHaveBeenCalledWith('/some/file.json');
        expect(result).toEqual(mockData);
    });

    test('should throw an error when API request fails', async () => {
        api.get.mockRejectedValueOnce(new Error('Network error'));
        await expect(readJson('/some/invalid-file.json')).rejects.toThrow('Network response was not ok');
        expect(api.get).toHaveBeenCalledWith('/some/invalid-file.json');
    });
});
