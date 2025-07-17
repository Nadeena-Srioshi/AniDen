import { useSearchParams } from "react-router-dom";
import { AnimeCard } from "../components";
import { AnimeQuote } from "../components";
import { useSearch } from "../hooks/useSearch";

import backupPic from "../assets/images/backup.png"

export const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm  = searchParams.get("q");
  const {data: animes} = useSearch(queryTerm);

  return (
       <main>
          <section className="flex justify-center my-3">
            <p className="text-3xl text-gray-700 dark:text-white" >{animes.length === 0 ? `No results found for '${queryTerm}' ` : `Search results found for '${queryTerm}'`}</p>
          </section>

          <section className="flex justify-center flex-wrap my-5">
            {animes.map((anime) => (
              <AnimeCard coverImage={anime.coverImage.extraLarge || backupPic} title={anime.title.romaji} key={anime.id}/>
            ))}
          </section>
              

       </main>
    
  )
}
