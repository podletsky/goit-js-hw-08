
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe)

const currentTime=(data)=>{
    localStorage.setItem(
        'videoplayer-current-time', 
        JSON.stringify(data.seconds));  
    let time = localStorage.getItem('videoplayer-current-time');
};

player.on('timeupdate',throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
// .then(function(seconds){})
// .catch(function(error){
//     switch(error.name){
//         case 'RangeError' : break;
//         default: break;
//     }
// });





























