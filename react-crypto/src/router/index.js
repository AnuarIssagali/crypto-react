import {Homepage, News, Cryptocurrencies, CryptoDetails} from '../pages';
import About from '../pages/About';
import Notfound from '../pages/Notfound';

const router = [
    {
        path: '/',
        component: <Homepage/>
    },
    {
        path: 'news',
        component: <News/>
    },
    {
        path: 'about',
        component: <About/>
    },
    {
        path: '*',
        component: <Notfound/>
    },
    {
        path: 'cryptocurrencies',
        component: <Cryptocurrencies/>
    },
    {
        path: 'crypto/:coinId',
        component: <CryptoDetails/>
    }
]
export default router