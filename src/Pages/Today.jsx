import './style.css'
import { WiDaySunny,WiDayWindy, WiRaindrop, WiSunrise, WiSunset, WiThermometer } from "weather-icons-react";
import { Icon } from '@iconify/react';

function Today(props) {
        const {temp,status,humidity,visibility,pressure,uv} = props
        
    return (
        <div>
             <div className="details">
                            <div className="col">
                                <div className="col-items">
                                    <p>UV index</p>
                                    <WiDaySunny size={60} color='gold' />
                                    <h3>{uv} </h3>
                                </div>
                                <div className="col-items">
                                    <p>Humidity</p>
                                    <WiRaindrop size={60} color='blue' className="humidity"></WiRaindrop>
                                    <span id='span'>%</span>
                                    <h3> {humidity}</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-items">
                                    <p>Wind Status</p>
                                    <WiDayWindy size={60} color='blue' />
                                    <h3>{status} km/h</h3>
                                </div>
                                <div className="col-items">
                                    <p>Visibility</p>
                                    <Icon icon="eos-icons:compass" width="60" height="60" color="gold" rotate={2}/>
                                    <h3>{visibility} km</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-items">
                                    <p>Sunrise & Sunset</p>
                                    <h3><WiSunrise size={60} color='gold'/> 5:21 am</h3>
                                    <h3><WiSunset size={60} color='gold'/>6:21 pm</h3>
                                </div>
                                <div className="col-items">
                                    <p>Pressure</p>
                                    <WiThermometer size={60} color='blue'/>
                                    <h3>{pressure} hPa</h3>
                                </div>
                            </div>
                        </div>
        </div>
    );
}

export default Today;