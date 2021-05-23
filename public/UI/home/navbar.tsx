import React, {useState} from  'react'
import Link from 'next/link'
import {Search, Shop , Bars} from '../icons'
const Navbar = () =>{
    const [Res, setRes] = useState("none")
    const Navigation = () => {
        setRes(Res === 'none' ? 'block' : 'none' )
    }
    return(
        <nav className="navbar">
            <div className="logo">
                <Link href="/">
                    Smart Perfume Collection
                </Link>
            </div>
            <nav className="nav" style={{ display: Res }}>
                <Link href="">Acceuil</Link>
                <Link href="">Passer un commande</Link>
                <Link href="">Contacter Nous</Link>
                <Link href="">A Propos</Link>
            </nav>
            <div className="nv_right">
                <button className="Search">
                    <Search/>
                </button>
                <button className="Shop">
                    <Shop/>
                </button>
                <button onClick={Navigation} className="res_btn">
                    <Bars/>
                </button>
            </div>
        </nav>
    )
}
export default Navbar