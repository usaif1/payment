//dependencies
import React from "react"

//imports
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"

const Header = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        background: "#EEEEEE",
        padding: "1em",
        margin: "none",
        // width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25%",
          margin: "auto",
          alignItems: "flex-end",
          //   padding: "1em",
          //   border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            padding: "0.5em 1em",
          }}
        >
          <CheckCircleIcon style={{ color: "#00A466", fontSize: "1.5em" }} />
          <p>Cart</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            padding: "0.5em 1em",
          }}
        >
          <RadioButtonUncheckedIcon
            style={{ color: "#00A466", fontSize: "1.5em", margin: " 0 auto" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
            }}
          >
            <span>Payment</span>
            <span>Options</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
