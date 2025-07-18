import { AnimeCard } from "../components";
import { AnimeQuote } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import backupPic from "../assets/images/backup.png"


export const AnimeList = ({status, title}) => {
  const {data: animes} = useFetch(status);
  const pageTitle = useTitle(title);


  return (
       <main>
          <section className="flex justify-center my-3">
            <AnimeQuote />
          </section>

          <section className="flex justify-center flex-wrap my-5">
            {animes.map((anime) => (
              <AnimeCard anime={anime} key={anime.id}/>
            ))}
          </section>
              

       </main>
    
  )
}
