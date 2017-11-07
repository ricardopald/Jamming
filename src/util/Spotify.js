const clientId = '88bd5815920a49b9928740b638a9310b';
const redirectURI='http://localhost:3000/';

let accessToken;

const Spotify = {

  getAccessToken(){
    if(accessToken){
      return new Promise(resolve => resolve(accessToken));
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    accessToken = accessTokenMatch;
    const expiresIn = 1000;
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');

    return (fetch(`https://accounts.spotify.com/authorize?client_id={clientId}&response_type=token&scope=playlist-modify-public&redirect_uri={redirectURI}`,{
      method: 'POST',
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    }))
  },

  search(term) {
    return fetch('https://api.spotify.com/v1/search?type=track&q={term}',{
        headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response =>{
      return response.json();
    }).then(jsonResponse =>{
      if(jsonResponse.tracks){
        return jsonResponse.tracks.map(track => ({
         id: track.id,
         name: track.name,
         artist: track.artists[0].name,
         album: track.album.name,
         uri: track.uri,
       }));
      }else{
        return([]);
      }
    });
  },

  savePlaylist(playlistName, trackURIs){
    if((trackURIs && trackURIs.length) && playlistName!==''){
      let accessTokenSP = accessToken;
      const headers = { Authorization : `Bearer ${accessTokenSP}` } ;
      let userID;
      return fetch('https://api.spotify.com/v1/me',{
          headers: headers
      }).then(response =>{
        return response.json();
      }).then(jsonResponse =>{
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com//v1/users/${userID}/playlists/${trackURIs}/tracks`,{
          headers: headers,
          method: 'POST',
          body: JSON.stringify({'name': playlistName}),
        }).then(response =>{
          return  response.json();
        }).then(jsonResponse =>{
          if(jsonResponse.id){
            return jsonResponse.id;
          }
        });
      });
    }else{
      return ([]);
    }
  }
}
export default Spotify;
