/* TODO CZ/EN switch */

import React from 'react';
import './language.css';
import i18next from 'i18next';

/* eslint-disable jsx-a11y/accessible-emoji */

const Language = () => {
    return (
        <div className='container'>
            <span className='language-cz' onClick={() => i18next.changeLanguage('cz')}>🇨🇿</span>
            <span className='language-en' onClick={() => i18next.changeLanguage('en')}>🇬🇧</span>
        </div>
    )
}

export default Language