import React from 'react';

export const TopNav = (handleToggle,darkmode) => {
    return ( 
        <div className="main-nav">
            <a className="logo" tabindex="2" href="/">
                <img src="https://hackernoon.com/hn-logo.png" alt="Hackernoon logo" class="desktop" width="248" height="40" loading="lazy"/>
                <img src="https://hackernoon.com/hn-icon.png" alt="Hackernoon logo" class="mobile" width="37" height="40" loading="lazy"/>
            </a>
            <form className="search-container active">
                <input name="searchvalue" placeholder="Search..." tabindex="1"/>
                <img src="https://hackernoon.com/search-new.png" alt="Search icon" width="19" height="19" loading="lazy"/>
            </form>
            <div className="header-buttons">
                <a href="https://app.hackernoon.com/new" className="button1">Start Writing</a>
                <a className="button1 button2">Log in</a>
            </div>
            <button type="button" class="darkmode-toggle" onClick={handleToggle}>
                {!darkmode && <i aria-hidden="true" class="fas fa-sun active"></i>}
                {darkmode && <i aria-hidden="true" class="fas fa-moon "></i>}
            </button>

        </div>
     );
}

export const SubNav = () => {
    return ( 
        <div className="SubNav">

        </div>
    );
}
 