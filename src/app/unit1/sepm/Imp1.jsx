import React from 'react';

export default function Imp1({ searchQuery = "" }) {
  const sections = [
    {
      title: "1. Software Development Models",
      content: (
        <section className="question" id="q1">
          <article id="waterfall-model" className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Waterfall Model</h3>
            <div className="diagram bg-gray-100 p-4 rounded-md font-mono whitespace-pre-wrap mb-4">
            {`+---------------------+  
|  Requirements       |  
+---------------------+  
        ↓            
+---------------------+  
|  Design             |  
+---------------------+  
        ↓            
+---------------------+  
|  Implementation     |  
+---------------------+  
        ↓            
+---------------------+  
|  Testing            |  
+---------------------+  
        ↓            
+---------------------+  
|  Deployment         |  
+---------------------+  
        ↓            
+---------------------+  
|  Maintenance        |  
+---------------------+`}
            </div>
            <p><strong>Definition:</strong> A traditional SDLC model that follows a linear and sequential approach.</p>
            <p><strong>Phases:</strong></p>
            <ul className="list-disc list-inside mb-2">
              <li><strong>Requirement Analysis:</strong> Gathering and documenting requirements.</li>
              <li><strong>System Design:</strong> Creating software architecture and system design.</li>
              <li><strong>Implementation:</strong> Writing the actual code.</li>
              <li><strong>Testing:</strong> Verifying that the software meets the requirements.</li>
              <li><strong>Deployment:</strong> Delivering the software to end users.</li>
              <li><strong>Maintenance:</strong> Fixing errors and making updates.</li>
            </ul>
            <p><strong>Advantages:</strong> Simple, structured, and well-documented.</p>
            <p><strong>Disadvantages:</strong> No flexibility for changes; difficult to adapt to evolving requirements.</p>
            <p><strong>Best Suited For:</strong> Small, well-defined projects with stable requirements.</p>
          </article>

          <article id="incremental-model" className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Incremental Model</h3>
            <div className="diagram bg-gray-100 p-4 rounded-md font-mono whitespace-pre-wrap mb-4">
          {` 
+--------+    +--------+    +--------+
|  V1    | →  |  V2    | →  |  V3    |
| (Core) |    |(+Feat1)|    |(+Feat2)|  
+--------+    +--------+    +--------+
              `}
            </div>
            <p><strong>Definition:</strong> Development and delivery in small, manageable increments, with each iteration adding functionality.</p>
            <p><strong>Phases:</strong></p>
            <ul className="list-disc list-inside mb-2">
              <li><strong>Requirements Analysis:</strong> For the entire system.</li>
              <li><strong>Design &amp; Development:</strong> Each increment adds a feature.</li>
              <li><strong>Testing:</strong> Each increment is tested separately.</li>
              <li><strong>Deployment:</strong> Each version is released to users.</li>
              <li><strong>Maintenance:</strong> Continuous improvements are applied.</li>
            </ul>
            <p><strong>Advantages:</strong> Allows user feedback after each increment and reduces initial development time.</p>
            <p><strong>Disadvantages:</strong> Requires proper planning and architecture.</p>
            <p><strong>Best Suited For:</strong> Large systems needing continuous improvement.</p>
          </article>

          <article id="boehm-spiral-model" className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Boehm Spiral Model</h3>
            <p><strong>Definition:</strong> A risk-driven model that combines iterative development with systematic risk assessment.</p>
            <p><strong>Phases:</strong></p>
            <ul className="list-disc list-inside mb-2">
              <li><strong>Planning:</strong> Identifying objectives, alternatives, and constraints.</li>
              <li><strong>Risk Analysis:</strong> Evaluating risks and creating mitigation plans.</li>
              <li><strong>Engineering:</strong> Developing and testing the software.</li>
              <li><strong>Evaluation:</strong> Reviewing the software with stakeholders.</li>
            </ul>
            <p><strong>Advantages:</strong> Flexible and effective for high-risk projects.</p>
            <p><strong>Disadvantages:</strong> Expensive, complex, and time-consuming.</p>
            <p><strong>Best Suited For:</strong> Large, complex, high-risk projects (e.g., military or aerospace).</p>
          </article>
        </section>
      ),
    },

    {
      title: "2. Mental Health Care - Case Study",
      content: (
        <section className="question" id="q2">
          <p><strong>Example:</strong> Mental Health Care Patient Management System (MHC-PMS)</p>
          <p><strong>Purpose:</strong> To store and manage patient records for mental health care services.</p>
          <p><strong>Users:</strong> Psychiatrists, psychologists, mental health nurses, and patients.</p>
          <p><strong>Key Components:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li><strong>Central Database:</strong> Stores patient history, diagnoses, treatments, and prescriptions.</li>
            <li><strong>Clinician Access Points:</strong> Allows doctors and nurses to update records.</li>
            <li><strong>Monitoring System:</strong> Alerts clinicians for critical cases.</li>
            <li><strong>Security and Privacy Controls:</strong> Ensures data confidentiality.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Requirements for MHC-PMS</h3>
          <p><strong>Functional Requirements:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Patient record management</li>
            <li>Appointment scheduling</li>
            <li>Prescription tracking</li>
            <li>Emergency alerts</li>
          </ul>
          <p><strong>Non-Functional Requirements:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Data security (encryption, access control)</li>
            <li>High availability and reliability</li>
            <li>Compliance with medical regulations</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">System Architecture Diagram</h3>
          <div className="diagram bg-gray-100 p-4 rounded-md font-mono whitespace-pre-wrap">
            User Interface  →  Doctor/Nurse Login, Patient Portal  
            Application Layer  →  Record Management, Appointment Scheduling, Alerts  
            Database  →  Patient History, Medications, Reports
          </div>
        </section>
      ),
    },

    {
      title: "3. Four Stages of Software Development",
      content: (
        <section className="question" id="q3">
          <article className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Software Specification</h3>
            <p>Defining system requirements (functional &amp; non-functional) using requirement documents, diagrams, and models.</p>
          </article>
          <article className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p>Designing the architecture and writing the code, including UI/UX design and integrations.</p>
          </article>
          <article className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Software Validation</h3>
            <p>Conducting various tests (unit, integration, system, user acceptance) to ensure the software meets requirements.</p>
          </article>
          <article className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Software Evolution</h3>
            <p>Providing ongoing updates, bug fixes, and feature enhancements to adapt to new business needs and technologies.</p>
          </article>
        </section>
      )
    },

    {
      title: "4. Structure of Documentation",
      content: (
        <section className="question" id="q4">
          <h3 className="text-xl font-semibold mb-2">User Documentation</h3>
          <p>User documentation is designed to assist end-users in understanding, installing, and using the software effectively. This includes user manuals, quick start guides, FAQs, troubleshooting tips, and instructional videos that help users navigate the software with ease.</p>
          <h3 className="text-xl font-semibold mb-2">Technical Documentation</h3>
          <p>Technical documentation provides detailed insights into the software’s architecture and design. It includes system design documents, architecture diagrams, API references, data flow diagrams, and design rationales. This documentation is crucial for developers, system architects, and technical stakeholders to understand and maintain the system.</p>
          <h3 className="text-xl font-semibold mb-2">Process Documentation</h3>
          <p>Process documentation outlines the procedures, methodologies, and standards followed during the software development lifecycle. It comprises project plans, schedules, test plans, requirement analysis reports, change logs, and post-mortem analyses. This helps maintain consistency, ensures quality, and provides guidance for future projects.</p>
          <h3 className="text-xl font-semibold mb-2">Source Code Documentation</h3>
          <p>Source code documentation includes inline comments, detailed function and class descriptions, README files, and code examples. It serves as a guide for current and future developers, enabling easier maintenance, updates, and a clear understanding of the codebase.</p>
        </section>
      )
    },

    {
      title: "5. Requirement Analysis Code of Ethics",
      content: (
        <section className="question" id="q5">
          <h2 className="text-2xl font-bold mb-4">5. Requirement Analysis &amp; Code of Ethics</h2>
          <h3 className="text-xl font-semibold mb-2">Requirement Analysis</h3>
          <p>Identifying user needs and constraints—including functional, non-functional, domain-specific, and regulatory requirements—is critical. Techniques such as interviews, surveys, prototyping, observation, and document analysis help in gathering comprehensive requirements.</p>
          <h3 className="text-xl font-semibold mb-2">Software Engineering Code of Ethics (ACM/IEEE)</h3>
          <ul className="list-disc list-inside mb-2">
            <li><strong>Public Interest:</strong> Prioritize user safety and well-being.</li>
            <li><strong>Client &amp; Employer:</strong> Act in their best interests.</li>
            <li><strong>Product Quality:</strong> Ensure high standards in software performance and reliability.</li>
            <li><strong>Professional Judgment:</strong> Make unbiased, ethical decisions.</li>
            <li><strong>Management Responsibility:</strong> Lead teams ethically.</li>
            <li><strong>Professionalism:</strong> Uphold integrity and competence.</li>
            <li><strong>Colleagues:</strong> Be supportive and fair.</li>
            <li><strong>Self-Improvement:</strong> Continue learning and staying updated.</li>
          </ul>
        </section>
      )
    },

    {
      title: "6. Quality of Good Software",
      content: (
        <section className="question" id="q6">
          <h3 className="text-xl font-semibold mb-2">Maintainability</h3>
          <p>Good software should be easy to modify and update. This involves using clear and well-documented code, a modular design, and following coding standards. Maintainability ensures that future changes or enhancements can be implemented with minimal effort and risk.</p>
          <h3 className="text-xl font-semibold mb-2">Reliability</h3>
          <p>Reliability means the software consistently performs its intended functions under various conditions. Robust error handling, fault tolerance, and comprehensive testing help in minimizing unexpected failures, ensuring the system remains dependable over time.</p>
          <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
          <p>Efficiency relates to the optimal use of system resources such as CPU, memory, and storage. Efficient software offers fast response times and scales effectively as the load increases, which is crucial for performance-critical applications.</p>
          <h3 className="text-xl font-semibold mb-2">Usability</h3>
          <p>Usability focuses on creating an intuitive and user-friendly interface. A well-designed UI/UX facilitates easy navigation, accessibility for users with different abilities, and reduces the learning curve for new users, thereby enhancing overall satisfaction.</p>
          <h3 className="text-xl font-semibold mb-2">Portability</h3>
          <p>Portability ensures that the software can run on multiple platforms and operating environments with minimal modifications. This flexibility is important in a diverse technological ecosystem, helping to extend the software's reach and lifespan.</p>
          <h3 className="text-xl font-semibold mb-2">Security</h3>
          <p>Security is critical to protect data and maintain user trust. Implementing robust authentication, encryption, and access controls, along with regular security audits, helps safeguard the software against unauthorized access and cyber threats.</p>
        </section>
      )
    }
  ];

  // Filter sections based on searchQuery
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (typeof section.content === 'string' ? section.content.toLowerCase().includes(searchQuery.toLowerCase()) : false)
  );

  return (
    <main className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {filteredSections.map((section, index) => (
        <section key={index} className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">{section.title}</h2>
          {section.content}
        </section>
      ))}
    </main>
  );
}
