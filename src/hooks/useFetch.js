import { useEffect, useState } from "react";

export const useFetch = (status) => {

       const [data, setData] = useState([]);
       var query = `
      query Query($status: MediaStatus, $isAdult: Boolean) {
       
        Page {
          pageInfo {
            hasNextPage
          }
        media(status: $status, isAdult: $isAdult) {
       id
          coverImage {
            extraLarge
          }
          title {
            romaji
          }
          popularity
          averageScore
       episodes
       format
       season
       seasonYear
       status
       genres
          trending
        }
        }
      }
    `;

       var variables = {
              "status": status
       };

       // Define the config we'll need for our Api request
       var url = 'https://graphql.anilist.co',
              options = {
                     method: 'POST',
                     headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                     },
                     body: JSON.stringify({
                            query: query,
                            variables: variables
                     })
              };


       useEffect(() => {



              fetch(url, options).then(handleResponse)
                     .then(handleData)
                     .catch(handleError);

              function handleResponse(response) {
                     return response.json().then(function (json) {
                            return response.ok ? json : Promise.reject(json);
                     });
              }

              function handleData(data) {
                     console.log(data);
                     setData(data.data.Page.media);

              }

              function handleError(error) {
                     alert('Error, check console');
                     console.error(error);
              }

       }, [status])

       return { data }
}
