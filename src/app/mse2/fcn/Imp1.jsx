import React from 'react';

const sections = [
  {
    title: '1. IPv4 and IPv6 Header Explanation',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">IPv4 Header (20-60 bytes):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>
            <strong>Version:</strong> Indicates IPv4.
          </li>
          <li>
            <strong>IHL:</strong> Specifies header length in 32-bit words (min 5 words/20 bytes, max 15 words/60 bytes).
          </li>
          <li>
            <strong>TTL:</strong> Prevents infinite loops by decrementing at each hop; packet discarded if TTL=0.
          </li>
          <li>
            <strong>Checksum:</strong> Ensures header integrity (recalculated at each router).
          </li>
          <li>
            <strong>Fragmentation Fields:</strong> Identification, DF (Don’t Fragment), MF (More Fragments), and Fragment Offset.
          </li>
          <li>
            <strong>Options:</strong> Rarely used; allows route recording, timestamping, etc.
          </li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">IPv6 Header (Fixed 40 bytes):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>
            <strong>Version:</strong> Set to 6.
          </li>
          <li>
            <strong>Flow Label:</strong> Prioritizes packets for QoS (e.g., real-time traffic).
          </li>
          <li>
            <strong>Next Header:</strong> Replaces IPv4’s Protocol field; indicates extension or optional headers.
          </li>
          <li>
            <strong>Hop Limit:</strong> Equivalent to TTL.
          </li>
          <li>
            <strong>Simplified Structure:</strong> Removes checksum and fragmentation fields (handled by upper layers).
          </li>
          <li>
            <strong>Extension Headers:</strong> Added for features like fragmentation, security (IPsec), and mobility.
          </li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Key Differences:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>IPv6 eliminates options and checksum for faster processing.</li>
          <li>Larger address space (128-bit vs. 32-bit).</li>
          <li>Explicit support for QoS and security.</li>
        </ul>
      </>
    )
  },
  {
    title: '2. IP Address Classes',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Class A (1.0.0.0–127.255.255.255):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Network:</strong> First octet.</li>
          <li><strong>Hosts:</strong> 16 million per network.</li>
          <li><strong>Example:</strong> ISPs like Airtel.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Class B (128.0.0.0–191.255.255.255):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Network:</strong> First two octets.</li>
          <li><strong>Hosts:</strong> 65,536 per network.</li>
          <li><strong>Example:</strong> University networks.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Class C (192.0.0.0–223.255.255.255):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Network:</strong> First three octets.</li>
          <li><strong>Hosts:</strong> 256 per network.</li>
          <li><strong>Example:</strong> Home routers (192.168.x.x).</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Class D (224.0.0.0–239.255.255.255):</h3>
        <p className="ml-8 text-gray-700">Reserved for multicast (e.g., video streaming).</p>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Class E (240.0.0.0–255.255.255.255):</h3>
        <p className="ml-8 text-gray-700">Experimental/reserved.</p>
        <p className="mt-4 text-gray-700">
          <strong>Limitations:</strong> Classful addressing wasted IPs (e.g., a small company needing 300 hosts had to take a Class B). Replaced by CIDR.
        </p>
      </>
    )
  },
  {
    title: '3. Error Control and Flow Control',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Error Control:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Checksums:</strong> Verify data integrity (e.g., TCP/UDP headers).</li>
          <li><strong>ACK/NACK:</strong> TCP uses acknowledgments (ACK) for received data; retransmits lost packets.</li>
          <li><strong>ARQ:</strong> Protocols like Selective Repeat ARQ ensure reliable delivery.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Flow Control:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Sliding Window:</strong> Adjusts window size to match receiver’s buffer capacity.</li>
          <li><strong>Congestion Control:</strong> TCP uses algorithms (e.g., Slow Start, AIMD) to avoid network overload.</li>
          <li><strong>Rate Limiting:</strong> Prioritizes critical traffic (e.g., VoIP over email).</li>
        </ul>
      </>
    )
  },
  {
    title: '4. Short Notes',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">a. NAT (Network Address Translation):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Translates private IPs (10.x.x.x, 172.16.x.x, 192.168.x.x) to a public IP.</li>
          <li>
            <strong>Types:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Static NAT: 1:1 mapping (e.g., server with public IP).</li>
              <li>Dynamic NAT: Uses a pool of public IPs.</li>
              <li>PAT: Maps multiple private IPs to one public IP using port numbers.</li>
            </ul>
          </li>
          <li>
            <strong>Drawbacks:</strong> Breaks end-to-end connectivity; complicates protocols like FTP.
          </li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">b. DHCP (Dynamic Host Configuration Protocol):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>
            Assigns IPs dynamically via DORA:
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Discover: Client broadcasts DHCP Discover.</li>
              <li>Offer: Server responds with an IP offer.</li>
              <li>Request: Client requests the offered IP.</li>
              <li>Acknowledge: Server confirms allocation.</li>
            </ul>
          </li>
          <li>Simplifies network management (no manual IP assignments).</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">c. ICMP (Internet Control Message Protocol):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Reports errors (e.g., "Destination Unreachable").</li>
          <li>Supports diagnostics via ping (echo request/reply) and traceroute.</li>
          <li>Used in Path MTU Discovery to avoid fragmentation.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">d. ARP (Address Resolution Protocol):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Maps IP addresses to MAC addresses in LANs.</li>
          <li>Process: Host broadcasts ARP request; target replies with MAC.</li>
          <li>ARP Cache: Stores recent mappings to reduce broadcasts.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">e. MPLS (Multiprotocol Label Switching):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Routes traffic using labels (not IP addresses).</li>
          <li>Benefits: Faster than IP routing, supports VPNs, and traffic engineering.</li>
          <li>Use Case: ISPs use MPLS to prioritize business traffic.</li>
        </ul>
      </>
    )
  },
  {
    title: '5. Three-way Handshake in TCP',
    content: (
      <>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>
            <strong>SYN (Synchronize):</strong> Client sends SYN packet with initial sequence number (e.g., Seq=100).
          </li>
          <li>
            <strong>SYN-ACK (Synchronize-Acknowledge):</strong> Server replies with SYN (Seq=300) + ACK (101).
          </li>
          <li>
            <strong>ACK (Acknowledge):</strong> Client sends ACK (301) to confirm connection.
          </li>
          <li>
            <strong>Purpose:</strong> Establishes reliable communication; synchronizes sequence numbers.
          </li>
          <li>
            <strong>Security Risks:</strong> Vulnerable to SYN flooding attacks.
          </li>
        </ul>
      </>
    )
  },
  {
    title: '6. Applications in UDP',
    content: (
      <>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>DNS:</strong> Quick queries (no connection setup).</li>
          <li><strong>VoIP/Video Conferencing:</strong> Prioritizes low latency (e.g., Zoom).</li>
          <li><strong>Live Streaming:</strong> Tolerates packet loss (e.g., YouTube Live).</li>
          <li><strong>IoT Sensors:</strong> Lightweight communication (e.g., temperature sensors).</li>
          <li><strong>Gaming:</strong> Real-time updates (e.g., Fortnite).</li>
        </ul>
      </>
    )
  },
  {
    title: '7. Error Control and Flow Control (Expanded)',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Error Control (Data Link Layer):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>CRC:</strong> Cyclic Redundancy Check detects frame errors.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">TCP Error Recovery:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Retransmits lost segments using ACKs and timeouts.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Flow Control:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Window Scaling:</strong> Dynamically adjusts window size based on network conditions.</li>
        </ul>
      </>
    )
  },
  {
    title: '8. OSPF and BGP',
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-2">OSPF (Open Shortest Path First):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Type:</strong> Link-state IGP (Interior Gateway Protocol).</li>
          <li><strong>Algorithm:</strong> Dijkstra’s shortest path first.</li>
          <li><strong>Features:</strong> Fast convergence, supports VLSM, divides networks into areas.</li>
          <li><strong>Use Case:</strong> Enterprise networks (e.g., corporate LANs).</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">BGP (Border Gateway Protocol):</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li><strong>Type:</strong> Path-vector EGP (Exterior Gateway Protocol).</li>
          <li><strong>Function:</strong> Routes between Autonomous Systems (ASes) based on policies (e.g., ISP partnerships).</li>
          <li><strong>Features:</strong> Supports route aggregation, loop prevention via AS_PATH.</li>
          <li><strong>Use Case:</strong> Internet backbone routing.</li>
        </ul>
      </>
    )
  },
  {
    title: '9. CIDR (Classless Interdomain Routing)',
    content: (
      <>
        <p className="text-gray-700"><strong>Notation:</strong> IP/Prefix (e.g., 192.168.1.0/24).</p>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Benefits:</h3>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          <li>Efficient IP Allocation: Reduces waste (e.g., a /26 subnet allows 62 hosts).</li>
          <li>Route Aggregation: Combines subnets into larger blocks (e.g., merging four /24s into a /22).</li>
          <li>Example: A university divides a /16 block into /17, /18 subnets for departments.</li>
        </ul>
      </>
    )
  },
  {
    title: '10. Subnet Masks',
    content: (
      <>
        <p className="text-gray-700"><strong>Purpose:</strong> Splits IP into network and host portions.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Calculation Example:</h3>
        <p className="ml-8 text-gray-700">For 192.168.1.10/24 → Subnet Mask = 255.255.255.0.</p>
        <p className="ml-8 text-gray-700"><strong>Hosts:</strong> 2⁸ - 2 = 254 (reserves .0 for network and .255 for broadcast).</p>
        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Variable-Length Subnet Masks (VLSM):</h3>
        <p className="ml-8 text-gray-700">Allows custom subnet sizes (e.g., /26 for 64 IPs).</p>
        <p className="ml-8 text-gray-700"><strong>Advantages:</strong> Reduces broadcast domains, improves security, and optimizes IP usage.</p>
      </>
    )
  }
];

export default function NetworkTopics() {
  return (
    <main className="space-y-12">
      {sections.map((section, index) => (
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
