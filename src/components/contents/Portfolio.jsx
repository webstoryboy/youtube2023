import React from 'react'

import { portfolioText } from '../../data/portfolio'
import VideoSlider from '../videos/VideoSlider'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
            <div className='video__inner'>
                <VideoSlider videos={portfolioText} />
            </div>
        </section>
    )
}

export default Portfolio