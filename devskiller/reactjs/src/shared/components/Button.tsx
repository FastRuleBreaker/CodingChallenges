import React from "react";

interface ButtonProps {
    onClick?: () => void,
    children: string,
    className?: string,
    style?: string
}

export function Button({ onClick = () => {}, children, className,  style="primary" }: ButtonProps) {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick();
  }

  const classNames = `mx-1 btn btn-${style}` + (className ? (" " + className) : '');

  return (
    <button type="button" className={classNames} onClick={onClickHandler}>
      {children}
    </button>
  );
}
