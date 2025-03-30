import React from 'react'

export default function Imp1() {
    return (
        <main className="space-y-12">
          <Section
            title=""
            content={
              <>
                Pending.....!
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

