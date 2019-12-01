import React from 'react';

export default function Carousel() {
    return (
        <div className="owl-carousel-wrapper">
            <div className="box-92819 shadow-lg">
                <div>
                    <h1 className=" mb-3 text-black">Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam, ratione earum.</p>
                    <p className="mb-0 mt-4"><a href="#" className="btn btn-primary">Get In Touch</a></p>
                </div>
            </div>

            <div className="owl-carousel owl-1 ">
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_1.jpg')" }}></div>
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_2.jpg')" }}></div>
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_3.jpg')" }}></div>
            </div>
        </div>
    )
}