import { Link } from "react-router-dom"
import pic from "../assets/images/backup.png"

export const AnimeCard = ({ anime }) => {


  return (
    <div className="w-96 h-[600px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${anime.id}`} className="h-7">
        <img className="rounded-t-lg w-full h-[450px]" src={anime.coverImage.extraLarge || pic} alt="" />

          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>

              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {anime.title?.romaji || 'Unknown Title'}
              </h5>


              <div className="space-y-1 mb-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {anime.format} {anime.episodes ? `· ${anime.episodes} episodes` : ''}
                </p>

                {(anime.season || anime.seasonYear) && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {anime.season} {anime.seasonYear}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              {anime.averageScore && (
                <p className="text-sm font-medium flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-700 dark:text-gray-300">{anime.averageScore}%</span>
                </p>
              )}

              {anime.status && (
                <span className={`px-2 py-1 text-xs rounded-full ${anime.status === 'FINISHED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                    anime.status === 'RELEASING' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                  {anime.status}
                </span>
              )}
            </div>
          </div>
      </Link>
    </div>
  )
}
