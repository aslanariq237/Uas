import React from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import Vector from '../../image/nav/Vector.png'

export default function Populer(props) {
     const [img,setImg] = React.useState([])
     const [jumlah,setJumlah] = React.useState([])
     const [total,setTotal] = React.useState([])
     const [nama,setNama] = React.useState([])
     props.getSemua(img,jumlah,total,nama)
     const [number,setNumber] = React.useState([])
     console.log(number)
    React.useEffect(()=>{
        getPopuler() 
    },[]) 
    const [populer, setPopuler] = React.useState([])  
    const getPopuler = async() => {
        try{
            const url = 'https://belajar-react.smkmadinatulquran.sch.id/api/populer/24?page=1'
            const response = await axios.get(url)
            setPopuler(response.data.data)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <React.Fragment>
            <div className="">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold font-poppins text-3xl">Populer</h1>
                </div>
                <div className="">
                    <ul className="flex w-full justify-between flex-wrap">
                        {populer.map((dt,i)=>(
                            <li key={i} className={`flex-none w-3/12 h-24 relative m-10 `}>
                                {/* <Popup trigger={}modal >
                                    {close => (
                                    <div className="flex items-center justify-center bg-white">
                                        <div className="flex items-center justify-center absolute">
                                            
                                        </div>
                                    </div>  
                                    )}
                                </Popup> */}
                                <Popup trigger={
                                           <img className="rounded-xl w-full h-32 " src={dt.image} alt={dt.image} />
                                        } modal>
                                        {close => (
                                            <div style={{width:'450px'}}className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                               <img className="rounded-xl w-full h-full " src={dt.image} alt={dt.image} />
                                                <div className="flex justify-between mt-3 p-3">
                                                    <p className="font-extrabold text-2xl">{dt.name}</p>
                                                    <p className="font-extrabold text-2xl">Rp. {dt.harga}</p>
                                                </div>
                                                <div className="flex">
                                                    <div className="rounded-full ml-3 border-black">
                                                        <p>{dt.waktu}</p>
                                                    </div>
                                                    <div className="rounded-full ml-5 flex border-black">
                                                    <img src={Vector} alt={Vector} className="h-5 font-bold mr-2"/>
                                                        <p className="font-bold">{dt.rating}</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between mt-3 p-3">
                                                   <div className="font-poppins font-bold w-3/12">Stock {dt.jumlah}</div>
                                                   <button disabled={dt.pesan === 0} onClick={()=>{
                                                        setNumber(dt.pesan--)
                                                        dt.jumlah++
                                                   }} className="w-1/12 bg-yellow-500">-</button>
                                                   <div className="border w-1/12 p-2 text-center ">{dt.pesan}</div>
                                                   <button disabled={dt.jumlah === 0} onClick={()=>{
                                                       dt.jumlah--
                                                       setNumber(dt.pesan++)
                                                   }} className="w-1/12 bg-yellow-500">+</button>
                                                   <button onClick={()=>{
                                                       setImg(dt.image)
                                                       setJumlah(dt.harga)
                                                       setTotal(dt.pesan)
                                                       setNama(dt.name)
                                                   }} className="font-bold bg-yellow-500 w-3/12">Pesan</button>
                                                </div>
                                            </div>
                                            )}
                                        </Popup>           
                            <p style={{background:'white'}} className="absolute z-10 rounded-xl h-10 w-24 flex items-center justify-center top-20 text-black font-black">
                                {dt.waktu}
                            </p>
                            <div className="font-bold">{dt.name}
                            </div>
                            <div className="flex justify-between w-6/12">
                                <div className="flex"><img src={Vector} alt={Vector} className="h-4 font-bold"/>{dt.rating}</div>
                                <div className="flex justify-between"> Rp.{dt.harga}</div>
                            </div>
                          </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </React.Fragment>
    )
}