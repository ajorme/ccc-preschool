import { CONTENTFUL_SPACE_ID, CONTENTFUL_API_TOKEN } from "../config/keys";
const API_BASE_URL = "https://cdn.contentful.com";
const API_IMAGE_BASE_URL = "https://images.ctfassets.net";

export function getEntryString(entryID) {
  return `${API_BASE_URL}/spaces/${CONTENTFUL_SPACE_ID}/entries/${entryID}?access_token=${CONTENTFUL_API_TOKEN}`;
}

export function getImageString(assetID, token, name) {
  return `${API_IMAGE_BASE_URL}/${assetID}/${token}/${name}`;
}
