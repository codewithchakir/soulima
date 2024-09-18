import NavBarItem from './NavBarItem';

export default function NavBar() {
  return (
    <div className='flex gap-4 p-2 sm:gap-6 bg-red-100 dark:bg-gray-600 lg:text-lg'>
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
