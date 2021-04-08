import Clear from '../assets/Clear.png';
import Hail from '../assets/Hail.png';
import HeavyCloud from '../assets/HeavyCloud.png';
import HeavyRain from '../assets/HeavyRain.png';
import LightCloud from '../assets/LightCloud.png';
import LightRain from '../assets/LightRain.png';
import Shower from '../assets/Shower.png';
import Sleet from '../assets/Sleet.png';
import Snow from '../assets/Snow.png';
import Thunderstorm from '../assets/Thunderstorm.png';


const getImg = weatherStateAbbr => {
    let src = "";

    switch(weatherStateAbbr) {
        case 'c':
            src = Clear;
            break;
        case 'h':
            src = Hail;
            break;
        case 'hc':
            src = HeavyCloud;
            break;
        case 'hr':
            src = HeavyRain;
            break;
        case 'lc':
            src = LightCloud;
            break;
        case 'lr':
            src = LightRain;
            break;
        case 's':
            src = Shower;
            break;
        case 'sl':
            src = Sleet;
            break;
        case 'sn':
            src = Snow;
            break;
        case 't':
            src = Thunderstorm;
            break;
        default:
            src = LightCloud;
            break;
    }

    return src;
}

export default getImg;