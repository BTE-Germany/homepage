import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";

export default function Home() {

    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNavVisible(true);
        }, 1500)
    }, []);


    return (
        <div style={{overflowX: "hidden"}}>

            <Navbar/>
            <Hero/>
            <div style={{height: "100vh"}}>

            </div>
        </div>
    )
}
