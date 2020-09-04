from pytube import YouTube
from moviepy.editor import *
import os

YouTube(sys.argv[1]).streams.filter(file_extension='mp4').get_by_itag(22).download('dist', 'video')

video = VideoFileClip("dist/video.mp4").subclip(15,30)

result = CompositeVideoClip([video])

result.write_videofile("dist/cuted.mp4",fps=25)

os.remove('dist/video.mp4') 