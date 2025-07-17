import { useParams } from "react-router-dom"
import { useDetail } from "../hooks/useDetail";

export const AnimeDetail = () => {
  const params = useParams();
  console.log("🔍 Params from router:", params);

  const id = parseInt(params.id);
  console.log("🧪 Parsed ID:", id); // is it a number?

  const { data: anime } = useDetail(id);
  console.log("🎬 Anime detail:", anime);

  //console.log(anime);

  return (
    <main>
      <section className="flex flex-row">
        <div>
          <img src={anime.coverImage.extraLarge} alt="" />
        </div>
        <div>
          <h3 className="">{anime.title}</h3>
          <p className="" >{anime.description}</p>
        </div>
      </section>
    </main>
  )
}
