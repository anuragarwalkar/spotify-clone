import { environment } from "../environment";
import { environmentProd } from "../environment.prod";

export const isProd = () => process.env.NODE_ENV === "production";

export const getBaseUrl = () => {
  return isProd() ? environmentProd.url : environment.url;
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
