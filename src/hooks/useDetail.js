import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
export const useDetail = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = `
      query ($mediaId: Int) {
        Media(id: $mediaId) {
          coverImage {
            extraLarge
          }
          title {
            romaji
          }
          format
          episodes
          genres
          popularity
          status
          description
          averageScore
          studios {
            nodes {
              name
            }
          }
          startDate {
            year
          }
        }
      }
    `;

    const variables = { mediaId: Number(id) };

console.log("inside useDetail");
console.log("useDetail id : " + id);

  useEffect(() => {
    if (!id || isNaN(id)) {
      console.warn("Invalid ID — skipping fetch", id);
      return;
    }
    setLoading(true);
    console.log("🟢 useEffect running with ID:", id);

    
    fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json.data.Media);
        //useTitle(json.data.Media.title.romaji);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);
  
  return { data, loading, error };
};
