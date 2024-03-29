// import React from 'react'

// const VideoSection = ({ videoKey }) => {
//   return (
//     <div className='ratio ratio-16x9'>
//         <iframe src={`https://www.youtube.com/emded/${videoKey}?autoplay=1&mute=1`}  allowFullScreen title='youtube video' frameBorder="0"></iframe>
//     </div>
//   )
// }

// export default VideoSection

import React from 'react';

const VideoSection = ({ videoKey }) => {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        allowFullScreen
        title="youtube video"
      ></iframe>
    </div>
  );
};

export default VideoSection;