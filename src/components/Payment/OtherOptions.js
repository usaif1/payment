//dependencies
import React, { useState } from "react"

//imports
import OfferCard from "./components/OfferCard"
import upi from "../../assets/upiLogo.png"
import upiLogo from "../../assets/upi.PNG"
import phonePe from "../../assets/phonePe.png"
import creditCard from "../../assets/creditCard.png"

const OtherOptions = () => {
  const [state, setState] = useState({
    value: false,
    openDrawer: false,
  })

  const handleChange = (e) => {
    setState({ value: e.target.value })
    // alert(e.target.value)
  }

  const openDrawer = (e) => {
    setState({
      openDrawer: true,
      value: false,
    })
  }

  const closeDrawer = (e) => {
    setState({
      openDrawer: false,
      value: false,
    })
  }

  const otherOptions = [
    {
      id: 1,
      title: "UPI",
      img: upi,
      details: "Get min 30% off...",
      value: "upi",
      name: "radBtn",
      stateValue: state,
      radioBtn: false,
      logo: upiLogo,
    },

    {
      id: 2,
      title: "Wallets",
      img: null,
      details: "",
      value: "wallets",
      name: "radBtn",
      stateValue: state,
      radioBtn: false,
    },

    {
      id: 3,
      title: "Net Banking",
      img: phonePe,
      details: "We support upto 1000 banks",
      value: "netBanking",
      name: "radBtn",
      stateValue: state,
      radioBtn: false,
    },
    {
      id: 4,
      title: "Credit/ Debit Card",
      img: creditCard,
      details:
        "Get up to ₹300 off on a minimum transaction of Rs. 1500 on Axis Credit and Debit Cards. T&C apply",
      value: "creditCard",
      name: "radBtn",
      stateValue: state,
      radioBtn: false,
    },
    {
      id: 5,
      title: "Cash On Delivery",
      img: phonePe,
      details: "Pay via cash",
      value: "cod",
      name: "radBtn",
      stateValue: state,
      radioBtn: true,
    },
  ]

  return (
    <div
    // style={{ border: "1px solid black" }}
    >
      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>Other Options</h2>
          <div className="offerCardsContainer">
            {otherOptions.map((offer) => {
              return (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  handleChange={handleChange}
                  openDrawer={openDrawer}
                  closeDrawer={closeDrawer}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherOptions
