'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavBarItem({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
        <Link 
            className={`hover:text-red-500 transition-colors duration-300 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg' : ''}`}
            href={`/?genre=${param}`}
            >
                {title}
            </Link>
    </div>
  )
}
