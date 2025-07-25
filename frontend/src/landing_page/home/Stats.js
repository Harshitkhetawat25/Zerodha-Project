import React from 'react';

function Stats() {
    return ( 
       <div className='container '>
        <div className='row p-5 mb-5'>
            <div className = "col-6 ">
                <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                <h3 className='fs-5 mt-2'>Customer-first always</h3>
                <p className='text-muted' >That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br/> lakh crores of equity investments and contribute to 15%<br/> of daily retail exchange volumes in India. </p>
                <h3 className='fs-5 mt-4'>No spam or gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push<br/> notifications. High quality apps that you use at your<br/> pace, the way you like. </p>
                <h3 className='fs-5 mt-4 '>The Zerodha universe</h3>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments<br/> in 30+ fintech startups offer you tailored services<br/> specific to your needs.</p>
                <h3 className='fs-5 mt-4 '>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just<br/> facilitate transactions, but actively help you do better<br/> with your money.</p>
            </div>
            <div className = "col-6 p-5">
                <img src='media/images/ecosystem.png' style={{width:"90%"}} />
                <div className=' text-center mt-3'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href=''  style={{textDecoration:"none"}}>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>

                </div>
                
            </div>
        </div>
       </div>
     );
}

export default Stats ;