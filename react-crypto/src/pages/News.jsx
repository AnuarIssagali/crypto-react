import newsone from '../images/newsone.png'
import newssecond from '../images/newssecond.png'
import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';

import {useGetCryptosQuery} from '../services/cryptoAPI';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsAPI';


const {Title} = Typography;


function News({simplified}) {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

    return (
        <div className='news-main'>
            <Title level={2} className="heading">Latest news</Title>
            <div className='news-list'>
                <div className='news-parent'>
                    <h2>Here’s what happened in crypto today</h2>
                    <img src={newsone} alt='News One' style={{ maxWidth: '100%', borderRadius:'10px'}} />
                    <h6>
                        A U.S. federal court has approved the settlement between Binance and the Commodities Future and Trading Commission (CFTC), which will see Binance pay $2.7 billion in penalties. Meanwhile, Lido DAO is the center of a class-action lawsuit claiming the it duped the public into investing in an unregistered securities offering,and spot Bitcoin BTC tickers down $42,962 exchange-traded funds (ETFs) could trigger unwanted consequences for crypto exchanges like Coinbase.
                    </h6>
                </div>
                <div className='news-parent'>
                    <h2>BTC price bounces 5$ as investor says Bitcoin ETF ‘99.9% done deal’</h2>
                    <img src={newssecond} alt='News One' style={{ maxWidth: '100%', borderRadius:'10px' }} />
                    <h6>
                        Data from Cointelegraph Markets Pro and TradingView showed a BTC price recovery, taking the market to local highs of $43,456 after the daily close. After starting the week on an uncertain footing, BTC/USD swiftly gathered strength, with the Dec. 18 candle closing over 5% above the day’s low. Later, news came that asset manager BlackRock — which is among the applicants to launch the first U.S. spot Bitcoin ETF — had changed the policy around redemptions for its product to include BTC as an option.
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default News;