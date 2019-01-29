import React from "react"
import "./styleListItem.css"
var images = require.context('../../images', true);

//<img className="img-responsive" src={srcImage} alt="..." />

const ListItem = ({ feature: { title, description, image, url}}) => {
  let srcImage = images(`./${image}`)
  return (    
    <div className="col-md-4">
      <div className="thumbnail">
      
      <object className="image" type="image/svg+xml" data={srcImage}></object>

        <div className="caption">
          <h3>{title}</h3>
          <p>{description}</p>
          <p><a href="#" className="btn btn-primary" role="button">LEARN MORE</a></p>
        </div>
      </div>
    </div>
  )
}
  

export default ListItem
