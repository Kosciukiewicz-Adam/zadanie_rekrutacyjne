import React from 'react';
import Button from "../elements/Button";
import image from "../assets/logo.png"

const Naviagtion: React.FC = (): JSX.Element => {
    return (
        <div className='w-full h-[79px] flex flex-row items-center place-content-between lg:px-[120px] md:px-[100px] px-[30px] relative z-10'>
            <div>
                <img src={image} className='md:h-[32px] h-[24px]' />
            </div>
            <div className='hidden flex-row gap-[23px] md:text-[16px] text-[14px] xs:flex'>
                <a className='hover:text-mainDark text-black hover:opacity-80 hover:underline cursor-pointer' href="#gallery">Galeria zdjęć</a>
                <p className='hover:text-mainDark hover:opacity-80 hover:underline cursor-pointer'>FaQ</p>
            </div>
            <Button text="Zadzwoń do nas" />
        </div>
    )
}

export default Naviagtion;