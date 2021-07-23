import React from 'react'

function Info() {
    return (
        <div className='info'>
            <div className='items'>
                <div className='item'>
                    <h5>Contact</h5>
                    <ul className='noedit'>
                        <li>+8801672019292</li>
                        <li>+8801303082197</li>
                        <li>shoaibahamedshafi@gmail.com</li>
                    </ul>
                </div>

                <div className='item'>
                <h5> About</h5>
                <ul className='noedit'>
                        <li>about us</li>
                        <li>career</li>
                        <li>shop</li>
                    </ul>
                </div>

                <div className='item'>
                    <h5>Social Media</h5>
                    <ul className='noedit'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Vimeo</li>
                    </ul>
                </div>

                <div className='item'>
                    <h5>Rockets</h5>
                    <ul className='noedit'>
                        <li>Falcon 9</li>
                        <li>Falcon 1</li>
                        <li>Falcon Heavy</li>
                    </ul>
                </div>
            </div>

            <div className='item item_getupdate'>
                <h5>Get Updates</h5>

                <pre>
                    Subscribe to get updates about our Rocket Launches , <br/>
                    and everything about SpaceX.
                </pre>

                <label forhtml="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

            </div>
            
        </div>
    )
}

export default Info
