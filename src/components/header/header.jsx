import React from "react";
import logo from "../../image/header/logo.png";
import love from "../../image/header/love.png";
import box from "../../image/header/box.png";
import coin from "../../image/header/Ellipse 3.png";
import profile from "../../image/header/profile.jpg";

function Header() {
    return(
        <React.Fragment>
            <section className="w-10/12 flex items-center">
                <div className="w-1/3">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="w-2/3 relative mr-10">
                    <svg className="w-4 h-6 absolute top-3 left-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input className="w-full text-lg font-poppins pl-14 pr-2 py-3 rounded-3xl bg-gray-50" placeholder="Cari Makan Bang?" type="text"/>
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className="ml-10 w-1/6 pr-3 pl-10 flex text-gray-400 h-full items-center justify-between">
                <div>
                    <img width="30" height="20" src={love}  alt={love}/>
                </div>
                <div>
                    <img width="30" height="30" src={box} alt={box}/>
                </div>
                <div>
                    <img width="30" height="30" src={coin} alt={coin}/>
                </div>
                <div>
                    <img width="30" height="30" className="rounded-3xl" src={profile} alt={profile}/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header;