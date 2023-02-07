import React from 'react'
import vg from "../assets/wb.jpg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
         <div className='home' id='home'>
    <main>
        <h1>Ask Ansh</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics"/>
        <div>
            <p>
                We are your one and only solution to the teach problems
                you face everyday. We are leading tech company whose aim is to 
                increase the problem solving ability in childen.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Ask Ansh is the cheapest and best cloud ssd hosting company in India 
            providing quality & reliable cloud web hosting services in Delhi NCR, Mumbai,
             Kolkata, Chennai and all across India. We offer low cost Cloud linux cPanel SSD 
             hosting, Domain Name Registration and Cheap Reseller Hosting services from Delhi,
              India. We provide the Cheap & Best cPanel web hosting plans in India with free SSL
               certificates. Lightning fast servers packed with features, perfect for hosting both 
               business and personal websites</p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay:"0.3s",}}>
                <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s",}}>
                <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s",}}>
                <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{
                    animationDelay:"1s",}}>
                <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
