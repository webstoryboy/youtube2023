import React from 'react'

import { webdText } from '../../data/webd'
import VideoSlider from '../videos/VideoSlider'

const Webd = () => {
    return (
        <section id='webd'>
            <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
            <div className='video__inner'>
                <VideoSlider videos={webdText} />
            </div>
        </section>
    )
}

export default Webd