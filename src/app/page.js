'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-[calc(100vh-64px)] px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Welcome to the Department Exam Portal
        </h1>
        <p className="text-lg mb-6 text-center max-w-xl">
          Access important exam questions and resources easily. Prepare and review key topics for your exams with just a few clicks.
        </p>
        <Link href="/mse2" legacyBehavior>
          <a className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Mse 2 fcn notes
          </a>
        </Link>
      </main>
    </>
  );
}
