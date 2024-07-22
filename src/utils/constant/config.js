export const BASE_URL =  "https://www.googleapis.com/youtube/v3";
export const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_API_KEY}`
export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="