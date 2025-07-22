export default function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-8 text-center p-5">
          <a href="#" className="text-decoration-none fs-5">
            <h3>Brokerage calculator</h3>
          </a>
          <ul style={{textAlign:"left",lineHeight:"2rem"}} className="text-muted  p-5 ">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              *20 per contract note. Courier charges apply.{" "}
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).{" "}
            </li>
            <li>
              ForNRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).{" "}
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 40 per executed order instead of 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 mt-5 py-5">
          <img src = "/media/images/largestBroker.svg" style={{width: "400px"}} />
        </div>
      </div>
    </div>
  );
}
