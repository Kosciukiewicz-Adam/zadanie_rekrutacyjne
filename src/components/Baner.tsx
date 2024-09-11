import React from 'react';
import Button, { ButtonType } from "../elements/Button";

const Baner: React.FC = (): JSX.Element => {
    return (
        <div className='w-full flex flex-col xl:h-[825px] lg:h-[720px] md:h-[600px] h-[425px] relative'>
            <div className='lg:px-[120px] sm:px-[100px] px-[30px] lg:py-[120px] py-[40px] flex flex-col md:items-start items-center'>
                <div className='font-BebasNeue lg:text-[76px] md:text-[64px] sm:text-[50px] text-[36px]'>
                    <p className='lg:leading-[80px] leading-none'>Sprzedajemy samochody</p>
                    <p className='lg:leading-[80px] leading-none text-center md:text-left'>z Europy</p>
                </div>
                <div className='lg:pt-[32px] pt-[24px] lg:pb-[48px] pb-[32px] sm:text-[16px] text-[14px]'>
                    <p className='leading-[25px]'>Kup komfortowy pojazd, aby każda podróż</p>
                    <p className='leading-[25px]'>była wyjątkowym przeżyciem</p>
                </div>
                <div className='flex flex-row gap-x-[24px]'>
                    <Button text='Zobacz zdjęcia' />
                    <Button text='Zadzwoń do nas' type={ButtonType.SECONDARY} />
                </div>
            </div>
        </div>
    )
}

export default Baner;