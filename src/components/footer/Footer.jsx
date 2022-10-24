import React from 'react';
import './footer.css';

const Menu = () => (
    <>
    <p><a href = '#navbar'>Back to top &#8593;</a></p>
    </>
  )

const Footer = () => {
  
    return (
    <div className='footer-all'>
        <div className='footer-container'>
            <div className='footer-menu'>
                <Menu />
            </div>
            <h3>Built with React<br></br>© 2022</h3>
        </div>
    </div>
    )
}


export default Footer