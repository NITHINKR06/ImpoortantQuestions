import React from 'react';

const sections = [

  {
    title: 'Store and Forward Packet Switching',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
          <p>
            Store and Forward Packet Switching is a method used in network communications where the entire packet is received and stored at an intermediate node before being forwarded to the next node.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Process</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Receiving:</strong> The packet is received in its entirety by the switching node.</li>
            <li><strong>Storage:</strong> The packet is temporarily stored in memory.</li>
            <li><strong>Forwarding:</strong> Once fully received and verified, it is forwarded to the next node in the network.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Error Checking:</strong> Ensures data integrity by checking and correcting errors before forwarding.</li>
            <li><strong>Buffering:</strong> Handles variable packet sizes and network congestion efficiently.</li>
            <li><strong>Flexibility:</strong> Supports multiple traffic types and varying transmission speeds.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Latency:</strong> Delay occurs because the entire packet must be received before forwarding.</li>
            <li><strong>Resource Intensive:</strong> Requires more memory and processing at intermediate nodes.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Applications</h3>
          <p>
            Commonly used in email systems, file transfers, and other scenarios where data integrity is critical.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Comparison</h3>
          <p>
            This method differs from <strong>Cut-Through Switching</strong>, which forwards packets as soon as the destination address is read. While Cut-Through is faster, Store and Forward is more reliable.
          </p>
        </div>
      </div>
    )
  },

  {
    title: 'Distance Vector Routing and Link State Routing',
    content: (
      <>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <h2 className="text-2xl font-extrabold text-blue-950-700 mb-2">Distance Vector Routing </h2>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
            <p>
              A routing protocol where each router maintains a table (vector) that holds the distance (cost) to reach every destination in the network.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Routing Table:</strong> Each router shares its routing table with its immediate neighbors.</li>
              <li><strong>Distance Metric:</strong> Uses metrics such as hop count, bandwidth, or delay.</li>
              <li><strong>Periodic Updates:</strong> Updates are sent periodically to neighbors.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Simplicity:</strong> Easy to implement and understand.</li>
              <li><strong>Low Overhead:</strong> Less computational and memory requirement.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Slow Convergence:</strong> Takes time to adapt after topology changes.</li>
              <li><strong>Count to Infinity Problem:</strong> Incorrect routing info can circulate indefinitely.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Examples</h3>
            <p>Routing Information Protocol (RIP), Interior Gateway Routing Protocol (IGRP)</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed mt-10">
          <h2 className="text-2xl font-extrabold text-blue-950-700 mb-2"> Link State Routing</h2>

          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
            <p>
              A routing protocol where each router maintains a complete map of the network topology and uses this information to calculate the best path to each destination.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Link State Advertisements (LSAs):</strong> Routers share link info with the entire network.</li>
              <li><strong>Complete Network View:</strong> Each router builds a full topology map.</li>
              <li><strong>Dijkstra’s Algorithm:</strong> Used to compute shortest paths.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Faster Convergence:</strong> Quickly adapts to changes.</li>
              <li><strong>No Count to Infinity:</strong> Avoids infinite loops and bad routes.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Complexity:</strong> Requires more resources and configuration.</li>
              <li><strong>Higher Overhead:</strong> More frequent and larger updates.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Examples</h3>
            <p>Open Shortest Path First (OSPF), Intermediate System to Intermediate System (IS-IS)</p>
          </div>
        </div>
      </>
    )
  },

  {
    title: 'Broadcast Routing',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
          <p>
            Broadcast routing is a method of sending data packets from one source to all possible destinations in a network simultaneously.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>One-to-Many Communication:</strong> A single packet is sent to all nodes in a broadcast domain.</li>
            <li><strong>Broadcast Address:</strong> Uses a special address to reach all devices on a network segment.</li>
            <li><strong>Network Layer:</strong> Operates at the network layer of the OSI model.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Types of Broadcast</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Local Broadcast:</strong> Sent to all devices on the local network (e.g., 255.255.255.255).</li>
            <li><strong>Directed Broadcast:</strong> Sent to all devices on a specific subnet.</li>
            <li><strong>Limited Broadcast:</strong> Not forwarded by routers; stays within the local network.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Efficiency:</strong> Useful when the same data is needed by many devices.</li>
            <li><strong>Simplicity:</strong> Minimal configuration and easy to use.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Network Congestion:</strong> Excessive broadcasting can overload networks.</li>
            <li><strong>Security Risks:</strong> Increases exposure of data to unintended recipients.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Applications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Address Resolution Protocol (ARP)</li>
            <li>Network discovery protocols</li>
            <li>Sending updates or alerts to all devices in a local area</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Routing Protocols</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Routing Information Protocol (RIP)</li>
            <li>Dynamic Host Configuration Protocol (DHCP)</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: 'Hierarchical Routing',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
          <p>
            Hierarchical routing is a method of organizing and managing routing information in large networks by dividing them into smaller, manageable segments or regions, often referred to as hierarchies.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Multi-Level Structure:</strong> The network is divided into multiple levels, with each level representing a different hierarchy (e.g., local, regional, global).</li>
            <li><strong>Aggregation of Routes:</strong> Routers at higher levels maintain summarized routing information about lower-level networks, reducing the size of routing tables.</li>
            <li><strong>Scalability:</strong> Facilitates the management of large networks by allowing for easier updates and maintenance.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Reduced Complexity:</strong> Simplifies routing by limiting the amount of routing information that needs to be processed at each level.</li>
            <li><strong>Improved Scalability:</strong> Supports the growth of networks without a significant increase in routing overhead.</li>
            <li><strong>Faster Convergence:</strong> Changes in one part of the network can be managed without affecting the entire routing structure.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Increased Latency:</strong> May introduce additional delays due to the multiple levels of routing.</li>
            <li><strong>Complex Configuration:</strong> Requires careful planning and configuration to ensure proper communication between different levels.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Example</h3>
          <p>
            <strong>Internet Routing:</strong> The Internet itself is a prime example of hierarchical routing. It is organized into:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Autonomous Systems (AS):</strong> Each AS represents a collection of IP networks and routers under the control of a single organization.</li>
            <li><strong>Regional ISPs:</strong> These ISPs manage routing within their regions and connect to larger ISPs.</li>
            <li><strong>Global Backbone Providers:</strong> These are high-capacity networks that connect multiple regional ISPs and facilitate international data transfer.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Routing Protocols</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Border Gateway Protocol (BGP):</strong> Used for routing between different autonomous systems, allowing for efficient data transfer across the Internet.</li>
            <li><strong>Open Shortest Path First (OSPF):</strong> Can be used within an AS to manage routing hierarchically by dividing the network into areas.</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: 'Routing in Ad Hoc Networks',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
          <p>
            Ad hoc networks are decentralized wireless networks that do not rely on a pre-existing infrastructure. Routing in these networks involves dynamically establishing routes between nodes that may frequently change due to mobility.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Dynamic Topology:</strong> Nodes can join or leave the network at any time, leading to constantly changing network structures.</li>
            <li><strong>Peer-to-Peer Communication:</strong> Each node acts as both a host and a router, forwarding data for other nodes.</li>
            <li><strong>Limited Resources:</strong> Nodes often have limited battery power, processing capabilities, and bandwidth.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Routing Protocols</h3>
          <p><strong>Proactive Protocols:</strong> Maintain up-to-date routing information by periodically exchanging routing tables.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Destination-Sequenced Distance Vector (DSDV):</strong> A table-driven protocol that uses sequence numbers to prevent routing loops.</li>
            <li><strong>Optimized Link State Routing (OLSR):</strong> A proactive protocol that uses a control message to maintain routes.</li>
          </ul>
          <p><strong>Reactive Protocols:</strong> Establish routes on-demand when a node needs to communicate with another node.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Ad hoc On-Demand Distance Vector (AODV):</strong> Builds routes only when needed, minimizing overhead.</li>
            <li><strong>Dynamic Source Routing (DSR):</strong> Uses source routing where the sender determines the complete route to the destination.</li>
          </ul>
          <p><strong>Hybrid Protocols:</strong> Combine features of both proactive and reactive protocols to optimize performance.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Zone Routing Protocol (ZRP):</strong> Divides the network into zones and uses proactive routing within zones and reactive routing between zones.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Challenges</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Scalability:</strong> As the number of nodes increases, maintaining routing information becomes more complex.</li>
            <li><strong>Mobility:</strong> Frequent changes in node positions can lead to route breaks and increased overhead in route discovery.</li>
            <li><strong>Security:</strong> Ad hoc networks are vulnerable to various attacks, such as eavesdropping and spoofing, due to their open nature.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Applications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Military Communications:</strong> Used in battlefield scenarios where a fixed infrastructure is not feasible.</li>
            <li><strong>Disaster Recovery:</strong> Enables communication in areas where traditional networks are damaged or unavailable.</li>
            <li><strong>Personal Area Networks (PANs):</strong> Facilitates communication between devices like smartphones, laptops, and tablets in close proximity.</li>
          </ul>
        </div>
      </div>
    )
  },
    
  {
    title: 'Routing in Ad Hoc Networks',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Definition</h3>
          <p>
            Ad hoc networks are decentralized wireless networks that do not rely on a pre-existing infrastructure. Routing in these networks involves dynamically establishing routes between nodes that may frequently change due to mobility.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Key Characteristics</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Dynamic Topology:</strong> Nodes can join or leave the network at any time, leading to constantly changing network structures.</li>
            <li><strong>Peer-to-Peer Communication:</strong> Each node acts as both a host and a router, forwarding data for other nodes.</li>
            <li><strong>Limited Resources:</strong> Nodes often have limited battery power, processing capabilities, and bandwidth.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Routing Protocols</h3>
          <p><strong>Proactive Protocols:</strong> Maintain up-to-date routing information by periodically exchanging routing tables.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Destination-Sequenced Distance Vector (DSDV):</strong> A table-driven protocol that uses sequence numbers to prevent routing loops.</li>
            <li><strong>Optimized Link State Routing (OLSR):</strong> A proactive protocol that uses a control message to maintain routes.</li>
          </ul>
          <p><strong>Reactive Protocols:</strong> Establish routes on-demand when a node needs to communicate with another node.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Ad hoc On-Demand Distance Vector (AODV):</strong> Builds routes only when needed, minimizing overhead.</li>
            <li><strong>Dynamic Source Routing (DSR):</strong> Uses source routing where the sender determines the complete route to the destination.</li>
          </ul>
          <p><strong>Hybrid Protocols:</strong> Combine features of both proactive and reactive protocols to optimize performance.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Zone Routing Protocol (ZRP):</strong> Divides the network into zones and uses proactive routing within zones and reactive routing between zones.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Challenges</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Scalability:</strong> As the number of nodes increases, maintaining routing information becomes more complex.</li>
            <li><strong>Mobility:</strong> Frequent changes in node positions can lead to route breaks and increased overhead in route discovery.</li>
            <li><strong>Security:</strong> Ad hoc networks are vulnerable to various attacks, such as eavesdropping and spoofing, due to their open nature.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Applications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Military Communications:</strong> Used in battlefield scenarios where a fixed infrastructure is not feasible.</li>
            <li><strong>Disaster Recovery:</strong> Enables communication in areas where traditional networks are damaged or unavailable.</li>
            <li><strong>Personal Area Networks (PANs):</strong> Facilitates communication between devices like smartphones, laptops, and tablets in close proximity.</li>
          </ul>
        </div>
      </div>
    )
  },
  
  {
    title: 'Short Notes on Networking Concepts',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">a. Multicast</h3>
          <p><strong>Definition:</strong> Multicast is a communication method where data is sent from one source to multiple specific destinations simultaneously.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Group Communication:</strong> Targets a group of receivers rather than all nodes in a network.</li>
            <li><strong>Efficient Use of Bandwidth:</strong> Reduces network traffic by sending a single copy of data to multiple recipients.</li>
          </ul>
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Used in streaming media, video conferencing, and online gaming.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">b. Anycast</h3>
          <p><strong>Definition:</strong> Anycast is a network addressing and routing method where data is sent to the nearest or best destination from a group of potential receivers.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Single Source to Multiple Destinations:</strong> The same address can be assigned to multiple nodes, and the routing infrastructure determines the closest one.</li>
            <li><strong>Load Balancing:</strong> Distributes requests across multiple servers to optimize resource use.</li>
          </ul>
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Commonly used in content delivery networks (CDNs) and DNS services.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">c. Admission Control</h3>
          <p><strong>Definition:</strong> Admission control is a network management technique that determines whether a new connection request can be accepted based on current network resources.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Resource Management:</strong> Ensures that the quality of service (QoS) is maintained by preventing network overload.</li>
            <li><strong>Dynamic Decisions:</strong> Can be based on current traffic conditions and resource availability.</li>
          </ul>
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Used in voice over IP (VoIP) and video conferencing to maintain call quality.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">d. Load Shedding</h3>
          <p><strong>Definition:</strong> Load shedding is a technique used to manage network congestion by selectively dropping packets or reducing the load on the network.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Prioritization:</strong> Typically involves prioritizing certain types of traffic while discarding less critical data.</li>
            <li><strong>Temporary Relief:</strong> Aims to alleviate congestion and maintain overall network performance.</li>
          </ul>
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Common in real-time applications where timely delivery is crucial, such as streaming services.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">e. Flooding</h3>
          <p><strong>Definition:</strong> Flooding is a simple routing technique where every incoming packet is sent to all outgoing links except the one it arrived on.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>No Routing Table:</strong> Does not require a routing table; every node forwards packets to all neighbors.</li>
            <li><strong>Redundancy:</strong> Can lead to multiple copies of the same packet being sent through the network.</li>
          </ul>
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Used in network discovery protocols and in scenarios where the network topology is unknown.</li>
          </ul>
        </div>
      </div>
    )
  },
  
  {
    title: 'Approaches to Congestion Control',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">1. Preventive Approaches</h3>
          <p><strong>Definition:</strong> These methods aim to prevent congestion before it occurs by managing traffic flow and resource allocation.</p>
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Traffic Shaping:</strong> Regulates the flow of data into the network by controlling the rate at which packets are sent.</li>
            <li><strong>Admission Control:</strong> Limits the number of connections or sessions based on current network capacity to avoid overload.</li>
            <li><strong>Resource Reservation:</strong> Allocates bandwidth and resources in advance for specific applications or users to ensure Quality of Service (QoS).</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">2. Reactive Approaches</h3>
          <p><strong>Definition:</strong> These methods respond to congestion after it has been detected, adjusting the flow of data accordingly.</p>
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Backoff Algorithms:</strong> When congestion is detected, nodes reduce their transmission rate or wait before sending more data (e.g., exponential backoff).</li>
            <li><strong>Explicit Congestion Notification (ECN):</strong> Routers mark packets to indicate congestion, prompting senders to reduce their transmission rate.</li>
            <li><strong>Packet Dropping:</strong> Routers may drop packets when congestion occurs, signaling to senders to slow down (e.g., Random Early Detection (RED)).</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">3. Congestion Avoidance Algorithms</h3>
          <p><strong>Definition:</strong> These algorithms aim to avoid congestion by dynamically adjusting the transmission rate based on network conditions.</p>
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>TCP Congestion Control:</strong> Utilizes algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery to manage data flow.</li>
            <li><strong>Window-Based Control:</strong> Adjusts the size of the transmission window based on network feedback to optimize throughput without causing congestion.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">4. Load Balancing</h3>
          <p><strong>Definition:</strong> Distributes network traffic across multiple paths or resources to prevent any single point from becoming congested.</p>
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Routing Protocols:</strong> Use algorithms to distribute traffic evenly across available routes (e.g., Equal-Cost Multi-Path (ECMP)).</li>
            <li><strong>Server Load Balancers:</strong> Direct incoming traffic to multiple servers to ensure no single server is overwhelmed.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">5. Quality of Service (QoS) Mechanisms</h3>
          <p><strong>Definition:</strong> QoS mechanisms prioritize certain types of traffic to ensure that critical applications receive the necessary bandwidth and low latency.</p>
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Traffic Prioritization:</strong> Assigns priority levels to different types of traffic (e.g., VoIP, video streaming) to ensure timely delivery.</li>
            <li><strong>Differentiated Services (DiffServ):</strong> Classifies and manages network traffic based on predefined service levels.</li>
          </ul>
        </div>
      </div>
    )
  },
  
  {
    title: 'Integrated Services vs Differentiated Services in QoS',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">1. Integrated Services (IntServ)</h3>
          <p><strong>Definition:</strong> IntServ is a QoS architecture that provides end-to-end QoS guarantees for individual flows of data.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Per-Flow Resource Reservation:</strong> Each data flow must reserve resources (bandwidth, buffer space) in advance throughout the network.</li>
            <li><strong>Signaling Protocol:</strong> Uses protocols like Resource Reservation Protocol (RSVP) to establish and maintain reservations.</li>
            <li><strong>Strict QoS Guarantees:</strong> Provides guaranteed bandwidth, low latency, and low jitter for applications that require it.</li>
          </ul>
          <h4 className="font-semibold">Advantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Predictable Performance:</strong> Ensures that applications receive the required resources, making it suitable for real-time applications like VoIP and video conferencing.</li>
            <li><strong>Fine-Grained Control:</strong> Allows for detailed control over individual flows.</li>
          </ul>
          <h4 className="font-semibold">Disadvantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Scalability Issues:</strong> Managing reservations for a large number of flows can be complex and resource-intensive.</li>
            <li><strong>Overhead:</strong> The signaling and management of reservations can introduce additional overhead in the network.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">2. Differentiated Services (DiffServ)</h3>
          <p><strong>Definition:</strong> DiffServ is a QoS architecture that provides different levels of service to different types of traffic without requiring per-flow resource reservations.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Traffic Classification:</strong> Traffic is classified into different classes based on predefined policies, and each class is treated according to its priority.</li>
            <li><strong>Per-Hop Behavior (PHB):</strong> Defines how packets are treated at each router based on their class, allowing for varying levels of service.</li>
            <li><strong>Scalable:</strong> Designed to handle a large number of flows without the need for individual reservations.</li>
          </ul>
          <h4 className="font-semibold">Advantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Scalability:</strong> Can efficiently manage a large number of flows without the complexity of per-flow reservations.</li>
            <li><strong>Flexibility:</strong> Allows for dynamic adjustment of traffic classes and priorities based on network conditions.</li>
          </ul>
          <h4 className="font-semibold">Disadvantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Less Predictable:</strong> Does not provide strict guarantees for individual flows, which may lead to variable performance for sensitive applications.</li>
            <li><strong>Complexity in Policy Management:</strong> Requires careful configuration of traffic classes and policies to ensure desired QoS levels.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Summary</h3>
          <p>
            Integrated Services (IntServ) and Differentiated Services (DiffServ) are two key approaches for providing Quality of Service (QoS) in networks. 
            IntServ offers strict end-to-end guarantees for individual data flows, ideal for applications like VoIP or video conferencing but struggles with scalability. 
            In contrast, DiffServ is more scalable and flexible, making it suitable for large networks but offers less predictability for individual flows.
          </p>
        </div>
      </div>
    )
  },  

  {
    title: 'Bellman-Ford Algorithm (Distance Vector Routing)',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Overview</h3>
          <p><strong>Purpose:</strong> The Bellman-Ford algorithm computes the shortest path from a source node to all other nodes in a network, even when negative weight edges are present.</p>
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Distance Vector Routing:</strong> Each node maintains a table (vector) that holds the shortest known distance to each destination and the next hop to reach that destination.</li>
            <li><strong>Iterative Process:</strong> The algorithm iteratively updates the distance estimates based on the information received from neighboring nodes.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Algorithm Steps</h3>
          <h4 className="font-semibold">1. Initialization:</h4>
          <p>Set the distance to the source node to 0 and the distance to all other nodes to infinity.</p>
  
          <h4 className="font-semibold">2. Relaxation:</h4>
          <p>For each edge in the graph, update the distance to the destination node if a shorter path is found through the source node. This process is repeated for a total of (V - 1) iterations, where V is the number of vertices in the graph.</p>
  
          <h4 className="font-semibold">3. Negative Cycle Detection:</h4>
          <p>After (V - 1) iterations, perform one more iteration over all edges. If any distance can still be updated, it indicates the presence of a negative weight cycle in the graph.</p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Applications</h3>
          <h4 className="font-semibold">1. Distance Vector Routing Protocols:</h4>
          <p>Used in protocols like Routing Information Protocol (RIP) to determine the best path for data packets in a network.</p>
  
          <h4 className="font-semibold">2. Network Optimization:</h4>
          <p>Helps in optimizing routing paths in various network topologies.</p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Advantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Handles Negative Weights:</strong> Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs with negative weight edges.</li>
            <li><strong>Simplicity:</strong> The algorithm is straightforward and easy to implement.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Disadvantages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Time Complexity:</strong> The time complexity is O(V * E), where V is the number of vertices and E is the number of edges, making it less efficient for large graphs compared to Dijkstra's algorithm.</li>
            <li><strong>Not Suitable for Real-Time Applications:</strong> Due to its iterative nature, it may not be suitable for real-time applications requiring immediate path updates.</li>
          </ul>
        </div>
      </div>
    )
  },
  
  {
    title: 'Virtual Circuit vs Datagram Subnets',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">1. Virtual Circuit Subnets</h3>
          <p><strong>Definition:</strong> A Virtual Circuit (VC) subnet establishes a pre-defined path (virtual circuit) between the source and destination before data transmission begins.</p>
          
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Connection-Oriented:</strong> A connection is established before any data is sent, ensuring a dedicated path for the duration of the session.</li>
            <li><strong>Fixed Path:</strong> All packets follow the same route through the network, which is determined at the time of connection establishment.</li>
            <li><strong>State Information:</strong> Routers maintain state information about the virtual circuit, including the path and resources allocated.</li>
          </ul>
          
          <h4 className="font-semibold">Advantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Reliable Delivery:</strong> Guarantees in-order delivery of packets since they follow the same path.</li>
            <li><strong>Resource Management:</strong> Allows for better resource allocation and management since the path is established in advance.</li>
            <li><strong>Quality of Service (QoS):</strong> Easier to provide QoS guarantees due to the fixed path and resource allocation.</li>
          </ul>
  
          <h4 className="font-semibold">Disadvantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Setup Time:</strong> Requires time to establish the connection before data can be sent, which can introduce latency.</li>
            <li><strong>Scalability Issues:</strong> Maintaining state information for many connections can be resource-intensive for routers.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">2. Datagram Subnets</h3>
          <p><strong>Definition:</strong> A Datagram subnet uses a connectionless approach where each packet (datagram) is treated independently and can take different paths to reach the destination.</p>
          
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Connectionless:</strong> No pre-established path; each packet is routed independently based on the current network conditions.</li>
            <li><strong>Variable Path:</strong> Packets may take different routes to the destination, leading to potential variations in delivery time.</li>
            <li><strong>No State Information:</strong> Routers do not maintain state information about individual packets.</li>
          </ul>
  
          <h4 className="font-semibold">Advantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Flexibility:</strong> More adaptable to changes in network topology and conditions, as packets can be rerouted dynamically.</li>
            <li><strong>Lower Overhead:</strong> No need for connection setup or maintenance of state information, leading to lower resource usage.</li>
            <li><strong>Scalability:</strong> Can handle a large number of packets and users without the overhead of maintaining connections.</li>
          </ul>
  
          <h4 className="font-semibold">Disadvantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Unreliable Delivery:</strong> No guarantees for packet delivery order or reliability; packets may arrive out of order or be lost.</li>
            <li><strong>Complexity in Handling:</strong> Applications may need to implement their own mechanisms for ensuring reliability and ordering.</li>
          </ul>
        </div>
      </div>
    )
  },
  
  {
    title: 'Traffic-Aware Routing',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Traffic-Aware Routing</h3>
          <p><strong>Definition:</strong> Traffic-aware routing is a network routing strategy that takes into account the current traffic conditions in the network to optimize the routing of data packets. This approach aims to improve network performance, reduce congestion, and enhance the overall quality of service (QoS) for users.</p>
          
          <h4 className="font-semibold">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Dynamic Adaptation:</strong> Routes are adjusted in real-time based on current traffic loads, latency, and other network conditions.</li>
            <li><strong>Traffic Monitoring:</strong> Continuous monitoring of network traffic is essential to gather data on congestion levels, packet loss, and delays.</li>
            <li><strong>Load Balancing:</strong> Distributes traffic evenly across multiple paths to prevent any single path from becoming overloaded.</li>
          </ul>
  
          <h4 className="font-semibold">Techniques Used:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Traffic Prediction:</strong> Uses historical data and algorithms to predict future traffic patterns, allowing for proactive routing decisions.</li>
            <li><strong>Congestion Detection:</strong> Identifies congested links or nodes in the network and reroutes traffic away from these areas.</li>
            <li><strong>Adaptive Routing Protocols:</strong> Protocols such as Open Shortest Path First (OSPF) and Enhanced Interior Gateway Routing Protocol (EIGRP) can adapt routes based on real-time traffic conditions.</li>
            <li><strong>Quality of Service (QoS) Mechanisms:</strong> Implements QoS policies to prioritize certain types of traffic (e.g., voice, video) over others, ensuring that critical applications receive the necessary bandwidth.</li>
          </ul>
  
          <h4 className="font-semibold">Advantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Improved Network Performance:</strong> Reduces latency and packet loss by avoiding congested paths, leading to a smoother user experience.</li>
            <li><strong>Enhanced Resource Utilization:</strong> Optimizes the use of available network resources, ensuring that bandwidth is used efficiently.</li>
            <li><strong>Increased Reliability:</strong> By dynamically adjusting routes, traffic-aware routing can provide more reliable connections, especially during peak usage times.</li>
          </ul>
  
          <h4 className="font-semibold">Disadvantages:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Complexity:</strong> Implementing traffic-aware routing can be complex, requiring sophisticated algorithms and real-time data analysis.</li>
            <li><strong>Overhead:</strong> Continuous monitoring and analysis of traffic can introduce additional overhead on network devices.</li>
            <li><strong>Potential for Instability:</strong> Rapid changes in routing decisions based on fluctuating traffic can lead to instability in the network if not managed properly.</li>
          </ul>
  
          <h4 className="font-semibold">Applications:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Data Centers:</strong> Traffic-aware routing is commonly used in data centers to manage the flow of data between servers and optimize resource allocation.</li>
            <li><strong>Content Delivery Networks (CDNs):</strong> CDNs utilize traffic-aware routing to deliver content efficiently based on user demand and network conditions.</li>
            <li><strong>Telecommunications:</strong> Telecom providers implement traffic-aware routing to manage voice and data traffic, ensuring quality service for users.</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: 'Shortest Path Routing Algorithm',
    content: (
      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Shortest Path Routing Algorithm</h3>
          <p><strong>Definition:</strong> The shortest path routing algorithm aims to find the most efficient path (in terms of distance, cost, or time) from a source node to a destination node in a network. This process helps in minimizing network resource usage while ensuring quick delivery of data packets.</p>
  
          <h4 className="font-semibold">Dijkstra's Shortest Path Algorithm</h4>
          <p>Dijkstra’s algorithm is one of the most widely used algorithms for finding the shortest paths from a source node to all other nodes in a weighted graph. It operates by systematically selecting the node with the smallest tentative distance, updating its neighbors, and ensuring the shortest path is calculated without revisiting nodes.</p>
  
          <h4 className="font-semibold">Problems in Dijkstra’s Shortest Path Algorithm:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Handling Negative Weights:</strong> Dijkstra’s algorithm doesn’t work properly when there are edges with negative weights, as it assumes that once a node's shortest distance is found, it won’t change. The presence of negative weights violates this assumption.</li>
            <li><strong>Performance with Dense Graphs:</strong> In dense graphs, Dijkstra's algorithm can have higher time complexity and might not be as efficient as other algorithms such as Bellman-Ford or A* in some scenarios.</li>
            <li><strong>Greedy Nature:</strong> The algorithm is greedy, making local choices based on the smallest known distance. While it works in many cases, it can fail in cases where global optimization is necessary, as it doesn’t always provide the optimal solution for complex conditions (such as with negative edge weights).</li>
            <li><strong>Memory Consumption:</strong> For large networks, Dijkstra's algorithm may require substantial memory to store the distances and visited nodes, which can be inefficient when memory is constrained.</li>
            <li><strong>Not Suitable for Dynamic Graphs:</strong> In graphs where edges are added or removed frequently (dynamic graphs), Dijkstra’s algorithm needs to be rerun entirely to adjust for the changes, making it less suitable for real-time applications.</li>
          </ul>
  
          <p><strong>Link to Video:</strong> For more details and a solution walkthrough, you can watch this video on <a href="https://www.youtube.com/watch?v=p9fPBS2S_Vk" target="_blank" className="text-blue-600 hover:underline">Shortest Path Routing Algorithm</a>.</p>
        </div>
      </div>
    )
  }
 
];

export default function NetworkTopics({ searchQuery = "" }) {
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.props.children.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="space-y-12 p-6 md:p-12">
      {filteredSections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
}

const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-2xl shadow-2xl p-8 transition-transform ">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6">{title}</h2>
      <div>{content}</div>
    </section>
  );
};
