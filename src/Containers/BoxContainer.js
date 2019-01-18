import React from "react";
import LargeBox from "../Components/LargeBox";
import MediumBox from "../Components/MediumBox";
import SmallBox from "../Components/SmallBox"

class BoxContainer extends React.Component {

  render() {
    return(
      <div className = "boxCon" onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver}>
        <LargeBox

        />
        <MediumBox />
        <SmallBox
          dragHandler = {this.dragHandler}
        />
      </div>
    )
  }



}

export default BoxContainer
