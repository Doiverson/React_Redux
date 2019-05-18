import {combineReducers} from "redux";


const songsReducer = () => {
    return [
        { title: 'End Game', duration: '2:05' },
        { title: 'Rap God', duration: '1:30' },
        { title: 'Freaky Friday', duration: '3:30' },
        { title: 'Please Me', duration: '2:30' },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
