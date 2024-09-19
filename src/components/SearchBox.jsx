'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <form className="flex items-center gap-2"
     onSubmit={handleSubmit}
    >
        <input type="text" placeholder="Search for a keyword..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none" />
        <button 
            className="w-full sm:w-fit px-3.5 py-2 bg-red-500 hover:bg-red-900 text-white disabled:bg-gray-400 disabled:text-gray-500 text-sm font-medium rounded-lg transition-all duration-300"
            disabled={search === ''}
        >
            Search
        </button>
    </form>
  )
}
