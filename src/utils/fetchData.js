export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56c698f9c9msh774bfd64b3caeccp11fceejsnd5c717f0e543',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56c698f9c9msh774bfd64b3caeccp11fceejsnd5c717f0e543',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url , options)=> {
    const response = await fetch(url , options);
    const data = await response.json();
  return data;
}