import React from "react"

const SmallBox = (props) => {

  return (
    <div className = "small box" draggable = 'true'onDrag={props.dragHandler}>
    </div>
  )


}


export default SmallBox
