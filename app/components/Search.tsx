'use client';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchTerm === '') return;
      setSearchTerm('');
      router.push(`/${searchTerm}/`);
    },
    [searchTerm]
  );

  const handleChagneInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value),
    []
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChagneInput}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
      >
        🚀
      </button>
    </form>
  );
}
