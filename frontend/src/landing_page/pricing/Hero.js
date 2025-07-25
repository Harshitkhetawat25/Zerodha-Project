export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 ">
        <h2>Charges</h2>
        <p className="fs-4 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row pt-5 border-top">
        <div className="col text-center">
            <img src="/media/images/pricing0.svg" style={{height: "250px"}}/>
            <h2>Free equity delivery</h2>
            <p className="text-muted mt-4">All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col text-center">
        <img src="/media/images/other-trades.svg" style={{height: "250px"}}/>
            <h2>Intraday and F&O trades</h2>
            <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
        </div>
        <div className="col text-center">
        <img src="/media/images/pricing0.svg" style={{height: "250px"}}/>
            <h2>Free direct MF</h2>
            <p className="text-muted mt-4">All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
        </div>
      </div>
    </div>
  );
}
