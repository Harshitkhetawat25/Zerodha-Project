import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  link1Text,
  link1Href,
  link2Text,
  link2Href,
  link3Text,
  link3Href,
  googlePlay,
  appStore,
  
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col p-5">
          <img src={imageURL} />
        </div>
        <div className="col p-5 mt-5 mx-5">
          <h3>{productName}</h3>
          <p
            className="text-muted mt-4"
            style={{ lineHeight: "1.8", fontSize: "1.1em" }}
          >
            {productDescription}
          </p>
          <div>
          {link1Href && <a style={{marginRight : "70px",  marginTop: "1.5rem"}} className="text-decoration-none fw-semibold" href={link1Href}>{link1Text}</a>}
          {link2Href && <a style={{marginRight : "70px"}} className="text-decoration-none fw-semibold"  href={link2Href}>{link2Text}</a>}


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
