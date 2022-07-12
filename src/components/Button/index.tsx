import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  isWhite?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const whiteClass = `bg-white 
   text-[#121212] hover:bg-[#121212] hover:text-white`;
  const darkClass = `bg-[#121212]  
   text-white hover:bg-white hover:text-[#121212]`;
  return (
    <button
      data-testid="btn"
      className={`flex font-bold justify-center border border-solid
       border-black items-center
    py-[0.8125rem] px-[0.625rem] leading-[100%] ${
        props.isRounded ? 'rounded-full' : 'rounded'
    } ${props.isWhite ? whiteClass : darkClass} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
Button.defaultProps = {isRounded: false, isWhite: true};
export default Button;
