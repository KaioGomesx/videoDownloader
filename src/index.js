import fs from "fs";
import youtubedl from "youtube-dl";

const video = youtubedl("https://www.youtube.com/watch?v=B9wvTuDC-H0", [
  "--format=18"
]);

// Will be called when the download starts.
video.on("info", () => {
  console.log("Download started");
});

video.pipe(fs.createWriteStream("./dist/video.mp4"));
