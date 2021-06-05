import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import semua from '../../image/nav/semua.jpg'

export default function Nav() {
    const [category, setCategory] = React.useState([])

    const getCategory = async() => {
        try{
            const url = 'https://belajar-react.smkmadinatulquran.sch.id/api/category/all'
            const response = await axios.get(url)
            setCategory(response.data.data)
        }catch(error){
            console.log(error)
        }
    }

  
    React.useEffect(()=>{
        getCategory();
    },[])

    
    return(
        <React.Fragment>
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl">Kategori</h1>
                    <button style={{background:"#FB6D3A"}} className="px-4 py-2 text-xs text-white  mr-5 rounded-2xl">Lebih lengkap</button>
                </div>
                <div className="mt-7 mr-5">
                    <ul className="flex w-full items-center justify-between flex-nowrap overflow-auto">
                    <li  className="h-36 relative w-60  flex-none m-3"><img className="rounded-xl w-full h-36" src={semua} alt={semua}/>
                        <NavLink to={`/populer`}>
                            <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0  text-white font-black">
                                semua
                            </p>
                        </NavLink>
                            </li>
                        {category.map((dt,i)=>(
                            <li key={i} className={` h-36 relative ${category.length === 3 ? 'w-60' : 'w-2/10'} flex-none m-3`}><img className="rounded-xl w-full h-36" src={dt.img} alt={dt.img}/>
                            
                            <NavLink to={`/category/${dt.id}`}>
                            <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0  text-white font-black">
                                {dt.name}
                            </p>
                            </NavLink>
                        </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}