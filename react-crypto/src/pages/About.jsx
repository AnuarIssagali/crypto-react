import newsone from '../images/newsone.png'
import newssecond from '../images/newssecond.png'
import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import {useGetCryptosQuery} from '../services/cryptoAPI';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsAPI';


const {Title} = Typography;

function About() {

    return (
        <div className='about-main'>
            <div className='header-about'>
                <h1>Crypto Universe</h1>
            </div>
            <div className='history-parent'>
                <h2>Our history</h2>
                <h3>
                    In the charming town of Serenity Springs, artist Lily Harper discovered an enchanted book in a dusty shop. This magical tome allowed her paintings to come to life. Excited by the newfound power, Lily painted scenes of wonder, turning her town into a haven for those seeking enchantment. Through her art, she brought joy and inspiration, proving that sometimes, magic is found in unexpected strokes of a paintbrush.
                </h3>
            </div>
            <div className='history-parent'>
                <h2>Crypto Events and Meetups</h2>
                <h3>
                Stay tuned for virtual and local meetups, webinars, and events. Engage in discussions with guest speakers, industry experts, and fellow group members. Networking opportunities abound! Ready to embark on a journey through the crypto universe? Join our Crypto Enthusiasts Group and be part of a vibrant community where passion for cryptocurrencies knows no bounds.
                </h3>
            </div>
            <div className='history-parent'>
                <h2>Stay Informed with Crypto News</h2>
                <h3>
                Get the latest news updates on cryptocurrency regulations, market analyses, and groundbreaking projects. Our community is your go-to source for staying informed about the ever-evolving crypto landscape. 🚀 Explore ICOs and New Projects: Be at the forefront of innovation by exploring new Initial Coin Offerings (ICOs) and emerging blockchain projects. Share your thoughts, insights, and predictions with fellow enthusiasts.
                </h3>
            </div>
        </div>
    );
}

export default About;