const ffmpeg = require("fluent-ffmpeg");

ffmpeg("dist/video.mp4")
  .setStartTime("00:00:15")
  .setDuration("30")
  .output("dist/cutVideo.mp4")

  .on("end", err => {
    if (!err) {
      console.log("conversion Done");
    }
  })
  .on("error", err => {
    console.log("error: ", +err);
  })
  .run();
