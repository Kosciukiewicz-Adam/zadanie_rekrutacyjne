import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

enum CarTypes {
    PASSENGER_CAR = "passenger car",
    VANS = "vans",
}

interface DotProps {
    props: {
        className: string;
    };
    key: string;
}

interface Props {
    images: string[];
}


const Gallery: React.FC<Props> = ({ images }): JSX.Element => {
    const [selectedCarType, setSelectedCarType] = useState<CarTypes>(CarTypes.PASSENGER_CAR);

    const createDot = (dot: DotProps): JSX.Element => {
        const isActive = dot.props.className.includes("slick-active");
        return (
            <div
                className={`size-[8px] rounded-full cursor-pointer hover:bg-mainDark hover:opacity-60  bg-${isActive ? 'mainDark' : '[#f1f1f1]'}`}
                key={dot.key}
            />
        )
    }

    const createGalleryImage = (imageSrc: string) => (
        <div className='w-[600px] mr-[48px] border-r-[48px] border-mainLight overflow-hidden' key={imageSrc}>
            <img src={imageSrc} key={imageSrc} className="w-[660px] object-cover" />
        </div>
    )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.05,
        slidesToScroll: 2,
        arrows: false,
        appendDots: dots => (
            <div>
                <div className='flex flex-row justify-center gap-x-[10px]'>
                    {dots.map(dot => createDot(dot))}
                </div>
            </div>
        ),
    };

    const getCarTypeClassName = (carType: CarTypes) => {
        let baseName = "text-[15px] cursor-pointer hover:opacity-70";

        if (selectedCarType === carType) {
            baseName += " text-mainDark underline decoration-mainDark font-semibold";
        }

        return baseName;
    }

    return (
        <div className='w-full lg:p-[120px] md:p-[100px] p-[30px]'>
            <div>
                <p className='text-[21.5px] text-mainDark font-RobotoCondensed'>Prezentacja firmy</p>
                <p className='font-BebasNeue text-[40px]'>ZOBACZ NASZĄ GALERIE ZDJĘĆ</p>
                <div className='flex flex-row pt-[24px] gap-x-[24px]'>
                    <p
                        onClick={() => setSelectedCarType(CarTypes.PASSENGER_CAR)}
                        className={getCarTypeClassName(CarTypes.PASSENGER_CAR)}
                    >Samochody osobowe</p>
                    <p
                        onClick={() => setSelectedCarType(CarTypes.VANS)}
                        className={getCarTypeClassName(CarTypes.VANS)}
                    >Samochody dostawcze</p>
                </div>
            </div>
            <div className='md:py-[80px] py-[30px]'>
                <Slider {...settings}>
                    {images.map(imageSrc => createGalleryImage(imageSrc))}
                </Slider>
            </div >
        </div >
    )
}

export default Gallery;