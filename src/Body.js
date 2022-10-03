import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './Datalayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {
    const [{ obanla }, dispatch] = useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />
            
            <div className="body_info">
                <img src={obanla?.images[0]?.url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Obanla</h2>
                    <p>{obanla?.description}</p>
                </div>
            </div>

            <div className="body_song">
                <div className="body_icons">
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                
                {obanla?.tracks.items.map(item => 
                    <SongRow spotify={spotify} track={item.track}/>
                )}
            </div>
        </div>
    );
}

export default Body;