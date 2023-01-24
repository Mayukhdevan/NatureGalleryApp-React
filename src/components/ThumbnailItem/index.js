import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, updateImageId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItem
  const activeClassName = isActive ? 'opacity' : ''

  const onSelected = () => updateImageId(id)

  return (
    <li className={`thumbnail ${activeClassName}`}>
      <button type="button" onClick={onSelected}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
