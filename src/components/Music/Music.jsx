import React from 'react'
// import s from './Music.module.css'

const Music = (props) => {
    return (
        <div>
            <h2>Слушать радио</h2>
            <audio controls>
                <source src="http://pub0101.101.ru:8000/stream/reg/mp3/128/region_energy_84" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
export default Music;