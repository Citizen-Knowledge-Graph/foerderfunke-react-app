class localStorageService {
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static removeItem(key) {
        localStorage.removeItem(key);
    }
}

export default localStorageService;
