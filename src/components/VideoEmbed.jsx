import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ url }) => {
  const getEmbedCode = () => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      // Extract YouTube video ID
      const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
      return (
        <YouTubeEmbed url={url} width={325} height={220} />
        // <iframe
        //   width="100%"
        //   height="315"
        //   src={`https://www.youtube.com/embed/${videoId}`}
        //   title="YouTube video"
        //   frameBorder="0"
        //   allowFullScreen
        // ></iframe>
      );
    }

    if (url.includes("facebook.com")) {
      return (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
            url
          )}&show_text=false&width=560`}
          width="100%"
          height="315"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      );
    }

    if (url.includes("instagram.com")) {
      return (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="13"
        ></blockquote>
      );
    }

    return <p>Unsupported video format</p>;
  };

  return <div style={{ marginBottom: "20px" }}>{getEmbedCode()}</div>;
};

VideoEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoEmbed;
