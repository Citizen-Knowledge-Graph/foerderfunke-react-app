const localStorageService = {
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key) {
        localStorage.removeItem(key);
    }
}

export default localStorageService;
