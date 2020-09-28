export const addInLocalStorage = (key, value) => {
    console.log(`add: @mmh/${key}: ${value}`);
    localStorage.setItem(`@mmh/${key}`, value);

    return value;
};

export const removeFromLocalStorage = (key) => {
    console.log(`remove: @mmh/${key}`);
    localStorage.removeItem(`@mmh/${key}`);

    return null;
};
