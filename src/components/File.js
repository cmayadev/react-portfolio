const File = ({ props, active }) => {
  const { name, to, ext, text } = props;

  return (
    <li className="nav-item" data-name={`${name}`}>
      <a href={`#${to}`} className={`nav-link${active ? " active" : ""}`}>
        <img
          height="15px"
          width="15px"
          alt={`${ext}-logo`}
          src={`files/${ext}.svg`}
        />
        {text}.{ext}
      </a>
    </li>
  );
};

export default File;
