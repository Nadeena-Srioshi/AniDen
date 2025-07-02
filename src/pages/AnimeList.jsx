import { AnimeCard } from "../components";
import { AnimeQuote } from "../components";
import { useFetch } from "../hooks/useFetch";

import backupPic from "../assets/images/backup.png"

export const AnimeList = ({status}) => {
  const {data: animes} = useFetch(status);

  return (
       <main>
          <section className="flex justify-center my-3">
            <AnimeQuote />
          </section>

          <section className="flex justify-center flex-wrap my-5">
            {animes.map((anime) => (
              <AnimeCard coverImage={anime.coverImage.extraLarge} title={anime.title.romaji} key={anime.id}/>
            ))}
          </section>
              

       </main>
    
  )
}
