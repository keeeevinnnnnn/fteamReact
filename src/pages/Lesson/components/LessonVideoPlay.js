import React from 'react';
import ReactPlayer from 'react-player/lazy';

const LessonVideoPlay = () => {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=DjhXZFy8_CI&t=2s&ab_channel=HRCdanceTV"
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        loop={true}
      />
    </>
  );
};

export default LessonVideoPlay;

// Lazy load the YouTube player

// export default LessonVideoPlay;
