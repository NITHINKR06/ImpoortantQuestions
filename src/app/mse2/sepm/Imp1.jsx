import React from 'react'

export default function Imp1() {
    return (
        <main className="space-y-12">
          <Section
            title="1. Context modeling (MHC-PMS)"
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
    
          <Section
            title="2. Sequence diagram (patient info and transfer data)"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> Sequence diagrams model time-ordered interactions between components.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Info Retrieval:</h3>
                  <ol className="list-decimal ml-8 text-gray-700 space-y-2">
                    <li>
                      <strong>Actor</strong>: Doctor sends <code>getPatientData()</code> request.
                    </li>
                    <li>
                      <strong>System</strong>:
                      <ul className="list-disc ml-6 space-y-1">
                        <li>
                          <code>PatientInterface</code> forwards the request to <code>DatabaseServer</code>.
                        </li>
                        <li>
                          <code>DatabaseServer</code> validates access rights and returns encrypted data.
                        </li>
                        <li>
                          <code>PatientInterface</code> decrypts and displays records.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Lifelines</strong>: Doctor, PatientInterface, DatabaseServer.
                    </li>
                    <li>
                      <strong>Messages</strong>: <code>getPatientData() → validateUser() → returnData()</code>.
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Transfer Process:</h3>
                  <ol className="list-decimal ml-8 text-gray-700 space-y-2">
                    <li>
                      <strong>Actor</strong>: Admin triggers <code>transferData()</code> to an external system.
                    </li>
                    <li>
                      <strong>System</strong>:
                      <ul className="list-disc ml-6 space-y-1">
                        <li>
                          <code>TransferModule</code> formats data and sends it via REST API.
                        </li>
                        <li>
                          <strong>ExternalSystem</strong> acknowledges receipt with <code>HTTP 200 OK</code>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Activation Bars</strong>: Indicate processing during encryption/decryption.
                    </li>
                  </ol>
                </div>
                <p className="mt-4 text-gray-700">
                  <strong>Reference</strong>: Chapter 5 (Lecture 1) uses sequence diagrams for "View Patient Info" and "Transfer Data" in MHC-PMS.
                </p>
              </>
            }
          />
    
          <Section
            title="3. Activity model (insulin pump)"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> An activity diagram for an insulin pump includes:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>
                    <strong>Start Node</strong>: Sensor detects blood glucose level.
                  </li>
                  <li>
                    <strong>Decisions</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>If glucose &gt; 180 mg/dL, proceed to "Calculate Dose."</li>
                      <li>If glucose &lt; 70 mg/dL, trigger "Low Glucose Alert."</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Actions</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        <code>Monitor Glucose</code> → <code>Calculate Dose</code> → <code>Administer Insulin</code> → <code>Log Activity</code>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Concurrency</strong>: Parallel actions like "Update Display" and "Check Battery" during monitoring.
                  </li>
                  <li>
                    <strong>End Node</strong>: Dose delivered or error state (e.g., "Blockage Detected").
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  <strong>Example</strong>: Chapter 5 (Lecture 2) shows how the pump halts delivery if the "Safety Check" fails.
                </p>
              </>
            }
          />
    
          <Section
            title="4. State diagram"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> State diagrams model system behavior through states and transitions.
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>
                    <strong>Example – Microwave Oven</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        <strong>States</strong>:
                        <ul className="list-disc ml-6 mt-1 space-y-1">
                          <li><code>Idle</code>: Default state.</li>
                          <li><code>Cooking</code>: Active when the timer is running.</li>
                          <li><code>Paused</code>: Triggered by opening the door.</li>
                          <li><code>Error</code>: Activated for faults (e.g., overheating).</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Transitions</strong>:
                        <ul className="list-disc ml-6 mt-1 space-y-1">
                          <li><code>Idle → Cooking</code>: On <code>startButtonPressed()</code>.</li>
                          <li><code>Cooking → Paused</code>: On <code>doorOpened()</code>.</li>
                          <li><code>Paused → Idle</code>: On <code>doorClosed()</code>.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Events</strong>: <code>timerExpired()</code>, <code>sensorFailure()</code>.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  <strong>Reference</strong>: Chapter 5 (Lecture 2) demonstrates state transitions in a microwave oven for safety protocols.
                </p>
              </>
            }
          />
    
          <Section
            title="5. Use case diagrams (health care and weather)"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong>
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare (MHC-PMS)</h3>
                  <ul className="list-disc ml-8 text-gray-700 space-y-2">
                    <li><strong>Actors</strong>: Doctor, Patient, Lab Technician.</li>
                    <li>
                      <strong>Use Cases</strong>:
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li><code>Schedule Appointment</code>: Initiated by Patient.</li>
                        <li><code>Prescribe Medication</code>: Doctor links dosage to patient records.</li>
                        <li><code>Generate Lab Report</code>: Lab Technician uploads results.</li>
                      </ul>
                    </li>
                    <li><strong>Diagram</strong>: Actors connected to use cases with association lines.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Weather Station</h3>
                  <ul className="list-disc ml-8 text-gray-700 space-y-2">
                    <li><strong>Actors</strong>: Admin, Sensor, Meteorological API.</li>
                    <li>
                      <strong>Use Cases</strong>:
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li><code>Calibrate Sensor</code>: Admin adjusts settings.</li>
                        <li><code>Transmit Data</code>: System sends summarized data to a server.</li>
                        <li><code>Predict Storm</code>: Uses historical data for alerts.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-700">
                  <strong>Reference</strong>: Chapter 7 (Lecture 1) describes use cases like "Report Weather" for a weather station.
                </p>
              </>
            }
          />
    
          <Section
            title="6. Agile principle"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> Core principles from the <strong>Agile Manifesto</strong> (Chapter 3, Lecture 1):
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>
                    <strong>Customer Collaboration</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>Regular feedback loops (e.g., sprint reviews in Scrum).</li>
                      <li>Example: MHC-PMS developers demo new features to clinicians weekly.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Working Software</strong>: Prioritize functional increments over exhaustive documentation.
                  </li>
                  <li>
                    <strong>Responding to Change</strong>: Flexible backlog refinement (e.g., reprioritizing user stories).
                  </li>
                  <li>
                    <strong>Individuals and Interactions</strong>: Daily stand-ups to resolve blockers.
                  </li>
                  <li>
                    <strong>Sustainable Pace</strong>: Avoid burnout with timeboxed sprints (2–4 weeks).
                  </li>
                </ul>
              </>
            }
          />
    
          <Section
            title="7. Extreme programming"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> <strong>XP Practices</strong> (Chapter 3, Lecture 1–2):
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>
                    <strong>Test-Driven Development (TDD)</strong>: Write tests before code (e.g., JUnit tests for dose calculation in MHC-PMS).
                  </li>
                  <li>
                    <strong>Pair Programming</strong>: Two developers work together on one workstation to reduce bugs.
                  </li>
                  <li>
                    <strong>Continuous Integration</strong>: Automate code integration and testing (e.g., Jenkins pipelines).
                  </li>
                  <li>
                    <strong>Refactoring</strong>: Simplify code without changing functionality (e.g., removing duplicate methods).
                  </li>
                  <li>
                    <strong>User Stories</strong>: Replace formal requirements with customer-centric scenarios (e.g., "As a doctor, I need to override allergy warnings").
                  </li>
                </ul>
              </>
            }
          />
    
          <Section
            title="8. Test driven development"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> <strong>TDD Workflow</strong> (Chapter 8, Lecture 2):
                </p>
                <ol className="list-decimal ml-8 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Red Phase</strong>: Write a failing test for a new feature (e.g., test <code>calculateInsulinDose()</code> returns the correct value).
                  </li>
                  <li>
                    <strong>Green Phase</strong>: Implement minimal code to pass the test.
                  </li>
                  <li>
                    <strong>Refactor Phase</strong>: Optimize code (e.g., replace magic numbers with constants).
                  </li>
                </ol>
                <p className="mb-4 text-gray-700">
                  <strong>Benefits</strong>:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Regression Safety</strong>: Automated tests catch breaking changes.
                  </li>
                  <li>
                    <strong>Documentation</strong>: Tests act as live specifications (e.g., <code>testTransferData()</code> clarifies data formatting rules).
                  </li>
                </ul>
                <p className="text-gray-700">
                  <strong>Tools</strong>: JUnit, Selenium, or pytest for automation.
                </p>
              </>
            }
          />
    
          <Section
            title="9. General testing model"
            content={
              <>
                <p className="mb-4 text-gray-700">
                  <strong>Answer:</strong> <strong>Testing Levels</strong> (Chapter 8, Lecture 1–2):
                </p>
                <ol className="list-decimal ml-8 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Unit Testing</strong>:
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>Validate individual methods (e.g., <code>Patient.class</code> methods in MHC-PMS).</li>
                      <li>Tools: JUnit, Mockito for mocking dependencies.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Integration Testing</strong>: Test interactions (e.g., EHR system ↔ Pharmacy API).
                  </li>
                  <li>
                    <strong>System Testing</strong>: End-to-end validation (e.g., simulating 100 concurrent users).
                  </li>
                  <li>
                    <strong>Acceptance Testing</strong>: User-driven validation (e.g., clinicians test prescription workflows).
                  </li>
                </ol>
                <p className="mb-4 text-gray-700">
                  <strong>Process</strong>:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Test Planning</strong>: Define scope (e.g., "All allergy warnings must be tested").
                  </li>
                  <li>
                    <strong>Defect Management</strong>: Track issues via tools like JIRA.
                  </li>
                </ul>
                <p className="text-gray-700">
                  <strong>Reference</strong>: Chapter 8 emphasizes automated regression testing for CI/CD pipelines.
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

