export function requestGet(url: RequestInfo | URL) {
    const options = {
        method: 'GET',
    };
    return fetch(url, options)
        .then(response => response.json())
        .then((data) => data);
}