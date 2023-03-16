let rootUrl = 'https://gist.githubusercontent.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677/raw/e6b13ac3f7f9ad174209cbb30f331427ab6f7fb5/games.json';

export const API = {
  gamesFetch: async () => {
    try {
      let response = await fetch(rootUrl);
      let responseJson = await response.json();
      return responseJson;
     } catch(error) {
      console.error(error);
    }   
  },
}