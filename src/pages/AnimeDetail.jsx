import { useParams } from "react-router-dom"
import { useDetail } from "../hooks/useDetail";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const AnimeDetail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const { data: anime, loading, error } = useDetail(id);

  // useEffect(() => {
  //   if (anime?.title?.romaji) {
  //     document.title = `${anime.title.romaji} / AniDen`;
  //   }
  // }, [anime]);

  useTitle(anime?.title?.romaji);

if (loading) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading anime details...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-400/50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Error</h2>
          <p className="text-red-700 dark:text-red-300">{error.message}</p>
        </div>
      </div>
    </div>
  );

  if (!anime) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 text-lg">No anime found</p>
      </div>
    </div>
  );



  return (
    <main>
      <div className="my-4 overflow-hidden ">
          <div className="flex flex-col sm:flex-row ">
            {/* Image Section */}
            <div className="relative group">
              <img 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                src={anime.coverImage.extraLarge} 
                alt={anime.title.romaji}
              />
            </div>
            
            {/* Content Section */}
            <div className="sm:w-2/3 xl:w-3/4 p-8">
              <div className="space-y-6">
                {/* Title */}
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    {anime.title.romaji}
                  </h1>
                  {anime.title.english && anime.title.english !== anime.title.romaji && (
                    <h2 className="text-xl text-gray-600 dark:text-gray-300 mt-2">
                      {anime.title.english}
                    </h2>
                  )}
                </div>

                {/* Description */}
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: anime.description }} 
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {anime.popularity?.toLocaleString() || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Popularity
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {anime.averageScore || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Average Score
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {anime.episodes || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Episodes
                    </div>
                  </div>
                </div>

                {/* Genres */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Genres
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {anime.genres.map((genre, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Status</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {anime.status || 'Unknown'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-300 mb-2">Format</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {anime.format || 'Unknown'}
                    </p>
                  </div>
                  
                  {anime.startDate && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Start Date</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {anime.startDate.year || 'Unknown'}
                      </p>
                    </div>
                  )}
                  
                  {anime.studios?.nodes?.length > 0 && (
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Studio{anime.studios.nodes.length > 1 ? 's' : ''}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {anime.studios.nodes.map((studio, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-full border border-gray-300 dark:border-gray-500"
                          >
                            {studio.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}
