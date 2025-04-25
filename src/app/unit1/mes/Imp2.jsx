import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AssemblyPrograms() {
  return (
    <main className="space-y-12 p-4">
      
      <ToastContainer />
    </main>
  );
}

const Section = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 transition-all duration-200">
      <div
        className="flex justify-between items-center cursor-pointer p-3 sm:p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800">{title}</h2>
        <span className="text-xl sm:text-2xl text-indigo-600 ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 sm:mt-6 animate-fadeIns">
          {content}
        </div>
      )}
    </section>
  );
};

const CodeBlock = ({ children }) => {
  const preRef = React.useRef(null);

  const handleCopy = () => {
    if (preRef.current) {
      const textToCopy = preRef.current.innerText;
      navigator.clipboard.writeText(textToCopy);
      toast.success('Copied!', { autoClose: 2000, position: 'top-center', bodyClassName: 'text-xs' });
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none text-xs sm:text-sm"
        onClick={handleCopy}
      >
        Copy
      </button>

      <pre
        ref={preRef}
        className="bg-gray-200 p-3 sm:p-4 rounded text-gray-800 overflow-auto whitespace-pre-wrap text-sm sm:text-base"
      >
        {children}
      </pre>
    </div>
  );
};

export { AssemblyPrograms };
