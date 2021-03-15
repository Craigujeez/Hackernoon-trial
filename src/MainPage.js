/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {TopNav,SubNav} from "./components/navs";
import Footer from "./components/footer";
import {SET_DARK_MODE,SET_LIGHT_MODE} from "./redux/reducer";

const MainPAge = () => {
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.data);
    const {darkmode,data} = storeData;
    const {markup} = data
    const handleToggle = () => {
        if(!darkmode){
            dispatch({type: SET_DARK_MODE})
            document.body.classList.add("dark-mode")
        } else {
          dispatch({type: SET_LIGHT_MODE})
          document.body.classList.remove("dark-mode")
        }
    }
    function createMarkup() {
        return {__html: markup};
      }
    return ( 
        <div className="App">
            <div className="w-full flex min-h-screen flex-col page-layout">
                <header className="sticky top-0 z-5 transition duration-200 ease-in-out bg-green-light flex h-60 transform translate-y-0 header-layout">
                    <TopNav handleToggle={handleToggle} darkmode={darkmode}/>
                    <SubNav/>
                    <div className="banner">
                        <a href="https://bit.ly/2PPkdME" target="_blank" rel="sponsored">
                            <img src="https://hackernoon.com/images/img-8i133ho.png" alt="Particle ad"/>
                            Join 3500 Developers at Spectra March 17th
                        </a>
                    </div>
                    <div className="story-nav show">
                        <div className="title">
                            <a className="icon" href="/">
                            <img src="https://hackernoon.com/hn-icon.png" alt="Hackernoon logo"/>
                            </a>
                            Step by Step Guide to Create 3 Different Types of Loading Screens in React by <a className="profile" href="https://hackernoon.com/u/codebucks">@codebucks</a> 
                        </div> 
                        <div className="sharing">
                            <div id="sharethis" className=" st-center  st-inline-share-buttons st-animated">
                                <div className="st-btn st-first" data-network="twitter" style={{display: "inline-block"}}>
                                    <img alt="twitter sharing button" src="https://platform-cdn.sharethis.com/img/twitter.svg"/>
                                </div>
                                <div className="st-btn" data-network="facebook" style={{display: "inline-block"}}>
                                    <img alt="facebook sharing button" src="https://platform-cdn.sharethis.com/img/facebook.svg"/>
                                </div>
                                <div className="st-btn" data-network="linkedin" style={{display: "inline-block"}}>
                                    <img alt="linkedin sharing button" src="https://platform-cdn.sharethis.com/img/linkedin.svg"/>
                                </div>
                                <div className="st-btn st-last" data-network="email" style={{display: "inline-block"}}>
                                    <img alt="email sharing button" src="https://platform-cdn.sharethis.com/img/email.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="page-content">
                    <div className="page-container">
                        <h1>Step by Step Guide to Create 3 Different Types of Loading Screens in React</h1>
                        <div className="StoryMeta__Layout-sc-1z0kit8-0 bUOwyd">
                            <div>
                                <a className="date" href="https://hackernoon.com/archives/2021/02/21"> February 21st 2021{" "} </a>
                                <span className="stat">
                                    <i aria-hidden="true" className="fas fa-star"> </i> {" "}493{" "} reads
                                </span>
                                <button data-tip="Save stories for a rainy day and find them later at <a href='https://app.hackernoon.com/bookmarks'/>https://app.hackernoon.com/bookmarks</a>" data-for="lFthoYgwXZzfpNWyr5FI" data-html="true" data-delay-hide="1000" className="Bookmark__Layout-sc-9eyvkj-0 jBeNHn bookmark  " currentitem="false">
                                    <i aria-hidden="true" className="fas fa-bookmark "></i>
                                    <div className="__react_component_tooltip t56443404-594a-4f0b-b9c9-211461dde3b8 place-top type-dark" id="lFthoYgwXZzfpNWyr5FI" data-id="tooltip" style={{left:"107px",top:"240px"}}>
                                        Save stories for a rainy day and find them later at <a href="https://app.hackernoon.com/bookmarks">https://app.hackernoon.com/bookmarks</a>
                                    </div>
                                </button>
                            </div>
                            <div className="StoryReactions__Layout-sc-148l719-0 iGFhHb">
                                <div className="reactions">
                                    <label>10</label>
                                    <div className="emojis">
                                        <div className="emoji-container">
                                            <span></span>
                                            <img data-usertype="user" data-emoji="heart" className="emoji not-active" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/heart.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span></span>
                                            <img data-usertype="user" data-emoji="light" className="emoji not-active" src="https://hackernoon.com/emojis/light.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/light.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/light.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/light.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span></span>
                                            <img data-usertype="user" data-emoji="boat" className="emoji not-active" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/boat.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span></span>
                                            <img data-usertype="user" data-emoji="money" className="emoji not-active" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/money.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"none"}}>
                                <div className="SocialLinks-sc-1bbo2b4-0 ejwIzg">
                                    <button aria-label="twitter" className="react-share__ShareButton yhnjdhgfhdj">
                                        <img src="/social-icons/twitter-new.png" alt="Twitter share icon"/>
                                    </button>
                                    <button aria-label="facebook" className="react-share__ShareButton yhnjdhgfhdj">
                                        <img src="/social-icons/facebook-new.png" alt="Facebook share icon"/>
                                    </button>
                                    <button aria-label="linkedin" className="react-share__ShareButton yhnjdhgfhdj">
                                        <img src="/social-icons/linkedin-new.png" alt="LinkedIn share icon"/>
                                    </button>
                                    <button aria-label="email" className="react-share__ShareButton yhnjdhgfhdj">
                                        <img className="email-icon" src="/social-icons/email-new.png" alt="Email share icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="image-container feat">
                                <div className="FullScreenToggleImage__Layout-yxmb5o-0 fsbpZf">
                                    <div className="fullscreen">
                                        <img alt="" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg" style={{marginLeft: "10%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="Profile__Layout-sc-1j6ysg0-0 hPgNlb profile">
                                <a href="https://hackernoon.com/u/codebucks">
                                    <img src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg" alt="Author profile" width="50" height="50" loading="lazy"/>
                                </a>
                                <div style={{textAlign:"left"}}>
                                    <h3>
                                        <a href="https://hackernoon.com/u/codebucks" className="Link-k8dxie-0 gLHiBQ">@codebucks</a>
                                        <small>CodeBucks</small>
                                    </h3>
                                    <p>Helping you to learn code! here you'll find tutorials around web development. Keep Coding...😜</p>
                                    <div className="SocialLinks-sc-1bbo2b4-0 Follow__Layout-sc-12l5d2g-0 dcgsMq">
                                        <a href="https://twitter.com/code_bucks" target="_blank" rel="dofollow">
                                            <img src="https://hackernoon.com/social-icons/twitter-new.png" alt="Twitter social icon" width="20" height="20" loading="lazy"/>
                                        </a>
                                        <a href="https://github.com/codebucks27" target="_blank" rel="dofollow">
                                            <img src="https://hackernoon.com/social-icons/github-new.png" alt="github social icon" width="20" height="20" loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                        <div class="bottom-reactions">
                            <div class="StoryReactions__Layout-sc-148l719-0 iGFhHb">
                                <div class="reactions">
                                    <label>21</label>
                                    <div className="emojis">
                                        <div className="emoji-container">
                                            <span>2</span>
                                            <img data-usertype="user" data-emoji="heart" className="emoji not-active" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/heart.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/heart.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span>1</span>
                                            <img data-usertype="user" data-emoji="light" className="emoji not-active" src="https://hackernoon.com/emojis/light.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/light.png"/>
                                            <img class="emoji-animation icon-2" src="https://hackernoon.com/emojis/light.png"/>
                                            <img class="emoji-animation icon-3" src="https://hackernoon.com/emojis/light.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span></span>
                                            <img data-usertype="user" data-emoji="boat" className="emoji not-active" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/boat.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/boat.png"/>
                                        </div>
                                        <div className="emoji-container">
                                            <span>2</span>
                                            <img data-usertype="user" data-emoji="money" className="emoji not-active" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-1" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-2" src="https://hackernoon.com/emojis/money.png"/>
                                            <img className="emoji-animation icon-3" src="https://hackernoon.com/emojis/money.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer style={{alignSelf: "right", alignItems: "right"}}>
                            <div className="share" style={{width:"350px"}}>
                                Share this story
                                <div className="SocialLinks-sc-1bbo2b4-0 ejwIzg" style={{width:"150px"}}>
                                    <button aria-label="twitter" className="react-share__ShareButton" style={{backgroundColor: 'transparent', border: 'none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer'}}>
                                        <img src="https://hackernoon.com/social-icons/twitter-new.png" alt="Twitter share icon"/>
                                    </button>
                                    <button aria-label="facebook" className="react-share__ShareButton" style={{backgroundColor: 'transparent', border: 'none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer'}}>
                                        <img src="https://hackernoon.com/social-icons/facebook-new.png" alt="Facebook share icon"/>
                                    </button>
                                    <button aria-label="linkedin" className="react-share__ShareButton" style={{backgroundColor: 'transparent', border: 'none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer'}}>
                                        <img src="https://hackernoon.com/social-icons/linkedin-new.png" alt="LinkedIn share icon"/>
                                    </button>
                                    <button aria-label="email" className="react-share__ShareButton" style={{backgroundColor: 'transparent', border: 'none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer'}}>
                                        <img className="email-icon" src="https://hackernoon.com/social-icons/email-new.png" alt="Email share icon"/>
                                    </button>
                                </div>
                            </div>
                        </footer>
                        <section className="related-stories">
                            <h4>Related</h4>
                            <div className="llSDJs">
                                <article className="ivlmVk">
                                    <h2>
                                        <a href="https://bit.ly/3b8DfWr" target="_blank" rel="sponsored">Fill HackerEarth Developer Survey 2021 &amp; win Amazon gift vouchers</a>
                                    </h2>
                                    <div className="image-wrapper">
                                        <a href="https://bit.ly/3b8DfWr" target="_blank" rel="sponsored">
                                            <img src="https://hackernoon.com/images/img-8v033bs.jpeg" alt="Adf image" className="img--contain"/>
                                        </a>
                                    </div>
                                    <div className="AdCard__CustomMeta-yk9ydk-1 iaKaFQ">
                                        <div>
                                            <a href="https://bit.ly/3b8DfWr" target="_blank" rel="sponsored" className="Link-k8dxie-0 gLHiBQ">Visit HackerEarth <i className="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                            <small>https://bit.ly/3b8DfWr</small>
                                        </div>
                                        <a href="https://sponsor.hackernoon.com/ad-by-tag" className="Badge-sc-1yo3ffo-0 AdCard__AdTag-yk9ydk-0 lbJLTx">promoted</a>
                                    </div>
                                </article>
                                <article className="ivlmVk">
                                    <div className="title-wrapper">
                                        <h2>
                                            <a href="https://hackernoon.com/reactjs-pagination-tutorial-building-from-scratch-video-tr4g316w">ReactJS Pagination Tutorial: Building from Scratch</a>
                                        </h2>
                                        <button data-tip="Save stories for a rainy day and find them later at <a href='https://app.hackernoon.com/bookmarks'/>https://app.hackernoon.com/bookmarks</a>" data-for="DeF63pTcXuPYqnkpfWT5" data-html="true" data-delay-hide="1000" className="Bookmark__Layout-sc-9eyvkj-0 jBeNHn bookmark  " currentitem="false">
                                            <i aria-hidden="true" className="fas fa-bookmark "></i>
                                            <div className="__react_component_tooltip t755bb279-c131-4947-b00d-d97122c6826e place-top type-dark" id="DeF63pTcXuPYqnkpfWT5" data-id="tooltip" style={{left:"354px" , top:"199px"}}>
                                                Save stories for a rainy day and find them later at
                                                <a href="https://app.hackernoon.com/bookmarks">https://app.hackernoon.com/bookmarks</a>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="card-reactions">
                                        <div className="emojis">
                                            <span>6 reactions</span>
                                        </div>
                                    </div>

                                    <div className="image-wrapper">
                                        <a href="https://hackernoon.com/reactjs-pagination-tutorial-building-from-scratch-video-tr4g316w" target="_blank" rel="sponsored">
                                            <img src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-mg9p317b.jpeg" alt="Adf image" className="img--contain"/>
                                        </a>
                                        <div className="tag">
                                            <a href="https://hackernoon.com/tagged/reactjs" className="Badge-sc-1yo3ffo-0 StoryTag__Layout-l8xrl1-0 kVtHZZ">#reactjs</a>
                                        </div>
                                    </div>
                                    <div className="meta">
                                        <div className="Profile__Layout-sc-1j6ysg0-0 dDqmCb profile">
                                            <a href="https://hackernoon.com/u/codebucks">
                                                <img src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg" alt="Author profile picture" width="50" height="50" loading="lazy"/>
                                            </a>
                                            <div>
                                                <h3>
                                                    <a href="/u/codebucks" className="Link-k8dxie-0 gLHiBQ">@codebucks</a>
                                                    <small>CodeBucks</small>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="time">
                                            <div>8min</div>
                                            <div className="date">01/14/21</div>
                                        </div>
                                    </div>
                                </article>
                                <article className="ivlmVk">
                                    <div className="title-wrapper">
                                        <h2>
                                            <a href="https://hackernoon.com/react-component-testing-guide-jest-and-rtl-rx2533uz">React Component Testing Guide: Jest and RTL</a>
                                        </h2>
                                        <button data-tip="Save stories for a rainy day and find them later at <a href='https://app.hackernoon.com/bookmarks'/>https://app.hackernoon.com/bookmarks</a>" data-for="DeF63pTcXuPYqnkpfWT5" data-html="true" data-delay-hide="1000" className="Bookmark__Layout-sc-9eyvkj-0 jBeNHn bookmark  " currentitem="false">
                                            <i aria-hidden="true" className="fas fa-bookmark "></i>
                                            <div className="__react_component_tooltip t755bb279-c131-4947-b00d-d97122c6826e place-top type-dark" id="DeF63pTcXuPYqnkpfWT5" data-id="tooltip" style={{left:"354px" , top:"199px"}}>
                                                Save stories for a rainy day and find them later at
                                                <a href="https://app.hackernoon.com/bookmarks">https://app.hackernoon.com/bookmarks</a>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="card-reactions">
                                        <div className="emojis">
                                            <span>5 reactions</span>
                                        </div>
                                    </div>

                                    <div className="image-wrapper">
                                        <a href="https://hackernoon.com/react-component-testing-guide-jest-and-rtl-rx2533uz" target="_blank" rel="sponsored">
                                            <img src="https://hackernoon.com/images/DHOqXwtCIKY1Gm9k9zgzeImIqrk2-gx5733db.jpeg" alt="Adf image" class="img--contain"/>
                                        </a>
                                        <div className="tag">
                                            <a href="https://hackernoon.com/tagged/reactjs" className="Badge-sc-1yo3ffo-0 StoryTag__Layout-l8xrl1-0 kVtHZZ">#react</a>
                                        </div>
                                    </div>
                                    <div className="meta">
                                        <div className="Profile__Layout-sc-1j6ysg0-0 dDqmCb profile">
                                            <a href="https://hackernoon.com/u/jaydee">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2FDHOqXwtCIKY1Gm9k9zgzeImIqrk2-vm04u7z.jpeg?alt=media&token=a03eeccb-be6c-469f-9ec4-594608b77c3a" alt="Author profile picture" width="50" height="50" loading="lazy"/>
                                            </a>
                                            <div>
                                                <h3>
                                                    <a href="https://hackernoon.com/u/jaydee" className="Link-k8dxie-0 gLHiBQ">@jaydee</a>
                                                    <small> Jake Dowie </small>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="time">
                                            <div className="date">03/14/21</div>
                                        </div>
                                    </div>
                                </article>
                                
                            </div>
                        </section>
                        <section>
                            <h4 style={{marginBottom:"32px"}}> 
                                Tags
                            </h4>
                            <div className="tags">
                                {data.tags.map(item => <a href={`https://hackernoon.com/tagged/${item}`} className="Badge-sc-1yo3ffo-0 StoryTag__Layout-l8xrl1-0 kVtHZZ">#{item}</a>)}
                            </div>
                        </section>
                        <div className="CallToAction__Layout-sc-1bzkg2-0 lihLaA">
                            <a href="https://app.hackernoon.com/signup">Join Hacker Noon <i className="fad fa-glasses" aria-hidden="true"></i></a>
                            <p>Create your free account to unlock your custom reading experience.</p>
                        </div>
                    </div>
                </main>
                
                <Footer/>
            </div>
        </div>
     );
}
 
export default MainPAge;