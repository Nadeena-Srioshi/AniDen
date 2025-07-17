import { useEffect, useState } from "react";

export const useDetail = (id) => {
  const [data, setData] = useState({});
  

  const query = `
      query ($mediaId: Int) {
        Media(id: $mediaId) {
          coverImage {
            extraLarge
          }
          title {
            romaji
          }
          description
          genres
          episodes
          popularity
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
        console.log("✅ API response:", json);
        setData(json.data.Media);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
      });

  }, [id]);

  return { data };
};
