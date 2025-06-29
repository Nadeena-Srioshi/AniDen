import { Routes, Route } from "react-router-dom";
import { AnimeList, Search, AnimeDetail, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
       <Routes>
              <Route path="/" element={<AnimeList />} />
              <Route path="/movies/popular" element={<AnimeList />} />
              <Route path="/movies/top" element={<AnimeList />} />
              <Route path="/movies/upcomming" element={<AnimeList />} />
              <Route path="/movie/:id" element={<AnimeDetail />} />
              <Route path="search" element={<Search />} />
              <Route path="*" element={<PageNotFound />} />
       </Routes>
    </>
  )
}
