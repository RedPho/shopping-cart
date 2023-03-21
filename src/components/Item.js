export default function Item({name, image, imageAlt, description, price, itemIndex}) {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure><img src={image} alt={imageAlt && ""} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="mt-3">{price}$</p>
          <button id={`buyBtn-${itemIndex}`} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}