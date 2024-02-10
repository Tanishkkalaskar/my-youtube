export const HAMBURGER_ICON =
  "https://cdn-icons-png.flaticon.com/512/8182/8182885.png";

export const YOUTUBE_LOGO =
  "https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png";

export const USER_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
export const SEARCH_ICON = "https://www.svgrepo.com/show/7109/search.svg";

export const YOUTUBE_API_KEY = "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_MOST_POPULAR_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=";

export const YOUTUBE_WATCH_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=";
