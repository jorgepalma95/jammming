import React, { useCallback } from "react";
import "./Playlist.css";

import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;
