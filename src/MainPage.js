import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {TopNav,SubNav} from "./components/navs";
import {SET_DARK_MODE,SET_LIGHT_MODE} from "./redux/reducer";

const MainPAge = () => {
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.data);
    const {darkmode} = storeData;
    const handleToggle = () => {
        if(!darkmode){
            dispatch({type: SET_DARK_MODE})
            document.body.classList.add("dark-mode")
        } else {
          dispatch({type: SET_LIGHT_MODE})
          document.body.classList.remove("dark-mode")
        }
    }
    return ( 
        <div className="App">
            <div className="page-layout">
                <header className="header-layout">
                <TopNav handleToggle={handleToggle} darkmode={darkmode}/>
                </header>

            </div>
        </div>
     );
}
 
export default MainPAge;