import React from "react"

const style = {
  position: "aboslute",
  top: 30,
  left: "50%",
  transform: "translate(-50%, -50%)",
  right: 200,
  pTop: 80,
  shotsBottom: 50,
  masterBottom: 25
}


const backImg = {
  src: "url('https://static.vinepair.com/wp-content/uploads/2017/04/tequila-internal.jpg')",
  size: "contain",
  repeat: "no-repeat",
  width: "100%",
  height: "auto",
  pTop: "50%"  // 66.64%
}

const Jumbotron = (props) => (
  /*<div className="jumbotron text-center text-white font-weight-bold" style={{backgroundImage:style.src, backgroundSize:style.size}}>*/
  <div className="jumbotron text-center text-white font-weight-bold"
    style={{
      backgroundImage: backImg.src,
      backgroundSize: backImg.size,
      backgroundRepeat: backImg.repeat,
      width: backImg.width,
      height: backImg.height,
      paddingTop: backImg.pTop
    }}>

    <h1 className="position-absolute"
      style={{ top: style.top, left: style.left, transform: style.transform }}>
      PARTY TIME!
    </h1>
    <p className="position-absolute"
      style={{ top: style.pTop, left: style.left, transform: style.transform }}>
      POUR A SHOT WITH THE TEQUILA OF YOUR CHOICE,
      BUT DRINK THE SAME TEQUILA TWICE AND YOU'RE WASTED AF
    </p>
    <p className="position-absolute"
      style={{ bottom: style.shotsBottom, right: style.right }}>
      SHOTS TAKEN: {props.score}
    </p>
    <p className="position-absolute"
      style={{ bottom: style.masterBottom, right: style.right }}>
      LAST TEQUILA MASTER: {props.master}
    </p>
  </div>
)

export default Jumbotron