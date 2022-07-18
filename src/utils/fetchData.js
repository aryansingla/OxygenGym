export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a4df0c7f7bmshf83c26d92bcf5dcp17aa43jsn1cf60fa9575b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a4df0c7f7bmshf83c26d92bcf5dcp17aa43jsn1cf60fa9575b',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url , options)=> {
    const response = await fetch(url , options);
    const data = await response.json();
  return data;
}
