import React from 'react';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='contact_container'>
                    <h2>Get in touch</h2>
                    <span>
                    Many unexpected opportunities happen every day between unknown people, why not you and me?
                    Whether you have a question, want to work with me, or just want to say hi, I’ll try my best to get back to you! 
                    </span>
                    <a className='contact-mail_botton' href='mailto:hei.sarobidy@gmail.com'>
                        gmail
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
