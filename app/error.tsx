'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <h2 className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
        Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
        <p className='text-xl'>
          Or go back to <Link href='/' className="underline">Home Page</Link>
        </p>
      </button>
    </main>
  );
}
