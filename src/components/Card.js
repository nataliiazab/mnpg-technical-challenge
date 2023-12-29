const Card = ({ key, title, price, description, imageUrl }) => {
  return (
    <div className="card-container">
      <p>Title: {title}</p>
      <p>
        Price: {price.Value}
        {price.Currency}
      </p>
      <p>Description: {description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Card;
