 
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "d121f1e790c741a3851ac7da12cd4833";

export const getTokenKey = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, items) => {
            let parts = items.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

const scope = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`; 