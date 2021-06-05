import React from "react";
import bannerImage from "../../image/header/banner.png";
function Banner(params) {
    return(
        <React.Fragment>
            <div style={{background:"#FFF7ED"}} className="flex items-center px-24 py-10 rounded-xl">
                <div className="w-4/11 h-full ml-12">
                    <img className="w-45 h-24" src={bannerImage} alt={bannerImage}/>
                </div>
                <div style={{color:"#FB6D3A"}} className="w-10/12 h-full font-bold">
                    <h1 className="font-bolder text-2xl">Promo Hari Ini</h1>
                    <h2 className="text-3xl">Perut kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex w-1/12 items-center justify-between mt-4">
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Banner;