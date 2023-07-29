import { Link } from "react-scroll";

const File = ({ props }) => {
  const { name, to, ext, text } = props;

  return (
    <li className="nav-item" data-name={`${name}`}>
      <Link
        href={`#${to}`}
        to={`${to}`}
        activeClass="active"
        className="nav-link"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          height="15px"
          width="15px"
          alt={`${ext}-logo`}
          src={`files/${ext}.svg`}
        />
        {text}.{ext}
      </Link>
    </li>
  );
};

export default File;
