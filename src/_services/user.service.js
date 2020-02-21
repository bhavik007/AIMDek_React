
export const userService = {
    getAllUsers,
    getAllPhotos
};

function getAllUsers() {
    const requestOptions = { method: 'GET' };
    return fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
    // .then(handleResponse)
    .then(user => {
        return user;
    });
}

function getAllPhotos() {
    const requestOptions = { method: 'GET' };
    return fetch('https://jsonplaceholder.typicode.com/photos', requestOptions)
    // .then(handleResponse)
    .then(photos => {
        return photos;
    });
}