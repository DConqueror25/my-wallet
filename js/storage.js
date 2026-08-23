const Storage = {

    get(key) {

        try {

            const data =
                localStorage.getItem(key);

            return data
                ? JSON.parse(data)
                : null;

        } catch (error) {

            console.error(
                `Error reading ${key}:`,
                error
            );

            return null;
        }
    },

    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

            return true;

        } catch (error) {

            console.error(
                `Error saving ${key}:`,
                error
            );

            return false;
        }
    },

    remove(key) {

        try {

            localStorage.removeItem(key);

            return true;

        } catch (error) {

            console.error(
                `Error removing ${key}:`,
                error
            );

            return false;
        }
    },

    exists(key) {

        return localStorage.getItem(key) !== null;
    },

    clear() {

        try {

            localStorage.clear();

            return true;

        } catch (error) {

            console.error(
                "Error clearing storage:",
                error
            );

            return false;
        }
    },

    keys() {

        return Object.keys(localStorage);
    }
};
