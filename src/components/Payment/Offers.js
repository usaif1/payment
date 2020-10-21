//dependencies
import React, { useState } from "react"

//imports
import OfferCard from "./components/OfferCard"
import amazonPay from "../../assets/amazonPay.png"
import mobikwik from "../../assets/mobikwik.jpg"
import phonePe from "../../assets/phonePe.png"
import creditCard from "../../assets/creditCard.png"

import upi from "../../assets/upiLogo.png"
import upiLogo from "../../assets/upi.PNG"

const Offers = () => {
  const [state, setState] = useState({
    value: null,
    openDrawer: false,
    openBuyOptions: false,
  })

  const handleChange = (e) => {
    setState({ ...state, value: e.target.value, openBuyOptions: false })
    // alert(e.target.value)
  }

  const openDrawer = (e) => {
    setState({
      openDrawer: true,
      value: false,
      openBuyOptions: false,
    })
  }

  const closeDrawer = (e) => {
    setState({
      openDrawer: false,
      value: false,
      openBuyOptions: false,
    })
  }

  const showBuyOptions = (e) => {
    setState({
      ...state,
      openBuyOptions: true,
    })
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
      id: 3,
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
  ]

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
          <h2>Offers</h2>
          <div className="offerCardsContainer">
            {offers.map((offer) => {
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
        <div>
          <h2>Price Breakdown</h2>
        </div>
      </div>
      <div style={{ width: "70%", margin: "auto" }}>
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
                openBuyOptions={showBuyOptions}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Offers
