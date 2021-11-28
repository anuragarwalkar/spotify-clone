// developer.spotify.com

export const authEndpoint = "https://accounts.spotify.com/authorize";
const isProd = process.env.NODE_ENV === "production";
const redirectUri = isProd
  ? "http://anuragarwalkar.github.io/spotify-clone/"
  : "http://localhost:3000/spotify-clone/";
const clientId = "88b2a59a96f44f1b84a9b6a9d15ec1cf";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrlAndReset = () => {
  const resultObj = window.location.hash
    .substring(1)
    .split("&")
    .reduce((a, b) => {
      const [partA, partB] = b.split("=");
      a[partA] = decodeURIComponent(partB);
      return a;
    }, {});

  window.location.hash = "";
  return resultObj;
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token`;
