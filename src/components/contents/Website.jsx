import React from 'react'

import { websiteText } from '../../data/website'
import VideoSlider from '../videos/VideoSlider'

const Website = () => {
    return (
        <section id='website'>
            <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
            <div className='video__inner'>
                <VideoSlider videos={websiteText} />
            </div>
        </section>
    )
}

export default Website