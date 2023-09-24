import React from 'react'
import WipTop from "./Portada_WIP.jpg"

const Wip = () => {
    return (
        <>
            <div className="banner-about">
                <img src={WipTop}
                    alt="Santiago Rimoldi, graphic designer and photoshop artist" className="w-100" />
            </div><div className="container">
                    <div className="row wip">
                        <div className="col-12 col-lg-1 col-md-2">
                            <h3 className="date">March</h3>
                            <h3 className="year">2021</h3>
                        </div>
                        <div className="col-12 col-lg-11 col-md-10">
                            <h2 className="title">Test BB8 Animation</h2>
                            <div className="video-container">
                                <iframe title="test-animation-Element3D" src="https://player.vimeo.com/video/259784444" frameborder="0" allowfullscreen ></iframe>
                            </div>
                            <div className="video-description">
                                <p>Test BB8 animation made in AE with Element3D</p>
                            </div>
                        </div>
                    </div>
                </div><div className="container">
                    <div className="row wip">
                        <div className="col-12 col-lg-1 col-md-2">
                            <h3 className="date">February</h3>
                            <h3 className="year">2021</h3>
                        </div>
                        <div className="col-12 col-lg-11 col-md-10">
                            <h2 className="title">Test UFO Animation</h2>
                            <div className="video-container">
                                <iframe title="test-animation" src="https://player.vimeo.com/video/254497683" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div className="video-description">
                                <p>Test "UFO Shower" animation made in AE with Element3D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </> 
    )
}

export default Wip
