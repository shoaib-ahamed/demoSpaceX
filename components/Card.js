/* eslint-disable @next/next/no-img-element */

const Card = ({spacexdata}) => {
    const data = spacexdata

    if(data.flight_number >8) return null; 

    return (
            <div className="card" style={{ width: '18rem' , padding: '20px'}}>
                <img className="card-img-top" src={data.links.mission_patch} alt={data.links.mission_patch} />

                <div className="card-body">
                    <div className="card-title text-capitalize" title='card-title' >
                        mission {data.flight_number}  , {data.launch_year}  / {data.mission_name}
                    </div>

                    <div className="row justify-content-between mx-0 card-details">
                        <h6 className="text">{data.details}</h6>
                    </div>

                    <p className="card-text" title='wiki'>
                        <button  className="btn"> 
                                <a href={data.links.wikipedia} target="_blank" rel="noreferrer"> 
                                    <i className="fas fa-arrow-right" aria-hidden="true"></i> Go to wikipedia page
                                </a>
                        </button> 
                    </p>
                </div>
            </div>

    )

}

export default Card;

