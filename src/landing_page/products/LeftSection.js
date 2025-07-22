import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
    
      <div className="row border-top p-5 ">
        <div className="col p-5">
          <img src={imageURL} />
        </div>
        <div className="col p-5 mt-5 mx-5">
          <h3>{productName}</h3>
          <p className="text-muted mt-4" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">Try Demo →</a>
            <a href={learnMore} className="mx-5 text-decoration-none">Learn more →</a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" />
              </a>
              <a href={appStore} className="mx-5">
              <img src="/media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
