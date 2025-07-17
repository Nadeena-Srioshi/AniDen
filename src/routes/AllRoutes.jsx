import { Routes, Route } from "react-router-dom";
import { AnimeList, Search, AnimeDetail, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
       <Routes>
              <Route path="/" element={<AnimeList status="RELEASING"  />} />
              <Route path="/movies/popular" element={<AnimeList status="popular"  />} />
              <Route path="/movies/aired" element={<AnimeList status="FINISHED" />} />
              <Route path="/movies/upcomming" element={<AnimeList status="NOT_YET_RELEASED" />} />
              <Route path="/movie/:id" element={<AnimeDetail />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<PageNotFound />} />
       </Routes>
    </div>
  )
}
