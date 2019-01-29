import React from "react"
import { ListItem } from "components"
import "./styleListFeatures.css"

const ListFeatures = ({ features }) => (
  <div className="row">
    {
      features && features.map( feature => <ListItem feature={ feature }/>)
    }
  </div>
)

export default ListFeatures
