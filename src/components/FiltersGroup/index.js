import {MdSearch} from 'react-icons/md'
import CategoryOption from '../categoryOption'
import RatingsOption from '../RatingsOption'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    changeCategory,
    searchInputText,
    changeRating,
    clearFilters,
  } = props

  const selectCategory = selectedCategoryID => {
    changeCategory(selectedCategoryID)
  }

  const onKeyDownInputText = event => {
    if (event.key === 'Enter') {
      searchInputText(event.target.value)
    }
  }

  const selectRating = ratingId => {
    changeRating(ratingId)
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" onKeyDown={onKeyDownInputText} />
      <MdSearch />

      <ul>
        {categoryOptions.map(category => (
          <CategoryOption
            key={category.id}
            categoryData={category}
            selectCategory={selectCategory}
          />
        ))}
      </ul>

      <ul>
        {ratingsList.map(ratingData => (
          <RatingsOption
            key={ratingData.ratingId}
            ratingData={ratingData}
            selectRating={selectRating}
          />
        ))}
      </ul>

      <button
        className="clearFiltersBtn-btnTag"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

/* <p className="sideHeading-pTag">Category</p>
    <p onClick={onClickCategoryOption}>Clothing</p>
    <p>Electronics</p>
    <p>Appliances</p>
    <p>Grocery</p>
    <p>Toys</p>
    <p className="sideHeading-pTag">Rating</p>
    <div className="ratingStars-container">
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaRegStar className="unfilledStar" />
      <p>& up</p>
    </div>
    <div className="ratingStars-container">
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <p>& up</p>
    </div>
    <div className="ratingStars-container">
      <FaStar className="filledStar" />
      <FaStar className="filledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <p>& up</p>
    </div>
    <div className="ratingStars-container">
      <FaStar className="filledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <FaRegStar className="unfilledStar" />
      <p>& up</p>
    </div> */
