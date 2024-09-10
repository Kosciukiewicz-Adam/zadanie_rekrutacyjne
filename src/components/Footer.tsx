import React from 'react'
import Paragraph from '../elements/Paragraph';
const Footer: React.FC = (): JSX.Element => {

  const defaultText = "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et"
  const defaultHeader = "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.";
  const defaultButtonText = "Rozwiń"

  return (
    <div className='w-full bg-[#282828] text-white lg:px-[120px] md:px-[100px] px-[60px]'>
      <div className='md:py-[88px] py-[34px] flex md:flex-row flex-col gap-x-48 border-b-[2px] border-white'>
        <Paragraph text={defaultText} header={defaultHeader} buttonText={defaultButtonText} />
        <Paragraph text={defaultText} header={defaultHeader} buttonText={defaultButtonText} />
      </div>
      <div className='py-[24px] flex flex-row justify-between font-RobotoCondensed'>
        <p>Cars Spot</p>
        <p className='underline'>Polityka prywatności</p>
      </div>
    </div>
  )
}

export default Footer;
