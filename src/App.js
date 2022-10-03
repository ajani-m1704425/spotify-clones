import { useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenKey } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './Datalayer';
import Player from './Player';

const spotify = new SpotifyWebApi();


function App() {
  const [ {user,token,playlist,obanla}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenKey();
    const Token = hash.access_token;

    if (Token) {
      dispatch({
        type: "SET_TOKEN",
        token: Token
      })
      
      spotify.setAccessToken(Token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });

      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlist: playlist,
        })
      });
      spotify.getPlaylist(playlist?.items[0].id).then((response) => {
        dispatch({
          type: "SET_OBANLA",
          obanla: response
        });
        
      });
     
    };

  }, [dispatch, token]);
  
  console.log("User :  ", user);
  console.log("PLaylistout :  ", playlist);
  console.log("Obanla  :", obanla);


  return (
    <div className="App">
      {
        token ?
          <Player spotify={spotify}/> :
          <Login />
      }
      
    </div>
  );
}

export default App;
