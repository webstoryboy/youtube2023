import React from 'react'

import { gsapText } from '../../data/gsap'
import VideoSlider from '../videos/VideoSlider'

const Gsap = () => {
    return (
        <section id='gsap'>
            <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
            <div className='video__inner'>
                <VideoSlider videos={gsapText} />
            </div>
        </section>
    )
}

export default Gsap