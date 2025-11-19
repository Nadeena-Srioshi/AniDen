import { useEffect, useState } from "react";
import backupPic from "../assets/images/backup.png"

export const AnimeQuote = () => {

  const [quote, setQuote] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState({});

  useEffect(() => {

    async function fetchQuote(){
      const response = await fetch("https://aot-api.vercel.app/quote");
      const result = await response.json();
      
      console.log(result);

      setQuote(result.quote);
      setAuthorName(result.author);
    }
    fetchQuote();
  }, [])
  
  useEffect(() => {
    if (!authorName) return;

    var query = `
      query ($search: String) {
        Character(search: $search) {
          image {
            large
          }
          name {
            full
          }
        }
      }
    `;

    var name = authorName;
    if(authorName === "Levi Ackerman"){
      name = "Levi";
    }
    else if(authorName === "Miche Zacharius"){
      name = "Miche";
    }
    //name = name.split(" ")[0];
    console.log(name);

    // Define our query variables and values that will be used in the query request
    var variables = {
        search : name
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
      setAuthorImage(data.data.Character.image.large);
      console.log(data.data.Character.image.large);
    }

    function handleError(error) {
      alert('Error, check console');
      console.error(error);
    }

  }, [authorName])

  return (
    <div className="flex  flex-col max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow-sm sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full  rounded-t-lg h-96 sm:h-full sm:w-48 sm:rounded-none sm:rounded-s-lg" src={authorImage || backupPic} alt="anime character" />
        <div className="flex flex-col justify-around h-full p-4 leading-normal">
            <h2 className="text-2xl font-bold mb-3 dark:text-white ">Anime Quote From AOT</h2>
            <div>
              <h3 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{`Author: ${authorName}`}</h3>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{quote}</p>
            </div>
            </div>

    </div>
  )
}
