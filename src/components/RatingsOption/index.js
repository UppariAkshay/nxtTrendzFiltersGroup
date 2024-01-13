import './index.css'

const RatingsOption = props => {
  const {ratingData, selectRating} = props
  const {ratingId, imageUrl} = ratingData

  const onClickRating = () => {
    selectRating(ratingId)
  }

  return (
    <li>
      <img
        className="ratingStarImage-imgTag"
        src={imageUrl}
        alt={ratingId}
        onClick={onClickRating}
      />
    </li>
  )
}

export default RatingsOption
