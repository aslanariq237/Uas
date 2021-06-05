import React from "react";
import Banner from "./banner";
import Nav from "./nav";
import Populer from "./populer";
import {Switch,Route} from 'react-router-dom'
import Category from "./category";

function Content(props) {
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
     props.getSemua(img,jumlah,total,nama)
    return(
        <React.Fragment>
            <header className="h-2/10 w-full pr-5">
                <Banner/>
            </header>
            <nav className="h-4/10 w-full">
                <Nav />
            </nav>
            <section className="h-4/10 w-full">

                <Switch>
                    <Route path="/populer">
                        <Populer getSemua={getSemua}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={`/category/:id`}>
                        <Category getSemua={getSemua}/>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}

export default Content