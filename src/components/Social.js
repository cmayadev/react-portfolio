const Social = (props) => {
  const { title, slug, link } = props.social;

  return (
    <li>
      <a
        href={link}
        title={title}
        target="_blank"
        rel="noreferrer"
        aria-label={`cmayadev ${slug}`}
      >
        <img
          src={`socials/${slug}.svg`}
          alt={title}
          width="30px"
          height="30px"
        />
      </a>
    </li>
  );
};

export default Social;
