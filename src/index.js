const fs = require("fs");
const youtubedl = require("youtube-dl");

const video = youtubedl("https://www.youtube.com/watch?v=aLqkpp9mtXg", [
  "--format=18"
]);

// Will be called when the download starts.
video.on("info", () => {
  console.log("Download started");
});

video.pipe(fs.createWriteStream("./dist/video.mp4"));
