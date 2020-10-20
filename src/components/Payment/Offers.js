//dependencies
import React, { useState } from "react"

//imports
import OfferCard from "./components/OfferCard"
import amazonPay from "../../assets/amazonPay.png"
import mobikwik from "../../assets/mobikwik.jpg"
import phonePe from "../../assets/phonePe.png"
import creditCard from "../../assets/creditCard.png"

const Offers = () => {
  const [state, setState] = useState({
    value: false,
    openDrawer: false,
  })

  const handleChange = (e) => {
    setState({ value: e.target.value })
    // alert(e.target.value)
  }

  const toggleDrawer = (e) => {
    setState((prevState) => ({
      ...state,
      openDrawer: !prevState.openDrawer,
      value: false,
    }))
  }

  const offers = [
    {
      id: 1,
      title: "Amazon Pay",
      img: amazonPay,
      details: "",
      value: "amazonPay",
      name: "radBtn",
      stateValue: state,
      radioBtn: true,
    },
    {
      id: 2,
      title: "Mobikwik",
      img: mobikwik,
      details: "Get 15% supercash upto Rs. 200 on mobikwik payments",
      value: "mobikwik",
      name: "radBtn",
      stateValue: state,
      radioBtn: true,
    },
    {
      id: 4,
      title: "PhonePe",
      img: phonePe,
      details:
        "Get up to ₹1000 Cashback* on 1 transaction with PhonePe Wallet on Pharmeasy during the offer period.",
      value: "phonePe",
      name: "radBtn",
      stateValue: state,
      radioBtn: true,
    },
    {
      id: 3,
      title: "Credit/ Debit Card",
      img: creditCard,
      details:
        "Get up to ₹300 off on a minimum transaction of Rs. 1500 on Axis Credit and Debit Cards. T&C apply",
      value: "creditCard",
      name: "radBtn",
      stateValue: state,
      radioBtn: false,
      open: toggleDrawer,
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
          <h2>Offers</h2>
          <div className="offerCardsContainer">
            {offers.map((offer) => {
              return (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  handleChange={handleChange}
                  // checked={e.target.value === offer.value ? true : false}
                  state={state.value}
                />
              )
            })}
          </div>
          <h2>Other Options</h2>
        </div>
        <div>
          <h2>Price Breakdown</h2>
        </div>
      </div>
    </div>
  )
}

export default Offers
