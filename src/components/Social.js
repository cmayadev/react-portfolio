const Social = (props) => {
  const { title, slug, link } = props.social;

  return (
    <a
      href={link}
      title={title}
      target="_blank"
      rel="noreferrer"
      aria-label={`cmayadev ${slug}`}
    >
      <div className="card social-item">
        <div className={`card-content ${slug}`}>
          <div className="card-header">
            <img
              className="card-icon"
              src={`socials/${slug}.svg`}
              alt={`${title}-icon`}
              width="32px"
              height="32px"
            />{" "}
            <div className="card-title">{title}</div>
          </div>
          <p className="card-text">{link}</p>
        </div>
      </div>
    </a>
  );
};

export default Social;
