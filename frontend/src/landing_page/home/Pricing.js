import React from 'react';

function Pricing() {
    return ( 
        <div className='container '>
            <div className='row p-5'>
                <div className='col-4 p-5'>
                    <h2 className='fs-3 mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                 <div className='col-2'>
                    
                </div>
                 <div className='col-6'>
                    <div className='row  '>
                        <div className='col-6 border text-center p-4'>
                            <h1 className='mb-3'>₹0</h1>
                            <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border text-center p-4'>
                            <h1 className='mb-3'>₹20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Pricing ;