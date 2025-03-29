import React from 'react'

export default function Imp1() {
    return (
        <main className="space-y-12">
          <Section
            title=""
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> Context modeling defines the system’s operational environment and boundaries. For{" "}
                  <strong>MHC-PMS (Mental Health Care-Patient Management System)</strong>, this involves:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>
                    <strong>Actors</strong>: Patients, doctors, nurses, lab systems, billing systems, and emergency services.
                  </li>
                  <li>
                    <strong>External Systems</strong>: Pharmacy databases, insurance portals, and external EHR systems.
                  </li>
                  <li>
                    <strong>Boundaries</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        <strong>Internal</strong>: Patient records, appointment scheduling, treatment plans.
                      </li>
                      <li>
                        <strong>External</strong>: Third-party billing systems, lab result integrations.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Interfaces</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>APIs for data exchange (e.g., lab results sent to MHC-PMS).</li>
                      <li>HL7/FHIR standards for healthcare data interoperability.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Diagram</strong>: A UML context diagram places MHC-PMS at the center with bidirectional arrows to external entities like "Lab System" and "Pharmacy."
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  <strong>Example</strong>: The MHC-PMS context model in Chapter 5 (Lecture 1) highlights interactions with "Emergency Services" for crisis alerts, ensuring real-time data sharing.
                </p>
              </>
            }
          />
        </main>
      );
    };
    
    // Reusable Section component defined locally in Imp1
    const Section = ({ title, content }) => {
      return (
        <section className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
          <div>{content}</div>
        </section>
      );
};

