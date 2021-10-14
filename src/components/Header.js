import PropsTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={!showAdd ? "green" : "red"}
          text={!showAdd ? "add" : "close"}
          onClick={onAdd}
        ></Button>
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Task App",
};
Header.defaultProps = {
  title: PropsTypes.string.isRequired,
};
export default Header;
