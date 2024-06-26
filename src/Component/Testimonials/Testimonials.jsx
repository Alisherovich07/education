import React, { useRef, useEffect } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    const tx = useRef(0);
    const slideCount = 4; // Slaydlar soni
    const slideWidth = 100 / slideCount; // Har bir slaydning kengligi

    const slideForward = () => {
        if (tx.current > -slideWidth * (slideCount - 1)) {
            tx.current -= slideWidth;   
        } else {
            tx.current = 0; // Qayta boshlash
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += slideWidth;   
        } else {
            tx.current = -slideWidth * (slideCount - 1); // Oxirgi slaydga o'tish
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }

    useEffect(() => {
        const interval = setInterval(slideForward, 3000); // Har 3 soniyada slaydni o'tkazish
        return () => clearInterval(interval); // Tozalash
    }, []);

    return (
        <div className='testimonials'>
            <img className='next-btn' src={next_icon} alt="" onClick={slideForward} />
            <img className='back-btn' src={back_icon} alt="" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
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

export default Testimonials;


