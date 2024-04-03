import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
export default function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// type ButtonProps = {
//   children: React.ReactNode;
//   // onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
// };
// export default function Button({ children }: ButtonProps) {
//   const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) =>;
//   return <button onClick={handleClick}>{children}</button>;
// }
