import React from 'react';
import './footer.css';

import { useTranslation } from 'react-i18next';



const Footer = () => {

    const { t } = useTranslation();
  
    return (
    <div className='footer-all'>
        <div className='footer-container'>
            <div className='footer-menu'>
            <>
            <p><a href = '#navbar'>{ t('footer') } &#8593;</a></p>
            </>
            </div>
            <h3>{ t('footer2') }<br></br>© 2022-2023</h3>
        </div>
    </div>
    )
}


export default Footer