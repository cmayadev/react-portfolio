const Business = () => {
  return (
    <a href="mailto:cmayadev@gmail.com">
      <div
        className="business-card"
        style={{ backgroundImage: `url("logo_op.png")` }}
      >
        <div className="business-card-content">
          <img src="logo.png" alt="cmayadev-logo" width="72px" height="72px" />
          <span className="contact-name">Cristian Maya</span>
          <span className="contact-nickname">cmayadev</span>
        </div>
        <span className="contact-email">cmayadev@gmail.com</span>
      </div>
    </a>
  );
};

export default Business;
