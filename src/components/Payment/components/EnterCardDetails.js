import React from "react"
import { makeStyles } from "@material-ui/core/"

const EnterCardDetails = () => {
  const classes = useStyle()
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <h2>Enter Card Details</h2>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className={classes.label}>Card Number</label>
            <input
              type="text"
              placeholder="1234-5678-9876-5432"
              className={classes.input}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className={classes.label}>Valid Through</label>
              <input
                type="text"
                placeholder="MM/YY"
                className={classes.input}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1em",
              }}
            >
              <label className={classes.label}>CVV</label>
              <input type="text" placeholder="123" className={classes.input} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className={classes.label}>Name On Card</label>
            <input
              type="text"
              placeholder="e.ge Ravi Kumar"
              className={classes.input}
            />
          </div>
          <div style={{ display: "flex", marginTop: "1em" }}>
            <input type="checkbox" />
            <label> Save this card for future payments</label>
          </div>
          <div style={{ display: "flex" }}>
            <p>img goes here</p>
            <p>
              Your card details will be stored securely for your convenience. We
              do not store CVV.
            </p>
          </div>
          <input
            type="submit"
            value="Pay"
            style={{
              width: "80%",
              margin: "auto",
              padding: "1em",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#006D36",
              color: "white",
              fontSize: "18px",
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default EnterCardDetails

const useStyle = makeStyles((theme) => ({
  input: {
    padding: "1em",
    margin: "1em 0 0 0",
    borderRadius: "8px",
    border: "1px solid black",
    // width: "60%",
  },
  label: {
    margin: "1em 0 0 ",
  },
}))
