import React from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Slider,Grid } from '@mui/material';


function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer_left">
                <img className='song_image' src="https://www.flexymusic.ng/wp-content/uploads/Mohbad-Light-Imole-EP.jpg" alt="" />
                <div className="song_info">
                    <h4>Holy!</h4>
                    <p>Mohbad</p>
                </div>
            </div>
            <div className="footer_center">
                < ShuffleIcon className='green_icon'/>
                <SkipPreviousIcon className='font_icon'/>
                < PlayCircleOutlineIcon fontSize='large' className='font_icon'/>
                <SkipNextIcon className='font_icon' />
                <RepeatIcon className='green_icon'/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2} alignItems="center">
                     <Grid item>
                       <PlaylistPlayIcon className='green_icon'/>
                    </Grid>
                    <Grid item>
                      <VolumeDownIcon className='font_icon' />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            // value={typeof value === 'number' ? value : 0}
                            // onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    {/* <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid> */}
                </Grid>
            </div>
        </div>
    );
}

export default Footer;