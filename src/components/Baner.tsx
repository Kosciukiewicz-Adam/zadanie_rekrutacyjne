import React from 'react';
import Button, { ButtonType } from "../elements/Button";

const Baner: React.FC = (): JSX.Element => {
    return (
        <div className='w-full flex flex-col xl:h-[820px] lg:h-[720px] sm:h-[650px] xs:h-[520px] h-[420px] relative'>
            <div className='lg:p-[120px] sm:p-[100px] p-[30px] flex flex-col sm:items-start items-center'>
                <div className='font-BebasNeue lg:text-[76px] md:text-[64px] sm:text-[50px] text-[36px]'>
                    <p className='lg:leading-[80px] leading-none'>Sprzedajemy samochody</p>
                    <p className='lg:leading-[80px] leading-none text-center sm:text-left'>z Europy</p>
                </div>
                <div className='lg:pt-[32px] pt-[24px] lg:pb-[48px] pb-[32px] sm:text-[16px] text-[14px]'>
                    <p className='leading-[25px]'>Kup komfortowy pojazd, aby każda podróż</p>
                    <p className='leading-[25px]'>była wyjątkowym przeżyciem</p>
                </div>
                <div className='flex flex-row gap-x-[24px]'>
                    <Button text='Zobacz zdjęcia' />
                    <Button text='Zadzwoń do nas' type={ButtonType.SECONDARY} />
                </div>
                <img src="./src/assets/cars.png" className='lg:w-3/4 w-5/6 absolute right-0 bottom-0' />
            </div>
        </div>
    )
}

export default Baner;