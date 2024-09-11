import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

enum CarTypes {
    PASSENGER_CAR = "passenger",
    VANS = "van",
}

interface DotProps {
    props: {
        className: string;
    };
    key: string;
}

interface Props {
    images: {
        passenger: string[],
        van: string[],
    };
}


const Gallery: React.FC<Props> = ({ images }): JSX.Element => {
    const [selectedCarType, setSelectedCarType] = useState<CarTypes>(CarTypes.PASSENGER_CAR);

    const createDot = (dot: DotProps): JSX.Element => {
        const isActive = dot.props.className.includes("slick-active");
        const bgColorClass = isActive ? 'bg-mainDark' : 'bg-gray';
        return (
            <div
                className={`size-[8px] rounded-full ${bgColorClass}`}
                key={dot.key}
            />
        )
    }

    const createGalleryImage = (imageSrc: string) => (
        <div className='!w-[664px] !h-[446px] border-r-[64px] box-border border-mainLight' key={imageSrc}>
            <img src={imageSrc} key={imageSrc} className="w-full h-full object-cover" />
        </div>
    )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.05,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
        focusOnSelect: false,
        appendDots: dots => (
            <div>
                <div className='flex flex-row justify-center gap-x-[10px] relative bottom-[-23px]'>
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
        <div className='w-full lg:pl-[88px] pl-[30px] lg:pt-[80px] pt-[30px] lg:pb-[152px] pb-[30px]' id="gallery">
            <div className='lg:pr-[88px] pr-[30px]'>
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
            <div className='md:pt-[88px] pt-[30px] h-[534px]'>
                <Slider {...settings}>
                    {images[selectedCarType].map(imageSrc => createGalleryImage(imageSrc))}
                </Slider>
            </div >
        </div >
    )
}

export default Gallery;