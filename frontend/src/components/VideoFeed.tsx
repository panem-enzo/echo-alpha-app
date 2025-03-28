import { useState } from "react";

const Spinner = () => (
  <div className="w-10 h-10 border-6 border-gray-400/70 border-t-gray-500/80 rounded-full animate-spin" />
);

const VideoFeed: React.FC = () => {
  const [error, setError] = useState(false);

  return error ? (
    <Spinner />
  ) : (
    <img
      src={`http://${window.location.hostname}:81/stream`}
      onError={() => setError(true)}
    />
  );
};

export default VideoFeed;