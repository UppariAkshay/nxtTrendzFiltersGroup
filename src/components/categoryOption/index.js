const CategoryOption = props => {
  const {categoryData, selectCategory} = props
  const {name, categoryId} = categoryData

  const onClickCategory = () => {
    selectCategory(categoryId)
  }

  return <li onClick={onClickCategory}>{name}</li>
}

export default CategoryOption
