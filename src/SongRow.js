import React from 'react';
import { useDataLayerValue } from './Datalayer';
import "./SongRow.css";

function SongRow({ track, spotify }) {
    // const [{ token }, dispatch] = useDataLayerValue();
    // spotify.setAccessToken(token);
    // function handleClick(track) {
    //     spotify.play()
    // }
    return (
        <div className='songRow'>
            <img className='songRow_album' src={track.album.images[0].url} alt="" />
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} {track.album.name} 
                     
                </p>
            </div>
        </div>
    );
}

export default SongRow;