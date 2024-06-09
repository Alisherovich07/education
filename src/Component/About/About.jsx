import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon' alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSTY</h3>
            <h2>Nurturing Tomorrow's Leaders Todays</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ut consequatur laudantium nihil aliquam, maiores, ratione nisi vel accusantium dolorem ipsum soluta. Atque hic culpa obcaecati dignissimos iusto autem voluptatibus!</p>
        </div>
    </div>
  )
}

export default About