export const addInLocalStorage = (key, value) => {
    localStorage.setItem(`@mmh/${key}`, value);

    return value;
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(`@mmh/${key}`);

    return null;
};
