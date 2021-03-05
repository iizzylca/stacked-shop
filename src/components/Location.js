import React from 'react'
const Location = () => {
    return (
        <section className='info-container' >
            <div className='map-wrap'>
                <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12103.428310556987!2d-73.78308580000001!3d40.67711795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e2464a061f3%3A0xcaeff490c745fc5!2s7%2C%2068-60%20Austin%20St%2C%20Forest%20Hills%2C%20NY%2011375!5e0!3m2!1sen!2sus!4v1614171183292!5m2!1sen!2sus" width='550' height='350' frameBorder='0' style={{border:1}} allowFullScreen='' aria-hidden="false" tabIndex="0"></iframe>            
            </div>
            <div className='info-wrap'>
                <h1>Questions?</h1>
                <p>Information: 845-558-3575 </p>
                <p>Email: Coming Soon</p>
                <hr></hr>
                <h1>Come On In</h1>
                <p>Address: 68-60 Austin Street, Forest Hills, NY 11375</p>
                <p>Hours: Monday-Sunday: 11am - 8pm</p>
                <p>Email: Coming Soon</p>
            </div>
        </section>
    )
}

export default Location
