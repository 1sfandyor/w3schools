import { faDiscord, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {v4 as uuidv4} from 'uuid';

export const topItems = [
    {
        id: uuidv4(),
        icon: faYoutube,
        url: 'https://www.youtube.com/@w3schools'
    },
    {
        id: uuidv4(),
        icon: faLinkedin,
        url: 'https://www.linkedin.com/company/w3schools.com/'
    },
    {
        id: uuidv4(),
        icon: faDiscord,
        url: 'https://discord.gg/6Z7UaRbUQM'
    },
    {
        id: uuidv4(),
        icon: faFacebook,
        url: 'https://www.facebook.com/w3schoolscom/'
    },
    {
        id: uuidv4(),
        icon: faInstagram,
        url: 'https://www.instagram.com/w3schools.com_official/'
    },
]
