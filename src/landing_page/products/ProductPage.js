import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";
import Universe from "./Universe"

export default function ProductPage() {
  return (
    <>
      <Hero />
      <div className="h-1 border-top container px-5"></div>
      <LeftSection
        imageURL={"/media/images/kite.png"}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1Href={"#"}
        link1Text={"Try demo →"}
        link2Href={"#"}
        link2Text={"Try Kite →"}
        googlePlay={"#"}
        appStore={"#"}
      />
      <RightSection imageURL={"/media/images/console.png"} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link1Text={"Learn More →"} link1Href={"#"}/>
      <LeftSection
        imageURL={"/media/images/coin.png"}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1Href ={"#"}
        link1Text={"Coin →"}
      />
       <RightSection imageURL={"/media/images/kiteconnect.png"} productName={"Kite Connect API"} productDescription={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link1Text={"Kite Connect →"} link1Href={"#"}/>
      <LeftSection
        imageURL={"/media/images/varsity.png"}
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <Universe />
    </>
  );
}
