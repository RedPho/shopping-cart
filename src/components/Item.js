export default function Item({image, imageAlt, description, price}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt={imageAlt && ""} /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <p>{price}$</p>
        </div>
      </div>
    </div>
  )
}