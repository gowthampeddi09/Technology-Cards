// Write your code here.
import './index.css'

const Technology = props => {
  const {techCard} = props
  const {title, description, imgUrl, className} = techCard
  const cardContainer = `card-container ${className}`
  return (
    <li className={cardContainer}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="card-img" />
    </li>
  )
}

export default Technology
