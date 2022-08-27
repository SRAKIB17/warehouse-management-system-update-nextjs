/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from 'react';

const CommonBanner = () => {
    useEffect(() => {
        const getId = (id) => document.getElementById(id);

        const getCarousel = document.querySelectorAll('.carousel-image');
        var index = 0;
        setInterval(() => {
            showImage(index);
            index++
        }, 5000)

        function showImage(indexSlide) {

            // hidden all image 
            getCarousel.forEach(imageHidden => imageHidden.style.display = 'none');


            // valid getCarousel index
            if (indexSlide < 0) {
                index = getCarousel.length - 1;
                indexSlide = index;
            }
            else if (indexSlide > getCarousel.length - 1) {
                index = 0;
                indexSlide = 0;
            }
            // display specific image 
            getCarousel[indexSlide].style.display = 'block'

        }
        getId('next').addEventListener('click', () => {
            showImage(index++)
        })
        getId('prev').addEventListener('click', () => {
            showImage(index--)
        })

        // create slider veiw 
        // if(getId('bottomInd')){

        //     for (let index = 0; index < getCarousel.length; index++) {
        //         console.log(index)
        //         const div = document.createElement('div');
        //         div.className = 'indicator'
        //         getId('bottomInd').appendChild(div)

        //     }
        // }


        // copy code 
        function copy(id) {
            document.getElementById(id).select()
            document.execCommand('copy')
        }


    }, [])
    return (
        <div>
            <div className="carousel-slider" id="carousel">
                <div className="carousel-images">



                    <div className='carousel-image'>
                        <img
                            src="/carousel/carousel2.png"
                            alt=""
                        />
                        <div>
                            <button className='btn btn-primary absolute right-[100px] top-[50%]'>
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className='carousel-image'>
                        <img
                            src="/carousel/carousel1.png"
                            alt=""
                        />
                    </div>
                    <div className='carousel-image'>
                        <img
                            src="/carousel/carousel3.png" alt=""
                        />

                    </div>
                    <div className='carousel-image'>
                        <img
                            src="/carousel/carousel4.png" alt=""
                        />

                    </div>
                </div>
                <div className="next-prev">
                    <button href="#" id="prev"></button>
                    <button href="#" id="next"></button>
                </div>
                <div id="bottomInd"></div>
            </div>

        </div>
    );
};

export default CommonBanner;