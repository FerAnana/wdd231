import { responsiveMenu } from "./responsive-menu.mjs";
import { getDate } from "./dates.mjs";
import { getPicture, getAlbum } from "./getData.mjs";

const pictureUrl =
  "https://api.nasa.gov/planetary/apod?api_key=3sVAP4f1JhsK9EthNnoWUHBShPv2V8fWAhTSc6pg";

const galleryUrl =
  "https://api.nasa.gov/planetary/apod?api_key=3sVAP4f1JhsK9EthNnoWUHBShPv2V8fWAhTSc6pg&count=15";

responsiveMenu();
getDate();
getPicture(pictureUrl);
getAlbum(galleryUrl);
