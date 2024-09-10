import React from 'react';
import Button from "../elements/Button";

const Naviagtion: React.FC = (): JSX.Element => {
    return (
        <div className='w-full h-[79px] flex flex-row items-center place-content-between lg:px-[120px] md:px-[100px] px-[30px]'>
            <div>
                <img src="./src/assets/logo.png" className='md:h-[32px] h-[24px]' />
            </div>
            <div className='flex flex-row gap-[23px] md:text-[16px] text-[14px] xs:visible invisible'>
                <p>Galeria zdjęć</p>
                <p>FaQ</p>
            </div>
            <Button text="Zadzwoń do nas" />
        </div>
    )
}

export default Naviagtion;