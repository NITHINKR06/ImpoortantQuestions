import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Helper function to get embed URL for YouTube links
const getEmbedUrl = (url) => {
  if (url.includes("embed")) {
    return url.split("?")[0];
  }
  if (url.includes("youtu.be")) {
    const videoId = url.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("watch")) {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

// Array of video topics with embedded URLs
const videoTopics = [
  {
    title:
      "What is IP Address: What is IP address and types of IP address - IPv4 and IPv6 | TechTerms",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=8npT9AALbrI"),
  },
  {
    title: "What is IP Address: IP Address - IPv4 vs IPv6 Tutorial",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=ThdO9beHhpA"),
  },
  {
    title: "What is Subnet Masks: Subnet Mask - Explained",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=s_Ntt6eTn94"),
  },
  {
    title:
      "What is CIDR: Lec-47: What is Classless Addressing (CIDR) in Hindi | CIDR vs Classful Addressing",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=N-ywmOpWehE"),
  },
  {
    title: "What is ICMP?",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=VIDEO_ID_5"),
  },
  {
    title: "What is ARP?: ARP Explained - Address Resolution Protocol",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=cn8Zxh9bPio"),
  },
  {
    title: "What is DHCP?: DHCP Explained - Dynamic Host Configuration Protocol",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=e6-TaH5bkjo"),
  },
  {
    title: "TCP vs UDP: TCP vs UDP Comparison",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=uwoD5YsGACg&t=23s"),
  },
  {
    title: "What is NAT?: NAT Explained - Network Address Translation",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=FTUV0t6JaDA"),
  },
  {
    title: "What is Ping Command?: PING Command - Troubleshooting Networks",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=IIicPE38O-s"),
  },
  {
    title:
      "What is ICMP?: Understanding Internet Control Message Protocol (ICMP) - Explained",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=-Zm9_vgrThs"),
  },
  {
    title: "Three-way handshake (V1) TCP: How TCP Works - The Handshake",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=HCHFX5O1IaQ"),
  },
  {
    title: "Three-way handshake (V2) TCP: TCP - Three-way handshake in details",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=xMtP5ZB3wSk"),
  },
  {
    title: "Error Control in TCP: Error Detection",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=EMrY-8m8D1E"),
  },
  {
    title: "Flow Control in TCP: Flow Control",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=ReQiSK8W3Ag"),
  },
  {
    title: "OSPF: OSPF Explained | Step by Step",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=kfvJ8QVJscc"),
  },
  {
    title:
      "BGP: What Is BGP? | Border Gateway Protocol Explained | BGP Protocol | Simplilearn",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=NnP4SRe6MDc"),
  },
];

// Custom Modal Component with accessibility and portal support
const Modal = ({ selectedVideo, closeModal }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  // Set focus on the modal when it opens
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl relative animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        ref={modalRef}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 id="modal-title" className="text-2xl font-bold text-gray-800 mb-4">
          {selectedVideo.title}
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src={selectedVideo.videoUrl}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
};

const VideoTopics = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Video Topics for Unit 2
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoTopics.map((video, index) => (
          <div
            key={index}
            onClick={() => openModal(video)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer border border-gray-200"
          >
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
              {video.title}
            </h2>
            <p className="text-sm text-gray-500">Click to watch video</p>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <Modal selectedVideo={selectedVideo} closeModal={closeModal} />
      )}
    </div>
  );
};

export default VideoTopics;
