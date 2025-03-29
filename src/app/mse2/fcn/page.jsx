import React from "react";

export default function FSN() {
    const sections = [
      {
        title: "1. IPv4 vs IPv6 Headers",
        content: (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">IPv4 Header</h3>
                <ul className="list-disc pl-6">
                  <li>20-60 bytes (variable length)</li>
                  <li>Fields: Version, IHL, TOS, Total Length, TTL</li>
                  <li>Fragmentation support</li>
                  <li>Checksum field</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">IPv6 Header</h3>
                <ul className="list-disc pl-6">
                  <li>Fixed 40 bytes</li>
                  <li>Simplified structure</li>
                  <li>128-bit addresses</li>
                  <li>No fragmentation</li>
                  <li>Flow Label field</li>
                </ul>
              </div>
            </div>
          </>
        )
      },
      {
        title: "2. IP Address Classes",
        content: (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Range</th>
                  <th className="px-4 py-2">Subnet Mask</th>
                  <th className="px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">A</td>
                  <td className="px-4 py-2">1.0.0.0 - 127.255.255.255</td>
                  <td className="px-4 py-2">255.0.0.0</td>
                  <td className="px-4 py-2">Large organizations</td>
                </tr>
                {/* Add other classes similarly */}
              </tbody>
            </table>
          </div>
        )
      },
      {
        title: "3. Error Control & Flow Control",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800">Error Control</h4>
              <ul className="list-disc pl-6 mt-2">
                <li>Checksums</li>
                <li>CRC</li>
                <li>ARQ protocols</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800">Flow Control</h4>
              <ul className="list-disc pl-6 mt-2">
                <li>Sliding Window</li>
                <li>TCP Congestion Control</li>
                <li>Window Scaling</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "4. Short Notes",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['NAT', 'DHCP', 'ICMP', 'ARP', 'MPLS'].map((term) => (
              <div key={term} className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2 text-gray-700">{term}</h4>
                <p className="text-sm text-gray-600">
                  {term === 'NAT' && 'Network Address Translation...'}
                  {/* Add other descriptions */}
                </p>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "5. Three-Way Handshake",
        content: (
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">1</div>
                <div className="ml-4">
                  <h4 className="font-semibold">SYN</h4>
                  <p className="text-sm">Client sends SYN packet</p>
                </div>
              </div>
              {/* Add other steps similarly */}
            </div>
          </div>
        )
      },
      // Add other sections following similar patterns
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Networking Concepts</h1>
          
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                {section.title}
              </h2>
              <div className="mt-4 text-gray-700">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }