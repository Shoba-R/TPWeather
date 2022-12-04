import React from 'react';
import {Spinner} from "../Spinner/Spinner"
import "./Card.css"

const Card = ({loadingData, showData, weather, forecast} ) => {

    if(loadingData){
        return <Spinner />
    }

    return(
        <div className='mt-5'>

            {
            showData=== true ? ( <div className="container">
                <div className="card mb-3 mx-auto bg-dark text-light">
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <h3 className='card-title'>{weather.name}</h3>
                            <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className='img-fluid rounded-start'alt=".." />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body text-start mt-2'>

                            </div>
                        </div>
                    </div>
                </div>
                </div>)
                :
                (<h2 className="text-light">Sin datos</h2>)
            }

        </div>

    )
}

export { Card }