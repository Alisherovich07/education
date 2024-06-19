import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

        const slider = useRef();
        let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;   
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    } 

    const slideBackward = () => {
        if(tx > 0){
            tx += 25;   
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    } 

  return (
    <div className='testimonials'>
        <img className='next-btn' src={next_icon} alt="" onClick={slideForward} />
        <img className='back-btn' src={back_icon} alt="" onClick={slideBackward} />
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Reprehenderit, ipsam. 
                            Magnam nostrum nulla dolores praesentium debitis 
                            molestiae. Nulla, perferendis a, accusantium 
                            architecto tempora provident laudantium nisi, 
                            non vel praesentium deserunt?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Reprehenderit, ipsam. 
                            Magnam nostrum nulla dolores praesentium debitis 
                            molestiae. Nulla, perferendis a, accusantium 
                            architecto tempora provident laudantium nisi, 
                            non vel praesentium deserunt?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Reprehenderit, ipsam. 
                            Magnam nostrum nulla dolores praesentium debitis 
                            molestiae. Nulla, perferendis a, accusantium 
                            architecto tempora provident laudantium nisi, 
                            non vel praesentium deserunt?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Reprehenderit, ipsam. 
                            Magnam nostrum nulla dolores praesentium debitis 
                            molestiae. Nulla, perferendis a, accusantium 
                            architecto tempora provident laudantium nisi, 
                            non vel praesentium deserunt?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials