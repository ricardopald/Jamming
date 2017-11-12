const clientId = '88bd5815920a49b9928740b638a9310b';
const redirectURI="http://localhost:3000/";
//let playlistID;

let accessToken;

const Spotify = {

  getAccessToken(){
    if(accessToken){
      return new Promise(resolve => resolve(accessToken));
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
     accessToken = accessTokenMatch[1];
     const expiresIn = Number(expiresInMatch[1]);
     window.setTimeout(() => accessToken = '', expiresIn * 1000);
     window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
     return accessToken;
    } else {
     const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
     window.location = accessUrl;
    }
  },

async search(term) {
    await this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
        headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response =>{
      return response.json();
    }).then(jsonResponse =>{
      if(jsonResponse.tracks){
        return jsonResponse.tracks.items.map(track => ({
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

async  savePlaylist(playlistName, trackURIs){
    await this.getAccessToken();//
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
        console.log(jsonResponse);
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
          headers: {'Authorization': `Bearer ${accessTokenSP}`},
          method: 'POST',
          body: JSON.stringify({'name': playlistName}),
        }).then(response =>{
          console.log(response.json);
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
