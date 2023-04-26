import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
      <header>
        <NavLink to="/">лого домой</NavLink>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/tweets"> Tweets</NavLink>
        </nav>
      </header>
    );
};
