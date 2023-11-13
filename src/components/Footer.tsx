import {FC} from "react";
import {Logo} from "./Logo";

export const Footer: FC = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Logo />
        <span style={{color: 'white'}}>© {date}</span>
      </div>  
    </footer>
  )
}