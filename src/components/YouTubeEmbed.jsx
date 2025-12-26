/**
 * YouTube Embed Component
 * Responsive, accessible YouTube video player using iframe
 */

function YouTubeEmbed({ videoId, title }) {
  // YouTube embed URL with privacy-enhanced mode and kid-friendly settings
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="youtube-embed">
      <div className="video-wrapper">
        <iframe
          src={embedUrl}
          title={title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default YouTubeEmbed;
