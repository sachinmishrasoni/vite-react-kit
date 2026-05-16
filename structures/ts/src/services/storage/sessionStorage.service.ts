class SessionStorageService {
    set(key: string, value: unknown) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: string): T | null {
        const item = sessionStorage.getItem(key);

        return item ? JSON.parse(item) : null;
    }

    remove(key: string) {
        sessionStorage.removeItem(key);
    }

    clear() {
        sessionStorage.clear();
    }
}

export default new SessionStorageService();