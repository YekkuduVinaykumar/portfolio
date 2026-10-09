import "./Card.css"

const Card = ({title, img, description}) => {
  return (
    <div className="container" gb>
      <div className="Card">
        <h1>{title}</h1>
          <img className="card-image" src={img} alt={title} />
        <div>JANASENA</div>
        <p className="description">
        {description}
      </p>
      <button className="button">PSPK</button>
    </div>
    </div>
  )
}

export default Card