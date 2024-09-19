import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function SearchPage({params}) {
    console.log(params);
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const results = data.results;
    return (
        <div>
          {results && results.length === 0 ? (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-3xl font-bold">No results found</h1>
            </div>
          ) : (
            results && <Results results={results} />
          )}
        </div>
      );
}
