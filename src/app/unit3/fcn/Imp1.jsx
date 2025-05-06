import React, { useState, useEffect, useRef } from "react";

// Helper to convert any YouTube URL to embeddable format
const getEmbedUrl = (url) => {
  if (url.includes("embed")) return url.split("?")[0];
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

// Unit 3 video topics
const videoTopics = [
  {
    title: "What is SMTP? - Simple Mail Transfer Protocol",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=PJo5yOtu7o8&pp=ygUVd2hhdCBpcyBzbXRwIHByb3RvY29s"),
    description: `SMTP (Simple Mail Transfer Protocol) is a standard protocol used to send emails over TCP/IP networks. It allows different systems to exchange emails using commands like HELO, MAIL FROM, RCPT TO, and DATA. SMTP typically uses port 25 for server-to-server communication and ports 587 or 465 for client submissions with encryption or authentication. The communication involves a client connecting to an SMTP server via TCP, sending commands, and transmitting the message content ending with a period. ESMTP extends SMTP by adding support for authentication and encryption.`,
    icon: "📧"
  },
  {
    title: "What is DNS? How DNS Works",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=mpQZVYPuDGU&pp=ygULV0hBVCBJUyBETlM%3D"),
    description: `DNS (Domain Name System) is the system that translates human-readable domain names like "example.com" into IP addresses. It acts like the internet's phonebook. The DNS resolver queries recursive DNS servers, which in turn query root, TLD (Top-Level Domain), and authoritative servers until they find the correct IP address. Responses are cached for efficiency. This enables browsers and applications to locate servers by domain name.`,
    icon: "🔍"
  },
  {
    title: "More about DNS",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=NiQTs9DbtW4&pp=ygULV0hBVCBJUyBETlPSBwkJhAkBhyohjO8%3D"),
    description: `DNS operates in a hierarchical manner starting from the root servers, followed by TLD servers (like .com), and then authoritative servers. Every layer of DNS caching helps reduce future lookup time. Clients use DNS resolvers embedded in their OS or router to perform lookups. Reverse DNS using PTR records maps IP addresses back to hostnames. DNS caching uses a TTL (Time To Live) value to determine how long a response is valid.`,
    icon: "🌐"
  },
  {
    title: "DNS Records Explained",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=HnUDtycXSNE&pp=ygULRE5TIFJlY3ByZHM%3D"),
    description: `DNS records are instructions stored in zone files that tell DNS servers how to respond to queries. Common record types include A (IPv4 address), AAAA (IPv6 address), CNAME (alias of another domain), MX (mail servers), and TXT (miscellaneous text data like SPF or DKIM). Records follow a structure: <name> <TTL> <class> <type> <data>. These enable domains to be properly mapped and routed.`,
    icon: "📝"
  },
  {
    title: "TCP Three-Way Handshake",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=xMtP5ZB3wSk&pp=ygUhdGNwIHRocmVlIHdheSBoYW5kc2hha2UgZXhwbGFpbmVk"),
    description: `The TCP Three-Way Handshake is a method used to establish a reliable TCP connection. It involves three steps: (1) SYN – the client initiates the connection with a sequence number; (2) SYN-ACK – the server responds with its sequence and acknowledges the client's; (3) ACK – the client acknowledges the server's response. Once complete, both parties are ready to exchange data reliably.`,
    icon: "🤝"
  },
  {
    title: "TCP Connection Termination",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=gP3m1ZNmGNE&pp=ygUadGNwIGNvbm5lY3Rpb24gdGVybWluYXRpb24%3D"),
    description: `TCP connection termination uses a Four-Way Handshake: (1) FIN from sender; (2) ACK from receiver; (3) FIN from receiver; (4) ACK from sender. This ensures all data is received before the connection is closed. The TIME-WAIT state ensures that delayed packets are handled properly and that both sides are synchronized before final termination.`,
    icon: "👋"
  },
  {
    title: "What is HTTP, HTTPS, TLS, SSL?",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=hExRDVZHhig"),
    description: `HTTP (HyperText Transfer Protocol) is a protocol for requesting and receiving web content using TCP. HTTPS is the secure version that uses TLS (formerly SSL) to encrypt data for confidentiality and integrity. TLS ensures that communication is authenticated and tamper-proof, especially critical in online banking, shopping, etc. HTTPS operates over port 443.`,
    icon: "🔒"
  },
  {
    title: "Small Crash Course on HTTP Crash Course",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=iYM2zFP3Zn0"),
    description: `HTTP works on a request-response cycle. The client sends a request with a method (like GET or POST), headers, and optional body. The server responds with a status code (e.g., 200 OK, 404 Not Found), headers, and response body. It is stateless, meaning each request is independent; sessions are handled using cookies or tokens.`,
    icon: "💻"
  },
  {
    title: "Sliding Window Protocol",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=LnbvhoxHn8M&pp=ygUSdGNwIHNsaWRpbmcgd2luZG93"),
    description: `The Sliding Window Protocol in TCP manages flow control to prevent overwhelming the receiver. It allows the sender to transmit multiple packets before needing an acknowledgment. The window size represents how many unacknowledged packets are allowed. It dynamically adjusts based on receiver feedback, improving network efficiency and reliability.`,
    icon: "📦"
  },
  {
    title: "POP3 vs IMAP - What's the difference?",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=SBaARws0hy4&pp=ygUJcG9wMyBpbWFw"),
    description: `POP3 (Post Office Protocol v3) downloads emails to the client and optionally deletes them from the server—best for single-device use. IMAP (Internet Message Access Protocol) keeps emails on the server and supports folder synchronization, making it suitable for accessing email from multiple devices. IMAP is more flexible and widely used today.`,
    icon: "📨"
  },
  {
    title: "Persistent vs Non-Persistent HTTP",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=JJJmVEI_Fkc&pp=ygUhcGVyc2lzdGVudCB2cyBub24gcGVyc2lzdGVudCBodHRw"),
    description: `Non-persistent HTTP opens a new TCP connection for every request/response pair, increasing overhead. Persistent HTTP keeps the TCP connection open for multiple requests/responses, reducing latency and improving performance. Persistent connections may also support pipelining (sending multiple requests without waiting for each response).`,
    icon: "🔄"
  },
  {
    title: "Client-Server vs Peer-to-Peer Models",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=-0thZyLPoBM&pp=ygUdY2xpZW50IHNlcnZlciB2cyBwZWVyIHRvIHBlZXI%3D"),
    description: `In the client-server model, clients request services and centralized servers respond. It's easy to manage but has single points of failure. In contrast, peer-to-peer (P2P) networks allow each node to act as both client and server. This model is more resilient and scalable but harder to control and secure.`,
    icon: "🌟"
  },  
];

// Modal component
const Modal = ({ selectedVideo, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  useEffect(() => {
    modalRef.current?.focus();
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4 backdrop-blur-sm">
      <div
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-4xl relative animate-fadeIn border border-gray-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        ref={modalRef}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 transition-colors duration-200"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 id="modal-title" className="text-2xl font-bold text-indigo-600 mb-4 pr-8">
          {selectedVideo.title}
        </h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-72 md:h-96 rounded-lg shadow-md"
            src={selectedVideo.videoUrl}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {selectedVideo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Video Card Component
const VideoCard = ({ video, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200 overflow-hidden group"
    >
      <div className="h-24 bg-indigo-50 flex items-center justify-center text-3xl">
        <span className="group-hover:scale-125 transition-transform duration-300">{video.icon}</span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          {video.title}
        </h2>
        <button 
          className="mt-2 w-full bg-indigo-50 text-indigo-600 py-2 rounded-md font-medium text-sm hover:bg-indigo-100 transition-colors duration-200 flex items-center justify-center gap-1 group-hover:bg-indigo-500 group-hover:text-white"
        >
          <span>Watch Video</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main component
const Unit3Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  return (
    <div className="min-h-screen py-8 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
          Unit 3
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoTopics.map((video, index) => (
            <VideoCard 
              key={index} 
              video={video} 
              onClick={() => openModal(video)} 
            />
          ))}
        </div>
      </div>
      {selectedVideo && (
        <Modal selectedVideo={selectedVideo} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Unit3Videos;