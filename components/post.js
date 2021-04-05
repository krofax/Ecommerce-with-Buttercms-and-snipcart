import styles from "../styles/Home.module.css";

function Post({ name, price, description, image, id }) {
  return (
    <>
      <div key={id} className={styles.card}>
        <img
          style={{ "max-width": "100%" }}
          src={image}
          alt={`Preview of ${name}`}
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <p>
          <button
            className="snipcart-add-item"
            data-item-id={id}
            data-item-image={image}
            data-item-name={name}
            data-item-url="/"
            data-item-price={price}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </>
  );
}

export default Post;
