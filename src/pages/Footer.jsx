import React from 'react';
import Icon from '../icon/Icon';

const Footer = () => {

    const socialMedia = [{
            "name": "github",
            "url": "https://github.com/Sarobidy-23",
        },
        {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/fanomezana-sarobidy-rakotomahefa-aab35322a/"
        }
    ]
    return (
        <div className='footer-container'>
            <div className='footer-info__container'>
                <div className='footer-contact'>
                    <div className='contact-element__container'>
                        {socialMedia.map((element, index) => (
                            <a className='contact-element' 
                                key={index} 
                                href={element.url} 
                                target='blank' 
                                aria-label={element.name}>
                                 <Icon name={element.name} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='footer-mailto'>
                    <a className='mailto-element' href={`mailto:hei.sarobidy@gmail.com`}>hei.sarobidy@gmail.com</a>
                </div>
            </div>
            <a className='footer-copyright' href="https://github.com/Sarobidy-23/personal-site">
                Designed & Built by Fanomezana Sarobidy
            </a>
        </div>
    )
}

export default Footer