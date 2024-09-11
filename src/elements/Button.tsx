import React from 'react';

export enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
};

interface Props {
    text: string;
    type?: ButtonType,
}

const Button: React.FC<Props> = ({ text, type = ButtonType.PRIMARY }): JSX.Element => {
    let buttonClass = "rounded-md pt-[12px] pb-[12px] pl-[24px] pr-[24px] font-semibold cursor-pointer hover:opacity-60 hover:bg-mainDark md:text-[16px] sm:text-[14px] text-[12px] hover:text-white whitespace-nowrap";

    if (type === ButtonType.PRIMARY) {
        buttonClass += " bg-mainDark text-white";
    } else {
        buttonClass += " border-solid-mainDark border-[1px] text-mainDark bg-white";
    }

    return (
        <div className={buttonClass}>
            {text}
        </div>
    )
}

export default Button;