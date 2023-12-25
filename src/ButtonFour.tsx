import React from "react";

type ButtonFour1Props = React.ComponentPropsWithoutRef<"button">;

//...rest packs everything that we pass as prop into an array, and then we ca just spread it on the element
export default function ButtonFour({
  type,
  autoFocus,
  color,
  onClick,
  ...rest
}: ButtonFour1Props) {
  return <button {...rest}>Click Me</button>;
}



//INTERSECTION
type ButtonFour2Props = ButtonFour1Props & {
  variant: "red" | "blue";
};

export function ButtonFour2({
  type,
  autoFocus,
  color,
  onClick,
  variant,
  ...rest
}: ButtonFour2Props) {
  return <button {...rest}>Click Me</button>;
}



//we call it intersection in types and EXTENDING in interfaces
interface ButtonFour3Props extends ButtonFour1Props {
  variant: "red" | "blue";
}

export function ButtonFour3({
  type,
  autoFocus,
  color,
  onClick,
  variant,
  ...rest
}: ButtonFour3Props) {
  return <button {...rest}>Click Me</button>;
}



//event handlers
export function ButtonFour4() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("clicked...");
  };
  return <button onClick={handleClick}>Click Me</button>;
}


