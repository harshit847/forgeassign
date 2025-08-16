import { useState, useRef } from "react";

export default function VideoSection() {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: muted ? "unMute" : "mute", args: [] }),
      "*"
    );
    setMuted(!muted);
  };

  return (
    <section className="py-1 max-w-full bg-white relative">
      <div className="aspect-video w-full overflow-hidden relative">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/E1czmX6bjFA?start=10&autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&enablejsapi=1`}
          title="Vignam Text to Simulations"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <button
          onClick={toggleMute}
          className="absolute top-15 left-3 bg-white text-black px-3 py-1 rounded shadow"
        >
          {muted ? "Sound On🎵" : "Mute🔇"}
        </button>

        <a
          href="https://www.youtube.com/watch?v=E1czmX6bjFA&t=10s"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-15 right-3 bg-white text-black px-3 py-1 rounded shadow"
        >
          Watch on YouTube▶️
        </a>
      </div>
    </section>
  );
}
