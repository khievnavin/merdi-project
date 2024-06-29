import React, { ReactNode } from "react";

interface ButtonRightSideProps {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonRightSideProps> = ({children,className}) => {
  return (
    <div>
      <button className={`${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;