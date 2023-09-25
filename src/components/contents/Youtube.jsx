import React from 'react'

import { youtubeText } from '../../data/youtube'
import VideoSlider from '../videos/VideoSlider'

const Youtube = () => {
    return (
        <section id='youtube'>
            <h2>😱 지금 이 코딩을 영상으로</h2>
            <div className='video__inner'>
                <VideoSlider videos={youtubeText} />
            </div>
        </section>
    )
}

export default Youtube