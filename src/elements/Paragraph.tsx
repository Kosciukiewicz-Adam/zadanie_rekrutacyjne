import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg";

interface Props {
    buttonText: string;
    header: string;
    text: string;
}

const Paragraph: React.FC<Props> = ({ header, text, buttonText }): JSX.Element => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    let textToDisplay: string[] = text.trim().split(/\s+/);

    if (!isDrawerOpen) {
        textToDisplay = textToDisplay.slice(0, 27);
        textToDisplay.push("[...]");
    }

    return (
        <div className="md:w-1/2 w-full md:pb-0 pb-[30px]">
            <p className='font-BebasNeue text-[25px] pb-[16px]'>{header}</p>
            <p className='text-[14px] font-RobotoCondensed'>{textToDisplay.join(" ")}</p>
            <div className='text-[14px] font-RobotoCondensed pt-[24px] flex flex-row items-center cursor-pointer' onClick={() => setIsDrawerOpen(prev => !prev)}>
                <p>{buttonText}</p>
                <img src={arrow} className={`h-[12.5px] ml-[6px] ${isDrawerOpen ? "rotate-180" : ""}`} />
            </div>
        </div>
    )
}

export default Paragraph;