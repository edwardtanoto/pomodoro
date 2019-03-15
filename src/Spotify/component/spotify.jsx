import React from 'react';

class Spotify extends React.Component{
    render(){
        return(
        <div className="spotify">
        <h3>Music Station</h3>
        <br/>
        <iframe src="https://open.spotify.com/embed/playlist/43BQ07kwFFBUZZq4Oa6zTx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" align="center"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/5qjW5grMERAQtqfgUM7lrA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" align="center"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/4K6yN10HAcY356mVShPF01" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" align="center"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/5dltMAqPhexTZRgydhqyiT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" align="center"></iframe>
        </div>)
    }
}

export default Spotify;