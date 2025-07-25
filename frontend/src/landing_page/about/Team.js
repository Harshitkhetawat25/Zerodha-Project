import React from 'react';

export default function Team(){
    return (
        <div className='container'>
            <div className='row  p-3 '>
                <h2 className='text-center text-muted'>People</h2>
            </div>
            <div className='row p-3 mt-4 text-muted ' style={{lineHeight:"1.8", fontSize:"1.1em"}}> 
                <div className='col-6 p-3 text-center'> 
                    <img src="media/images/nithinKamath.jpg" className='rounded-circle' style={{width:"50%"}}></img>  
                    <h4 className='mt-5 text-muted'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>   

                </div>
                <div className='col p-3'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' className='text-decoration-none'>Homepage</a> / <a href='#'  className='text-decoration-none'>TradingQnA</a> / <a href='#'  className='text-decoration-none'>Twitter</a></p>
                </div>

            </div>
            
        </div>
    );
};



