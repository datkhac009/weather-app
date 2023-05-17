import './style.css'

function Today(props) {
        const {temp,status,humidity,visibility,pressure,uv} = props
        
    return (
        <div>
             <div className="details">
                            <div className="col">
                                <div className="col-items">
                                    <p>UV index</p>
                                    <h3>{uv} </h3>
                                </div>
                                <div className="col-items">
                                    <p>Humidity</p>
                                    <h3> {humidity}%</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-items">
                                    <p>Wind Status</p>
                                    <h3>{status} km/h</h3>
                                </div>
                                <div className="col-items">
                                    <p>Visibility</p>
                                    <h3>{visibility} km</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-items">
                                    <p>Sunrise & Sunset</p>
                                    <h3>5:21 am</h3>
                                    <h3>6:21 pm</h3>
                                </div>
                                <div className="col-items">
                                    <p>Pressure</p>
                                    <h3>{pressure} hPa</h3>
                                </div>
                            </div>
                        </div>
        </div>
    );
}

export default Today;