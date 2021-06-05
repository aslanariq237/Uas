import React from "react";
import Header from "../header/header";
import Content from "../content/index";
import Section from "../section/section"
function Layout() {
    const [img,setImg] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [total,setTotal] = React.useState([])
    const [nama,setNama] = React.useState([])
    const getSemua = (image,jumlahs,totals,namas)=>{
        setImg(image)
        setJumlah(jumlahs)
        setTotal(totals)
        setNama(namas)
    }
    return(
        <React.Fragment>
            {/* Header */}
           <div className="h-screen w-screen  font-poppins">
           <header className="h-1/10 w-full  flex items-center rounded-xl">
                <Header/>
            </header>
            <main className="h-9/10 w-full flex">
                <section className="ml-10 w-5/6 ">
                    <Content getSemua={getSemua}/>
                </section>
                {/* Ini Bagian Pesanan */}
                <section className="w-3/12 h-full bg-gray-50">
                    <Section img={img} jumlah={jumlah} total={total} nama={nama}/>
                </section>
            </main>
           </div>
        </React.Fragment>
    )
}

export default Layout;