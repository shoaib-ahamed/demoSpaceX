/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
const Card = ({spacexdata}) => {

    const router = useRouter()

    const data = spacexdata;

    // const handleWikipediaPage = (e) => {
    //     e.preventDefault();
    //     window.location = data.wikipedia 
    // }

    if(data.flight_number >6) return null; 

    return (
            <div className="card" style={{ width: '18rem'}} areahidden={true}>
                <img className="card-img-top" src={data.links.mission_patch} alt={data.links.mission_patch} />

                <div className="card-body">
                    <div className="card-title text-capitalize" title='card-title' >
                        mission : 1  {data.launch_year}  / {data.mission_name}
                    </div>

                    <div className="row justify-content-between mx-0">
                        <h6 className="text">{data.details}</h6>
                    </div>

                    <p className="card-text" title='asd'>
                    <button  className="btn btn-link"> 
                            <a href={data.wikipedia}> 
                                <i className="fas fa-arrow-right"></i> Go to wikipedia page
                            </a>
                    </button> 
                    </p>
                        
                    <div className="row justify-content-between mx-0">
                    
                    </div>
                </div>
            </div>

    )

}

export default Card;

