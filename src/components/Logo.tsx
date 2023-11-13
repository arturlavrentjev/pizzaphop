import {FC} from "react";
import {Link} from "react-router-dom";
import logoSvg from '../assets/img/pizza-logo.svg';

export const Logo: FC = () => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img width="38" src={logoSvg} alt="Pizza logo" />
        <div>
          <h1 className="header__logo-text">PizzaShop</h1>
        </div>
      </div>
    </Link>
  )
}