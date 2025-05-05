import React from 'react';

const sections = [
  {
    title: '',
    content: (
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center">IPv4 vs. IPv6 Headers</h2>

        {/* Introduction */}
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          IPv4 and IPv6 are protocols used for routing packets across networks, with differences in header structures and capabilities.
        </p>

        {/* IPv4 Header Fields */}
        <div className="bg-blue-50 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-bold text-blue-800">IPv4 Header Key Fields</h3>
          <div className="space-y-4">
            {[
              { field: "Version", description: "Indicates the IP version (IPv4)", size: "4 bits" },
              { field: "IHL (Internet Header Length)", description: "Specifies the length of the header in 32-bit words", size: "4 bits" },
              { field: "Type of Service", description: "Specifies the quality of service parameters", size: "8 bits" },
              { field: "Total Length", description: "Length of the entire packet (header + data) in bytes", size: "16 bits" },
              { field: "Identification", description: "Unique identifier for the packet, used for fragmentation and reassembly", size: "16 bits" },
              { field: "Flags", description: "Control flags for fragmentation (e.g., 'Don't Fragment')", size: "3 bits" },
              { field: "Fragment Offset", description: "Indicates the position of the fragment in the original packet", size: "13 bits" },
              { field: "TTL (Time to Live)", description: "Limits the packet's lifetime to prevent it from circulating indefinitely", size: "8 bits" },
              { field: "Protocol", description: "Indicates the next level protocol (e.g., TCP, UDP)", size: "8 bits" },
              { field: "Header Checksum", description: "A checksum for error-checking the header", size: "16 bits" },
              { field: "Source Address", description: "The IP address of the sender", size: "32 bits" },
              { field: "Destination Address", description: "The IP address of the intended recipient", size: "32 bits" }
            ].map(({ field, description, size }) => (
              <div className="flex justify-between border-b pb-2" key={field}>
                <div className="font-medium text-gray-800">{field}</div>
                <div className="text-gray-600">{description}</div>
                <div className="text-gray-500">{size}</div>
              </div>
            ))}
          </div>
        </div>

        {/* IPv6 Header Fields */}
        <div className="bg-green-50 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-bold text-green-800">IPv6 Header Key Fields</h3>
          <div className="space-y-4">
            {[
              { field: "Version", description: "Indicates the IP version (IPv6)", size: "4 bits" },
              { field: "Traffic Class", description: "Used for quality of service (QoS)", size: "8 bits" },
              { field: "Flow Label", description: "Used to identify packets that require special handling", size: "20 bits" },
              { field: "Payload Length", description: "Length of the payload (data) following the header in bytes", size: "16 bits" },
              { field: "Next Header", description: "Indicates the type of the next header (e.g., TCP, UDP, ICMPv6)", size: "8 bits" },
              { field: "Hop Limit", description: "Limits the number of hops a packet can take (similar to TTL in IPv4)", size: "8 bits" },
              { field: "Source Address", description: "The IP address of the sender", size: "128 bits" },
              { field: "Destination Address", description: "The IP address of the intended recipient", size: "128 bits" }
            ].map(({ field, description, size }) => (
              <div className="flex justify-between border-b pb-2" key={field}>
                <div className="font-medium text-gray-800">{field}</div>
                <div className="text-gray-600">{description}</div>
                <div className="text-gray-500">{size}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differences */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-bold text-indigo-800">Key Differences Between IPv4 and IPv6 Headers</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Header Size:</strong> IPv4 headers can vary in size (min 20 bytes), while IPv6 headers are fixed at 40 bytes.</li>
            <li><strong>Address Length:</strong> IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses, allowing for a vastly larger address space.</li>
            <li><strong>Fragmentation:</strong> In IPv4, fragmentation can occur at routers; in IPv6, fragmentation is handled by the sender.</li>
            <li><strong>Checksum:</strong> IPv4 includes a header checksum for error-checking, while IPv6 does not, relying on the link-layer for error detection.</li>
            <li><strong>Options:</strong> IPv4 has an options field of variable length, while IPv6 uses extension headers for optional features, allowing more flexibility.</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: '2. IP Address Classes',
    content: (
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center">IP Address Classes</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          IP addresses are categorized into different classes based on their leading bits and address ranges.
          This classification helps in organizing and managing IP addresses across various network sizes.
        </p>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Class A */}
          <div className="bg-blue-50 p-5 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-bold text-blue-800">Class A</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Leading Bits:</strong> 0xxxxxxx (binary)</li>
              <li><strong>Range:</strong> 1.0.0.0 to 126.255.255.255</li>
              <li><strong>Subnet Mask:</strong> 255.0.0.0</li>
              <li><strong>Networks:</strong> 128 (127 reserved for loopback)</li>
              <li><strong>Hosts/Network:</strong> ~16 million</li>
              <li><strong>Usage:</strong> Large enterprises, ISPs</li>
            </ul>
          </div>

          {/* Class B */}
          <div className="bg-green-50 p-5 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-bold text-green-800">Class B</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Leading Bits:</strong> 10xxxxxx (binary)</li>
              <li><strong>Range:</strong> 128.0.0.0 to 191.255.255.255</li>
              <li><strong>Subnet Mask:</strong> 255.255.0.0</li>
              <li><strong>Networks:</strong> 16,384</li>
              <li><strong>Hosts/Network:</strong> ~65,000</li>
              <li><strong>Usage:</strong> Universities, large organizations</li>
            </ul>
          </div>

          {/* Class C */}
          <div className="bg-yellow-50 p-5 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-bold text-yellow-700">Class C</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Leading Bits:</strong> 110xxxxx (binary)</li>
              <li><strong>Range:</strong> 192.0.0.0 to 223.255.255.255</li>
              <li><strong>Subnet Mask:</strong> 255.255.255.0</li>
              <li><strong>Networks:</strong> Over 2 million</li>
              <li><strong>Hosts/Network:</strong> 254</li>
              <li><strong>Usage:</strong> Small businesses, home networks</li>
            </ul>
          </div>

          {/* Class D */}
          <div className="bg-purple-50 p-5 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-bold text-purple-700">Class D</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Leading Bits:</strong> 1110xxxx (binary)</li>
              <li><strong>Range:</strong> 224.0.0.0 to 239.255.255.255</li>
              <li><strong>Subnet Mask:</strong> N/A</li>
              <li><strong>Usage:</strong> Multicast groups</li>
            </ul>
          </div>

          {/* Class E */}
          <div className="bg-gray-50 p-5 rounded-xl shadow space-y-2 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-800">Class E</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Leading Bits:</strong> 1111xxxx (binary)</li>
              <li><strong>Range:</strong> 240.0.0.0 to 255.255.255.255</li>
              <li><strong>Subnet Mask:</strong> N/A</li>
              <li><strong>Usage:</strong> Reserved for research and experimental use</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-indigo-50 p-4 rounded-xl text-gray-800 shadow">
          <h4 className="text-lg font-semibold mb-2">Conclusion</h4>
          <p>
            Understanding IP address classes is key to efficient network design. Each class addresses different network sizes,
            helping manage routing and address allocation across the internet.
          </p>
        </div>
      </div>
    )
  },

  {
    title: '3. Error Control and Flow Control',
    content: (
      <div className="max-w-4xl mx-auto p-6  space-y-10">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center">Error Control and Flow Control</h2>

        {/* Error Control Section */}
        <div className="bg-red-50 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-bold text-red-700">1. Error Control</h3>
          <p className="text-gray-700"><strong>Definition:</strong> Techniques used to detect and correct errors during data transmission over a network.</p>
          <p className="text-gray-700"><strong>Importance:</strong> Maintains data integrity and ensures accurate communication.</p>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Methods:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Error Detection:</strong></li>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Checksums:</strong> Simple value sent with data to verify integrity.</li>
                <li><strong>CRC:</strong> Uses polynomial division to detect block errors.</li>
                <li><strong>Parity Bits:</strong> Adds a bit to make number of 1s even/odd.</li>
              </ul>
              <li><strong>Error Correction:</strong></li>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>ARQ:</strong> Retransmits data if error detected (e.g., Stop-and-Wait, Go-Back-N).</li>
                <li><strong>FEC:</strong> Sends redundant bits to allow receiver-side correction.</li>
              </ul>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Types of Errors:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Single-bit Errors:</strong> Only one bit is incorrect.</li>
              <li><strong>Burst Errors:</strong> Several consecutive bits are corrupted.</li>
            </ul>
          </div>
        </div>

        {/* Flow Control Section */}
        <div className="bg-green-50 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-bold text-green-700">2. Flow Control</h3>
          <p className="text-gray-700"><strong>Definition:</strong> Manages data transmission rate to prevent overwhelming the receiver.</p>
          <p className="text-gray-700"><strong>Importance:</strong> Prevents data loss and ensures smooth communication.</p>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Methods:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Stop-and-Wait Protocol:</strong> Sends one frame at a time, waits for ACK before next.</li>
              <li><strong>Sliding Window Protocol:</strong> Allows sending multiple frames before ACK, improving throughput.</li>
              <li><strong>Buffering:</strong> Temporary storage at receiver to manage data bursts.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Key Concepts:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Window Size:</strong> Number of unacknowledged frames that can be sent.</li>
              <li><strong>Flow Control Mechanisms:</strong> Implemented at Transport (e.g., TCP) and Data Link layers (e.g., HDLC).</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-100 p-4 rounded-xl text-gray-800 shadow">
          <h4 className="text-lg font-semibold mb-2">Conclusion</h4>
          <p>
            Error control ensures accurate data delivery, while flow control regulates the transmission rate for efficient communication.
            Together, they form the backbone of reliable and robust data transmission in computer networks.
          </p>
        </div>
      </div>
    )
  },

  {
    title: '4. Short Notes',
    content: (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Short Notes on Networking Concepts</h2>

        {/* NAT */}
        <div className="bg-indigo-50 p-4 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">a. NAT (Network Address Translation)</h3>
          <p className="text-gray-700 mb-2"><strong>Definition:</strong> NAT modifies IP address information in packet headers during transit across routing devices.</p>
          <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Allows multiple local devices to share one public IP, improving security and IP address conservation.</p>
          <p className="text-gray-700 mb-2"><strong>Types:</strong></p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Static NAT:</strong> One-to-one mapping between private and public IPs.</li>
            <li><strong>Dynamic NAT:</strong> Private IPs mapped to a pool of public IPs.</li>
            <li><strong>PAT:</strong> Multiple private IPs share one public IP using different ports.</li>
          </ul>
        </div>

        {/* DHCP */}
        <div className="bg-yellow-50 p-4 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">b. DHCP (Dynamic Host Configuration Protocol)</h3>
          <p className="text-gray-700 mb-2"><strong>Definition:</strong> Assigns IP addresses and config parameters automatically to devices on a network.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Lease:</strong> IPs are assigned for a limited time to prevent conflicts.</li>
            <li><strong>Configuration:</strong> Also provides subnet mask, gateway, and DNS.</li>
            <li><strong>Process:</strong> Involves Discover, Offer, Request, Acknowledge (DORA).</li>
          </ul>
        </div>

        {/* ICMP */}
        <div className="bg-blue-50 p-4 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">c. ICMP (Internet Control Message Protocol)</h3>
          <p className="text-gray-700 mb-2"><strong>Definition:</strong> Used for error messages and operational information in IP networks.</p>
          <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Assists in diagnosing and reporting transmission errors.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Ping:</strong> Tests host reachability and round-trip time.</li>
            <li><strong>Traceroute:</strong> Identifies the path packets travel to the destination.</li>
          </ul>
        </div>

        {/* ARP */}
        <div className="bg-green-50 p-4 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">d. ARP (Address Resolution Protocol)</h3>
          <p className="text-gray-700 mb-2"><strong>Definition:</strong> Maps an IP address to a MAC address on a LAN.</p>
          <p className="text-gray-700 mb-2"><strong>Functionality:</strong> Enables devices to find the MAC of a target IP before communication.</p>
          <p className="text-gray-700"><strong>Process:</strong> Broadcasts a request; the matching device responds with its MAC address.</p>
        </div>

        {/* MPLS */}
        <div className="bg-pink-50 p-4 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">e. MPLS (Multiprotocol Label Switching)</h3>
          <p className="text-gray-700 mb-2"><strong>Definition:</strong> Routes data using short labels instead of long network addresses.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-2">
            <li><strong>Speed:</strong> Faster routing decisions.</li>
            <li><strong>Traffic Engineering:</strong> Efficient bandwidth use and traffic management.</li>
            <li><strong>Protocol Support:</strong> Compatible with IP, ATM, and Frame Relay.</li>
          </ul>
          <p className="text-gray-700"><strong>Applications:</strong> Used in VPNs, traffic engineering, and data flow optimization in ISP networks.</p>
        </div>
      </div>
    )
  },

  {
    title: '5. Three-way Handshake in TCP',
    content: (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-8">
        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">1. Overview of TCP Connection Establishment</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Definition:</strong> A process used by TCP to establish a reliable connection before data transmission.</li>
            <li><strong>Purpose:</strong> Ensures both client and server are ready and synchronizes their sequence numbers.</li>
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">2. Steps of the Three-Way Handshake</h3>
          <ul className="list-decimal ml-6 text-gray-700 space-y-4">
            <li>
              <strong>SYN (Synchronize):</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>The client sends a SYN packet to initiate the connection.</li>
                <li>Includes the client’s Initial Sequence Number (ISN).</li>
              </ul>
            </li>
            <li>
              <strong>SYN-ACK (Synchronize-Acknowledgment):</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>The server responds with a SYN-ACK packet.</li>
                <li>Acknowledges the client’s SYN and sends its own ISN.</li>
              </ul>
            </li>
            <li>
              <strong>ACK (Acknowledgment):</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>The client sends an ACK packet back to the server.</li>
                <li>Acknowledges the server’s ISN to complete the handshake.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Importance */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">3. Importance of the Three-Way Handshake</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Reliability:</strong> Ensures both parties are ready, reducing data loss risks.</li>
            <li><strong>Sequence Number Synchronization:</strong> Critical for tracking and ordering transmitted data.</li>
            <li><strong>Connection Management:</strong> Allows for structured connection setup and termination.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-6 border-t pt-4">
          <p className="text-gray-800 font-medium">
            <strong>Conclusion:</strong> The three-way handshake is essential for reliable communication in TCP. It establishes a synchronized connection between client and server, enabling secure and orderly data exchange.
          </p>
        </div>
      </div>
    )
  },

  {
    title: 'Crash Recovery in Transport Protocols',
    content: (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-8">
        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">1. Overview of Crash Recovery</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Definition:</strong> Techniques used by transport protocols to recover from failures during data transmission.</li>
            <li><strong>Importance:</strong> Maintains service availability and data integrity after a crash or failure.</li>
          </ul>
        </div>

        {/* Key Mechanisms */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">2. Key Mechanisms for Crash Recovery</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              <strong>Sequence Numbers:</strong> Track data segments for detecting missing data and requesting retransmissions.
            </li>
            <li>
              <strong>Acknowledgments (ACKs):</strong> Confirm receipt of data. Missing ACKs trigger retransmissions.
            </li>
            <li>
              <strong>Timeouts and Retransmissions:</strong> If ACKs are not received in time, data is resent to prevent loss.
            </li>
            <li>
              <strong>Checkpoints and Logging:</strong> Some protocols log connection states to recover from the last known checkpoint after a crash.
            </li>
          </ul>
        </div>

        {/* Strategies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">3. Strategies for Crash Recovery</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              <strong>State Recovery:</strong> Restore the protocol's state (sequence numbers, unacknowledged data) after a crash.
            </li>
            <li>
              <strong>Graceful Shutdown:</strong> Ensure all data is acknowledged and connections are properly closed before shutdown.
            </li>
            <li>
              <strong>Redundant Data Transmission:</strong> Use of redundancy and error-correcting codes to help reconstruct lost data.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-6 border-t pt-4">
          <p className="text-gray-800 font-medium">
            <strong>Conclusion:</strong> Crash recovery ensures reliability in transport protocols by managing failures through sequence tracking, retransmissions, and state recovery techniques—guaranteeing continuity and integrity in communication.
          </p>
        </div>
      </div>
    )
  },

  {
    title: '6. Applications in UDP',
    content: (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-8">
        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">1. Overview of UDP</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Definition:</strong> A connectionless transport layer protocol that sends datagrams without establishing a connection.</li>
            <li><strong>Characteristics:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Lightweight and fast due to minimal overhead.</li>
                <li>No guarantee of delivery, order, or error correction.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">2. Applications of UDP</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Voice over IP (VoIP):</strong> Enables real-time voice communication with minimal latency.</li>
            <li><strong>Video Streaming:</strong> Used in live broadcasts and video conferencing for quick data delivery without buffering.</li>
            <li><strong>Online Gaming:</strong> Provides real-time updates of game state with minimal delay.</li>
            <li><strong>DNS (Domain Name System):</strong> Utilizes UDP for fast resolution of domain names to IP addresses.</li>
            <li><strong>TFTP (Trivial File Transfer Protocol):</strong> Uses UDP for simple and efficient file transfers in lightweight environments.</li>
            <li><strong>Broadcast/Multicast Communications:</strong> Supports sending data to multiple devices simultaneously for tasks like network discovery.</li>
          </ul>
        </div>

        {/* Quick Examples List */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Common UDP Use Cases:</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2">
            <li><strong>DNS:</strong> Quick queries (no connection setup).</li>
            <li><strong>VoIP/Video Conferencing:</strong> Prioritizes low latency (e.g., Zoom).</li>
            <li><strong>Live Streaming:</strong> Tolerates packet loss (e.g., YouTube Live).</li>
            <li><strong>IoT Sensors:</strong> Lightweight communication (e.g., temperature sensors).</li>
            <li><strong>Gaming:</strong> Real-time updates (e.g., Fortnite).</li>
          </ul>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">3. Advantages of Using UDP</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Speed:</strong> No connection setup or error recovery, allowing faster transmission.</li>
            <li><strong>Efficiency:</strong> Lower overhead than TCP, ideal for speed-sensitive applications.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-6 border-t pt-4">
          <p className="text-gray-800 font-medium">
            <strong>Conclusion:</strong> UDP is ideal for scenarios where speed and low latency are more important than guaranteed reliability, such as real-time communication, gaming, and media streaming.
          </p>
        </div>
      </div>
    )
  },

  {
    title: '7. Error Control and Flow Control (Expanded)',
    content: (
      <div className="max-w-3xl mx-auto p-6">

      {/* Error Control Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">1. Error Control</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Definition:</strong> Techniques to detect and correct errors during data transmission.</li>
          <li><strong>Importance:</strong> Ensures data integrity and reliable communication.</li>
          <li><strong>Methods:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Error Detection:</strong> Checksums, CRC, and parity bits detect data errors.</li>
              <li><strong>Error Correction:</strong> ARQ and FEC correct errors with or without retransmission.</li>
            </ul>
          </li>
          <li><strong>Types of Errors:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Single-bit errors:</strong> Affect only one bit.</li>
              <li><strong>Burst errors:</strong> Affect multiple bits in sequence.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* TCP & Data Link Error Handling Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Error Control (Data Link Layer):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>CRC:</strong> Cyclic Redundancy Check detects frame errors.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">TCP Error Recovery:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Retransmits lost segments using ACKs and timeouts.</li>
        </ul>
      </div>

      {/* Flow Control Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">2. Flow Control</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Definition:</strong> Manages data transmission rate to prevent overwhelming the receiver.</li>
          <li><strong>Importance:</strong> Prevents data loss by ensuring sender and receiver are synchronized.</li>
          <li><strong>Methods:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Stop-and-Wait:</strong> Sends one frame at a time, waits for acknowledgment.</li>
              <li><strong>Sliding Window:</strong> Sends multiple frames before needing acknowledgment for higher efficiency.</li>
            </ul>
          </li>
          <li><strong>Key Concepts:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Window Size:</strong> Number of unacknowledged frames that can be sent.</li>
              <li><strong>Buffering:</strong> Temporary data storage at receiver side.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Flow Control Feature Summary */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Flow Control:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Window Scaling:</strong> Dynamically adjusts window size based on network conditions.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mt-6 border-t pt-4">
        <p className="text-gray-800 font-medium">
          <strong>Conclusion:</strong> Error control and flow control are fundamental to maintaining reliable and efficient data communication. They ensure data arrives intact and at a rate that both sender and receiver can manage.
        </p>
      </div>
    </div>

    )
  },

  {
    title: '8. OSPF and BGP',
    content: (
      <div className="max-w-3xl mx-auto p-6">

        {/* OSPF Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">OSPF (Open Shortest Path First)</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Type:</strong> Interior Gateway Protocol (IGP)</li>
            <li><strong>Function:</strong> Routing within a single autonomous system (AS)</li>
            <li><strong>Algorithm:</strong> Dijkstra’s shortest path first</li>
            <li><strong>Characteristics:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Link-state protocol</li>
                <li>Updates only when topology changes</li>
                <li>Hierarchical routing with areas</li>
                <li>Fast convergence and scalability</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* BGP Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">BGP (Border Gateway Protocol)</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Type:</strong> Exterior Gateway Protocol (EGP)</li>
            <li><strong>Function:</strong> Routing between autonomous systems</li>
            <li><strong>Algorithm:</strong> Path vector protocol</li>
            <li><strong>Characteristics:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Policy- and rule-based routing decisions</li>
                <li>Supports diverse routing policies</li>
                <li>Slower convergence than OSPF but more scalable</li>
                <li>Used for inter-domain routing</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Key Differences */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">Key Differences Between OSPF and BGP</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Scope of Use:</strong> OSPF within an AS, BGP between ASes</li>
            <li><strong>Routing Method:</strong> Link-state (OSPF) vs. Path vector (BGP)</li>
            <li><strong>Convergence:</strong> OSPF is faster</li>
            <li><strong>Complexity:</strong> BGP supports complex, policy-driven routing</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-1">Use Cases</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>OSPF:</strong> Enterprise networks needing fast, efficient routing</li>
            <li><strong>BGP:</strong> ISPs or organizations with multiple external links and routing policies</li>
          </ul>
        </div>

        {/* Summary Tables */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">OSPF (Open Shortest Path First):</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2">
            <li><strong>Type:</strong> Link-state IGP (Interior Gateway Protocol)</li>
            <li><strong>Algorithm:</strong> Dijkstra’s shortest path first</li>
            <li><strong>Features:</strong> Fast convergence, supports VLSM, divides networks into areas</li>
            <li><strong>Use Case:</strong> Enterprise networks (e.g., corporate LANs)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">BGP (Border Gateway Protocol):</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2">
            <li><strong>Type:</strong> Path-vector EGP (Exterior Gateway Protocol)</li>
            <li><strong>Function:</strong> Routes between Autonomous Systems (ASes) based on policies</li>
            <li><strong>Features:</strong> Supports route aggregation, loop prevention via AS_PATH</li>
            <li><strong>Use Case:</strong> Internet backbone routing</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: '9. CIDR (Classless Interdomain Routing)',
    content: (
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-lg text-gray-800 font-semibold leading-relaxed">
          <span className="text-blue-500">CIDR (Classless Interdomain Routing)</span> uses the notation <span className="font-mono">IP/Prefix</span> (e.g., <span className="font-mono">192.168.1.0/24</span>) to denote an IP address and its associated network prefix, providing efficient IP allocation and improved routing flexibility compared to classful addressing.
        </p>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          <span className="font-bold text-blue-600">CIDR</span> (Classless Interdomain Routing) is a method for allocating IP addresses and IP routing that replaces the older system based on classes (Class A, B, and C networks). Introduced in the 1990s, CIDR improves the efficiency of address space allocation and helps slow the exhaustion of IPv4 addresses.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 underline">
          Key Features of CIDR:
        </h3>
        <ul className="list-inside list-disc text-gray-700 space-y-3 pl-6">
          <li className="text-lg">
            <strong className="text-blue-500">CIDR Notation:</strong> IP addresses in CIDR are written with a suffix indicating the number of bits used for the network portion (e.g., <span className="font-mono">192.168.0.0/24</span> means the first 24 bits are the network part).
          </li>
          <li className="text-lg">
            <strong className="text-blue-500">Flexible Subnetting:</strong> Unlike classful addressing, CIDR allows variable-length subnet masks (VLSM), which means networks can be sized more precisely.
          </li>
          <li className="text-lg">
            <strong className="text-blue-500">Route Aggregation:</strong> CIDR enables route summarization, which reduces the size of routing tables and improves routing efficiency.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 underline">
          Benefits:
        </h3>
        <ul className="list-inside list-disc text-gray-700 space-y-3 pl-6">
          <li className="text-lg">
            <strong className="text-green-500">Efficient IP Allocation:</strong> Allows subnet masks that don’t follow traditional classful boundaries, reducing wasted IP addresses. For example, a <span className="font-mono">/26</span> subnet offers 64 IP addresses, with 62 usable.
          </li>
          <li className="text-lg">
            <strong className="text-green-500">Route Aggregation:</strong> Enables combining several contiguous subnets into one larger aggregated route, such as merging four <span className="font-mono">/24</span> networks into a single <span className="font-mono">/22</span> network.
          </li>
          <li className="text-lg">
            <strong className="text-green-500">Flexible Network Design:</strong> Permits organizations to allocate subnets based on specific size requirements, like a university dividing a <span className="font-mono">/16</span> block into various subnet sizes tailored to different departmental needs.
          </li>
        </ul>

        <p className="text-lg text-gray-800 mt-4 italic">
          Refer to the <span className="text-blue-500 font-bold">CIDR.docx</span> file for more details.
        </p>
      </div>
    )
  },

  {
    title: '10. Subnet Masks',
    content: (
      <div className="max-w-3xl mx-auto p-6">

  
        <p className="mb-4">
          A <strong>Subnet Mask</strong> is a 32-bit number used in networking to divide an IP address into two parts:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Network Portion</strong> – identifies the specific network.</li>
          <li><strong>Host Portion</strong> – identifies the device (host) on that network.</li>
        </ul>
  
        <p className="mb-6">
          It helps determine whether two devices are on the same local network or must communicate through a router.
        </p>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Purpose of Subnet Masks</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>✅ Identify Network and Host parts of an IP address.</li>
          <li>✅ Enable Subnetting to divide large networks.</li>
          <li>✅ Efficient use of IP addresses.</li>
          <li>✅ Enhance network performance and security.</li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Structure and Representation</h3>
        <p className="mb-2">Subnet masks are written in dotted decimal format (e.g., <code>255.255.255.0</code>) and binary format:</p>
        <ul className="list-disc ml-6 mb-6">
          <li><code>1</code>s indicate the network part.</li>
          <li><code>0</code>s indicate the host part.</li>
        </ul>
  
        <div className="bg-blue-50 p-4 rounded mb-6">
          <p><strong>Example:</strong></p>
          <p>IP Address: <code>192.168.1.10</code></p>
          <p>Subnet Mask: <code>255.255.255.0</code></p>
          <p>→ <strong>Network part:</strong> 192.168.1</p>
          <p>→ <strong>Host part:</strong> 10</p>
        </div>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">CIDR Notation</h3>
        <p className="mb-2"><strong>CIDR</strong> (Classless Inter-Domain Routing) uses slash notation:</p>
        <ul className="list-disc ml-6 mb-6">
          <li><code>255.0.0.0</code> → <code>/8</code></li>
          <li><code>255.255.0.0</code> → <code>/16</code></li>
          <li><code>255.255.255.0</code> → <code>/24</code></li>
          <li><code>255.255.255.192</code> → <code>/26</code></li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Common Subnet Masks</h3>
        <table className="table-auto border-collapse border mb-6 w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Subnet Mask</th>
              <th className="border px-4 py-2">CIDR</th>
              <th className="border px-4 py-2">Hosts/Subnet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">255.0.0.0</td>
              <td className="border px-4 py-2">/8</td>
              <td className="border px-4 py-2">16 million+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">255.255.0.0</td>
              <td className="border px-4 py-2">/16</td>
              <td className="border px-4 py-2">65,534</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">255.255.255.0</td>
              <td className="border px-4 py-2">/24</td>
              <td className="border px-4 py-2">254</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">255.255.255.192</td>
              <td className="border px-4 py-2">/26</td>
              <td className="border px-4 py-2">62</td>
            </tr>
          </tbody>
        </table>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Practical Examples</h3>
        <div className="mb-4">
          <p><strong>Example 1: Same Network</strong></p>
          <p>Subnet Mask: <code>255.255.255.0</code></p>
          <p>IP1: <code>192.168.1.10</code>, IP2: <code>192.168.1.50</code></p>
          <p className="text-green-600">✅ Same Network</p>
        </div>
  
        <div className="mb-4">
          <p><strong>Example 2: Different Networks</strong></p>
          <p>Subnet Mask: <code>255.255.255.0</code></p>
          <p>IP1: <code>192.168.1.10</code>, IP2: <code>192.168.2.5</code></p>
          <p className="text-red-600">❌ Different Networks</p>
        </div>
  
        <div className="mb-6">
          <p><strong>Example 3: Same Network with Larger Subnet</strong></p>
          <p>Subnet Mask: <code>255.255.0.0</code></p>
          <p>IP1: <code>10.0.5.10</code>, IP2: <code>10.0.100.20</code></p>
          <p className="text-green-600">✅ Same Network</p>
        </div>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Subnetting & Calculation</h3>
        <p className="mb-2">Use a bitwise AND between IP and mask to get the network address:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`IP Address:  192.168.1.130 = 11000000.10101000.00000001.10000010
  Subnet Mask: 255.255.255.0 = 11111111.11111111.11111111.00000000
  Result:                      = 11000000.10101000.00000001.00000000
                              = 192.168.1.0`}
        </pre>
  
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Advantages of Subnetting</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>🔹 Reduces broadcast traffic</li>
          <li>🔹 Improves routing and management</li>
          <li>🔹 Enhances network security</li>
          <li>🔹 Allows efficient IP address allocation</li>
        </ul>
      </div>
    )
  }
  
];

export default function NetworkTopics({ searchQuery = "" }) {
  // Filter sections based on searchQuery
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.props.children.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="space-y-12">
      {filteredSections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
}

// Reusable Section component
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div>{content}</div>
    </section>
  );
};
