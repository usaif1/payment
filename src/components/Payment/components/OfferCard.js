//dependencies
import React from "react"
import Radio from "@material-ui/core/Radio"
import { Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

//imports

const OfferCard = ({ offer, handleChange, state }) => {
  const classes = useStyle()

  return (
    <React.Fragment>
      <div
        className="card-container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          marginTop: "1em",
          alignItems: "end",
        }}
      >
        <img
          src={offer.img}
          alt="amazon pay logo"
          style={{ width: "3em", objectFit: "contain", marginRight: "1em" }}
        />
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid grey",
            justifyContent: "space-between",
            width: "30em",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p>{offer.title}</p>
            <p>{offer.details}</p>
            <button
              className={
                offer.stateValue.value === offer.value
                  ? classes.visible
                  : classes.hidden
              }
            >
              Place Order & Pay
            </button>
          </div>
          {offer.radioBtn ? (
            <Radio
              name="radBtn"
              value={offer.value}
              onChange={handleChange}
              checked={offer.stateValue.value === offer.value}
            />
          ) : (
            <ChevronRightIcon onClick={offer.open} fontSize="large" />
          )}
        </div>
      </div>
      <Drawer
        open={offer.stateValue.openDrawer}
        anchor="right"
        ModalProps={{ onBackdropClick: offer.open }}
        classes={{ root: classes.root }}
      >
        Hi i'm the drawer component
      </Drawer>
    </React.Fragment>
  )
}

export default OfferCard

const useStyle = makeStyles((theme) => ({
  hidden: {
    visibility: "hidden",
  },
  visible: {
    visibility: "visible",
    padding: "0.5em",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "8px",
    background: "#006D36",
    color: "white",
    fontWeight: "500",
    marginBottom: "0.5em",
  },
}))
