/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import classnames from "classnames";

export const TopNav = ({handleToggle,darkmode}) => {
    return ( 
        <div className="main-nav" id="main-nav">
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
            <button type="button" className={classnames("darkmode-toggle", {light: !darkmode, dark: darkmode})} onClick={handleToggle}>
                {darkmode === false && <i aria-hidden="true" className={classnames("fas fa-sun")}></i>}
                {darkmode && <i aria-hidden="true" className={classnames("fas fa-moon ")}></i>}
            </button>

        </div>
     );
}

export const SubNav = () => {
    return ( 
        <div className="SubNav" id="SubNav">
            <ul className="navlist">
                <li>
                    <a className="drp" href="https://hackernoon.com/tagged"> Read </a>
                    <div className="dropdwn-nav">
                        <section>
                            <header>
                                <a href="https://hackernoon.com/tagged/tech"> Tech</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/tagged/ai"> AI</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/automation"> Automation</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/business"> Business</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/data"> Data</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/data-science"> Data Science</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/deep-fakes"> Deep Fakes</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/economics"> Economics</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/entrepreneurship"> Entrepreneurship</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/future"> Future</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/founders"> Founders</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/funding"> Funding</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/iot"> Iot</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/management"> Management</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/marketing"> Marketing</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/rick-and-morty-and-the-meaning-of-life-6640df17e263"> Meaning of Life</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/robotics"> Robotics</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/self-driving-cars"> Self-Driving Cars</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/startups"> Startups</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/venture-capital"> Venture Capital</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/virtual-reality"> Virtual reality</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://hackernoon.com/tagged/tech"> Software</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/tagged/agile"> Agile</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/apis"> APIs</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/software-architecture"> Architecture</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/c"> c</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/coding"> Coding</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/engineering"> Engineering</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/java"> Java</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/javascript"> javascript</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/four-startup-engineering-killers-1fb5c498391d"> Killers</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/mvp"> MVP</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/nodejs"> NodeJS</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/php"> PHP</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/programming"> Programming</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/python"> Python</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/react"> React</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/ruby"> Ruby</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/sql"> SQL</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/swift"> Swift</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/vim"> Vim</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://hackernoon.com/tagged/tech"> Decentralization</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/tagged/altcoins"> Altcoins</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/bitcoin"> Bitcoin</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/search?query=bitcoin%20cash"> Bitcoin Cash</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/bitcoin-spotlight"> Bitcoin Spotlight</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/blockchain"> Blockchain</a>
                                </li>
                                <li>
                                    <a href="https://coil.com/?ref=hackernoon.com" target="_blank"> Coil</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/cryptocurrency"> Cryptocurrency</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/cardano"> Cardano</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/dapps"> DApps</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/decentralizing-everything-never-seems-to-work-2bb0461bd168"> Does It Work?</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/decentralized-web"> DWeb</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/eos"> EOS</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/ethereum"> Ethereum</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/finance"> Finance</a>
                                <li>
                                    <a href="https://hackernoon.com/tagged/libra"> Libra</a>
                                </li>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/why-everyone-missed-the-most-important-invention-in-the-last-500-years-c90b0151c169"> Mind Blown</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/ripple"> Ripple</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/space"> Space</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/tether"> Tether</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/how-to-decentralize-twitter-956a37da"> Twitter</a>
                                </li>
                            </ul>
                        </section>

                    </div>
                </li>
                <li>
                    <a href="https://hackernoon.com/tagged/hackernoon-top-story">Top Stories</a>
                </li>
                <li>
                    <a href="https://publish.hackernoon.com" target="_blank">Write</a>
                </li>
                <li>
                    <a href="https://hackernoon.com/tagged/hackernoon-podcast">Listen</a>
                </li>
                <li>
                    <a className="drp" href="http://bit.ly/3rG0tZy" target="_blank"> Learn </a>
                    <div className="dropdwn-nav">
                        <section>
                            <header>
                                <a href="https://bit.ly/3aOybUa" target="_blank">Web Development</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="http://bit.ly/3rFSgEM" target="_blank">Become a Cloud Developer 🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/2Z2V9mB" target="_blank">Become A Fullstack Developer 🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/2Z5P4FY" target="_blank">Become Android Developer🔗</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/how-to-learn-design-patterns-and-pretty-much-anything-else-9c5af6ceaba4">Design Patterns</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/the-feynman-learning-technique-how-to-learn-anything-well-v9x3w7f">Feynman Technique</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/learn-to-code-in-30-days-my-personal-journey-yv3y3ua0">In 30 Days</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/things-i-learned-from-6-months-of-coding-8w1772dbx">In 6 Months</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/learning-to-code">Learning to Code</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/learning-how-to-learn-is-more-important-than-learning-to-code-gy9c3u5c">Learning to Learn</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/8-free-online-games-to-help-you-learn-coding-vf1k3wld">Learning via Games</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3qclfj2" target="_blank">Cybersecurity 🔗</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://bit.ly/3p6Xtna" target="_blank">Become A Data Scientist</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/what-on-earth-is-data-science-eb1237d8cb37"> What is it?</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/the-best-50-sites-to-learn-about-data-science-imzr326v"> Best 50 Sites to Learn it</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/learn-data-engineering-my-favorite-free-resources-52a29ab999b"> Data Engineering</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3q8PU0K" target="_blank">Become Entry-Level Data Analyst 🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/2Z6fTK4" target="_blank">AI Vs. ML 🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3qJuBmL" target="_blank">TensorFlow and Deep Learning 🔗</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/deep-learning-vs-machine-learning-a-simple-explanation-47405b3eef08"> Deep Learning vs. Machine Learning</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/how-i-met-and-fell-in-love-with-data-science-2251532c8955"> Love</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/ml-essentials-top-10-lists-every-data-scientist-should-know-10f3try"> ML Essentials</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/32Ob2zt" target="_blank">PG Program in Artificial Intelligence and Machine Learning 🔗</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/how-to-build-the-perfect-cv-to-land-a-data-science-role-2ga3ttg">Optimize Your CV</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://bit.ly/2IEtq3D" target="_blank">Languages</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/search?query=learn+blockchain">Blockchain</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/search?query=learn%20C#">C C# C++</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/search?query=learn%20go">Go</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3q9Egm6" target="_blank">HTML &amp; CSS🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/2Z5Q1y2" target="_blank">Javascript🔗</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/search?query=learn%20php">PHP</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3p2Wkx7" target="_blank">Python 🔗</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/search?query=learn%20ruby-on-rails">Ruby on Rails</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/2Z01G1w" target="_blank">SQL 🔗</a>
                                </li>
                                <li>
                                    <a href="https://bit.ly/3rG0tZy" target="_blank">In Partnership With Udacity</a>
                                </li>
                            </ul>
                        </section>

                    </div>
                </li>
                <li>
                    <a href="https://sponsor.hackernoon.com/" target="_blank">Advertise</a>
                    <div className="dropdwn-nav">
                        <section>
                            <header>
                                <a href="https://hackernoon.com/tagged/tech"> Tech</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://sponsor.hackernoon.com/brand-as-author" target="_blank">Corporate Blog Posts</a>
                                </li>
                                <li>
                                    <a href="https://sponsor.hackernoon.com/brand-as-author" target="_blank">Tech News Release</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://sponsor.hackernoon.com" target="_blank">Place an Ad</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://sponsor.hackernoon.com/ad-by-tag" target="_blank">Targeted Niche Marketing</a>
                                </li>
                                <li>
                                    <a href="https://sponsor.hackernoon.com/billboard" target="_blank">Sitewide Takeover</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </li>
                <li>
                    <a className="drp" href="https://about.hackernoon.com/" target="_blank">About</a>
                    <div className="dropdwn-nav">
                        <section>
                            <header>
                                <a href="https://about.hackernoon.com/" target="_blank">About</a>
                                <div className="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://readwrite.com/2020/06/10/hacker-noon-adds-quantitative-social-proof-and-web-monetization-standards/" target="_blank">A Story</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/Careers" target="_blank">Careers</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/@David">CEO</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/@linh">COO</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/@Dane">CPO</a>
                                </li>
                                <li>
                                    <a href="https://www.startengine.com/hackernoon" target="_blank">Equity Crowdfunding</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com//hacker-noon-faqs-with-six-word-answers-aw1ls3z1q">In Six Words or Less</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/hackernoon" target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/hackernoon/" target="_blank">On the Gram</a>
                                </li>
                                <li>
                                    <a href="https://podcast.hackernoon.com/" target="_blank">Our Podcast</a>
                                </li>
                                <li>
                                    <a href="https://giphy.com/hackernoon" target="_blank">Tech GIFs</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://auth.hackernoon.com" target="_blank">Write</a>
                                <div class="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://app.hackernoon.com/profile/rewards" target="_blank">Add Coil Meta Tag</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com//three-things-about-headlines-3wc23ztl">Better Headlines</a>
                                </li>
                                <li>
                                    <a href="https://help.hackernoon.com/app/page/1HNTGwm_UAfdEv9nEKmZHjQHRJtYgLnMIEZ6Vw_ZRZvQ" target="_blank">Create Your Own Call To Action</a>
                                </li>
                                <li>
                                    <a href="https://help.hackernoon.com/" target="_blank">Help Section</a>
                                </li>
                                <li>
                                    <a href="https://publish.hackernoon.com/" target="_blank">Get Published</a>
                                </li>
                                <li>
                                    <a href="https://help.hackernoon.com/app/page/1-wg7bxonxAFWdTYl5G4gJwvWLo0iWfBi-XKbdjcYva0" target="_blank">Submit a Story Checklist</a>
                                </li>
                                <li>
                                    <a href="https://help.hackernoon.com/app/page/1fWmAG6zSc-EuxBhHYt-tUIR0wfefRxkmpVRD46byKTw" target="_blank">Troubleshooting Account Creation</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com//how-to-get-published-on-hacker-noon-a-step-by-step-guide-zcp36rz">Writing Guide</a>
                                </li>
                                <li>
                                    <a href="https://auth.hackernoon.com" target="_blank">Write Now</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://noonies.tech" target="_blank">Noonies 2020</a>
                                <div class="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://noonies.tech/#internet" target="_blank">Back to the Internet</a>
                                </li>
                                <li>
                                    <a href="https://noonies.tech/#blockchain" target="_blank">Decentralization</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/wtf-are-the-noonies-kjh3yv9">FAQ</a>
                                </li>
                                <li>
                                    <a href="https://noonies.tech/#heroes" target="_blank">Future Heroes</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/noonies">Interviews</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/podcast-the-2020-noonies-are-here-and-even-greener-than-last-year-vle3y4c">Podcast</a>
                                </li>
                                <li>
                                    <a href="https://noonies.tech/#development" target="_blank">Software</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/tagged/noonies">Stories</a>
                                </li>
                                <li>
                                    <a href="https://noonies.tech/#tech" target="_blank">Technology</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=A9cdOVuOfp8" target="_blank">Video</a>
                                </li>
                                <li>
                                    <a href="https://noonies.hackernoon.com/" target="_blank">2019 Inaugerial Winners</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </li>
                <li>
                    <a className="drp" href="https://hackernoon.com/about-tech-company-news-pages-by-hacker-noon-uwu34bh">Tech Companies</a>
                    <div class="dropdwn-nav">
                        <section>
                            <header>
                                <a href="https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2">A to F</a>
                                <div class="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/company/adobe">Adobe</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/amazon">Amazon</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/apache">Apache</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/apple">Apple</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/atlassian">Atlassian</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/att">ATT</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/bankofamerica">BoA</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/coinbase">Coinbase</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/comcast">Comcast</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/ebay">Ebay</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/facebook">Facebook</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2">G to N</a>
                                <div class="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/company/google">Google</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/hp">HP</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/ibm">IBM</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/intel">Intel</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/intuit">Intuit</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/mcdonald">McDonalds</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/microsoft">Microsoft</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/netflix">Netflix</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/nvidia?ref=hackernoon.com">Nvidia</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header>
                                <a href="https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2">O to Z</a>
                                <div class="line"></div>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://hackernoon.com/company/3m">3m</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/oracle">Oracle</a>
                                </li>
                                <li class="">
                                    <a href="https://hackernoon.com/company/pfizer">Pfizer</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/samsung">Samsung</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/tesla">Tesla</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/texasinstruments">Texas Instruments</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/tencent">Tencent</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/twitter">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/company/uber">Uber</a>
                                </li>
                                <li>
                                    <a href="https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2">See All 913 Tech Companies</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </li>
                <li>
                    <a href="https://careers.hackernoon.com" target="_blank">Careers</a>
                </li>
                <li>
                    <a href="https://slogging.com" target="_blank">Slogging</a>
                </li>
                
            </ul>
        </div>
    );
}
 