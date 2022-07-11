import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  isWhite?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  isRounded,
  isWhite,
}) => {
  const whiteClass = `bg-white border border-black
   text-[#121212] hover:bg-[#121212] hover:text-white`;
  const darkClass = `bg-[#121212]  
   text-white hover:bg-white hover:text-[#121212]`;
  return (
    <button
      data-testid="btn"
      className={`flex font-bold justify-center border border-solid
       border-white items-center
    py-[0.8125rem] px-[0.625rem] leading-[100%] ${
      isRounded ? 'rounded-full' : 'rounded'
    } ${isWhite ? whiteClass : darkClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {isRounded: false, isWhite: true};
export default Button;
