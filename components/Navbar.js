const Navbar = () => {
    return (

       <div>
            <video autoPlay loop muted  className='vedio' src='https://res.cloudinary.com/shoaibahamed/video/upload/v1626838504/video_jatxhr.mp4'  />

            <div className="cover-wrapper">
                
                <navbar className="nav">
                    <div className='logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="25" viewBox="0 0 331.644 40.825">
                        <g transform="translate(0)"><path d="M77.292,15.094H49.249l-1.039.777V40.818h7.763V31.463l.741-.664H77.293c5.2,0,7.632-1.4,7.632-4.985V20.086c0-3.593-2.436-4.992-7.633-4.992m0,9.223c0,1.69-1.118,2.041-3.554,2.041H56.8l-.827-.8V20.21l.741-.678H73.738c2.436,0,3.554.347,3.554,2.045Z" fill="#fff"/><path d="M99.081,19.813l6.68,9.787-.37.948H90.618l-3.771,4.639h21.99l1.524.928,3.414,4.709h8.884L103.186,14.775" fill="#fff"/><path d="M187.418,35.757V28.833l.8-.69h14.862V23.734H179.524V40.823H214.27V36.435H188.252" fill="#fff"/><rect width="35.113" height="4.848" transform="translate(179.524 15.094)" fill="#fff"/><path d="M140.361,19.685h28.288c-.436-3.6-2.668-4.595-8.33-4.595H140.06c-6.389,0-8.427,1.247-8.427,6.082V34.737c0,4.84,2.038,6.087,8.427,6.087h20.259c5.745,0,7.945-1.079,8.1-4.81H140.361l-.832-.783V20.209" fill="#fff"/><path d="M29.333,25.118H8.754l-.606-.667v-4.4l.6-.466H36.493l.379-.927c-.945-2.431-3.392-3.565-7.936-3.565H9.665c-6.385,0-8.426,1.247-8.426,6.082v2.844c0,4.841,2.041,6.086,8.426,6.086H30.2l.645.566v4.6l-.526.718H6.83v-.022H.678s-.7.353-.677.518c.525,3.382,2.829,4.34,8.345,4.34H29.333c6.384,0,8.486-1.247,8.486-6.087V31.195c0-4.832-2.1-6.077-8.486-6.077" fill="#fff"/><path d="M236.725,14.988H225.174l-.627,1.193,12.828,9.351c2.43-1.407,5.074-2.833,7.95-4.24" fill="#fff"/><path d="M247.075,32.6l11.275,8.222h11.692l.484-1.089L253.69,27.413q-3.354,2.462-6.615,5.19" fill="#fff"/><path d="M235.006,40.806H224.555l-.883-1.383C230.778,32.562,262.56,3.151,331.644,0c0,0-57.986,1.956-96.638,40.806" fill="#a7a9ac"/></g></svg>
                    </div>


                   <div className="nav-content">
                    <div className="nav-items">
                            <a href="#">VISION & MISSION</a >
                        </div>
                        <div className="nav-items">
                            <a href="#">PROJECTS</a >
                        </div>
                        <div className="nav-items">
                            <a href="#"> EQUIPE</a>
                        </div>
                        <div className="nav-items">
                            <a href="#"> CONTACT </a >
                        </div>
                   </div>
                </navbar>
            

                <div className="cover-slogan">
                    SMALLEST RIDESHARE <br/> PROGRAM
                </div>

            </div>
       </div>

    )
}

export default Navbar