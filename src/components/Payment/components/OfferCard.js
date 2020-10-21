//dependencies
import React from "react"
import Radio from "@material-ui/core/Radio"
import { Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

//imports
import EnterCardDetails from "./EnterCardDetails"

const OfferCard = ({
  offer,
  handleChange,
  openDrawer,
  closeDrawer,
  openBuyOptions,
}) => {
  const classes = useStyle()

  const buyNow = () => {
    switch (offer.value) {
      case "amazonPay":
      case "mobikwik":
      case "phonePe":
      case "cod":
        return (
          <button
            className={
              offer.stateValue.value === offer.value
                ? classes.btnVisible
                : classes.hidden
            }
          >
            Place Order & Pay
          </button>
        )

      case "upi":
        return (
          <div
            className={
              offer.stateValue.openBuyOptions ? classes.visible : classes.hidden
            }
          >
            <input
              type="text"
              placeholder="e.g. XXXXXXXX99@paytm.com"
              style={{ padding: "1em" }}
            />
            <button>Pay Now</button>
          </div>
        )

      default:
        return null
    }
  }

  const onClickHandler = () => {
    switch (offer.value) {
      case "creditCard":
        return openDrawer()

      case "upi":
        return openBuyOptions()
      default:
        return alert("Life sucks")
    }
  }

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
            {offer.logo ? (
              <img
                src={offer.logo}
                style={{ width: "15em", height: "4em", display: "block" }}
                alt="logo"
              />
            ) : null}
            {buyNow()}
          </div>
          {offer.radioBtn ? (
            <Radio
              name="radBtn"
              value={offer.value}
              onChange={handleChange}
              checked={offer.stateValue.value === offer.value}
            />
          ) : (
            <ChevronRightIcon
              // onClick={
              //   offer.value !== "upi" || offer.value !== "netBanking"
              //     ? openDrawer
              //     : alert("life sux")
              // }
              onClick={onClickHandler}
              fontSize="large"
            />
          )}
        </div>
      </div>
      <Drawer
        open={offer.stateValue.openDrawer}
        // open={true}
        anchor="right"
        ModalProps={{ onBackdropClick: closeDrawer }}
        classes={{ paper: classes.paper }}
      >
        <EnterCardDetails />
        <button onClick={closeDrawer}>close me</button>
      </Drawer>
    </React.Fragment>
  )
}

export default OfferCard

const useStyle = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
  btnVisible: {
    visibility: "inherit",
    padding: "0.5em",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "8px",
    background: "#006D36",
    color: "white",
    fontWeight: "500",
    marginBottom: "0.5em",
  },
  btnPayNow: {
    visibility: "inherit",
    padding: "0.5em",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "8px",
    background: "#006D36",
    color: "white",
    fontWeight: "500",
    marginBottom: "0.5em",
  },
  paper: {
    width: "30%",
  },
  visible: {
    visibility: "visible",
    // border: "1px solid red",
  },
}))
