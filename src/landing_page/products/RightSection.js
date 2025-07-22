import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  link1Text,
  link1Href,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6" style={{paddingLeft:"100px", fontSize:"1.1em"}}>
          <h3 className="mb-4">{productName}</h3>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1em" }}
          >
            {productDescription}
          </p>
          {link1Href && (
            <a
              href={link1Href}
              className="text-decoration-none fw-semibold"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              {link1Text}
            </a>
          )}
        </div>

        {/* Image Column */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "550px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
