import Card from "./Card";

export default function Results({results}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto py-4 gap-4 mt-4'>
        {results.map((movie) => (
            <Card key={movie.id} movie={movie} />
        ))}
    </div>
  )
}
