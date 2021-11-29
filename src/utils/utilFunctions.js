import { environment } from "../environment";
import { environmentProd } from "../environment.prod";

export const isDev = () => process.env.NODE_ENV === "production";

export const getBaseUrl = () => {
  return isDev() ? environment.url : environmentProd.url;
};

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
