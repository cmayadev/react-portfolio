const Card = (props) => {
  const { title, desc, icon } = props;

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
          <img
            className="card-icon"
            src={`icons/${icon}.png`}
            alt={`${title}-icon`}
            width="24px"
            height="24px"
          />
        </div>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
