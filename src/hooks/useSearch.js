import { useEffect, useState } from "react";

export const useSearch = (queryTerm) => {
       const [data, setData] = useState([]);

       var query = `
              query Query($search: String, $isAdult: Boolean)  {
              Page {
              pageInfo {
              hasNextPage
              }

              media(search: $search, isAdult: $isAdult) {
              id
              coverImage {
              extraLarge
              }
              title {
              romaji
              }
              }

              }
              }
       `;

       // Define our query variables and values that will be used in the query request
       var variables = {
              "search": queryTerm,
              "isAdult": false
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

       // Make the HTTP Api request
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


       }, [queryTerm]);
       

       return {data}
}
