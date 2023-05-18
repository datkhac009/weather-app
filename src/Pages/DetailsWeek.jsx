import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'
function DetailsWeek(props) {
    const { id } = useParams()
    const { dataWeek } = props
    console.log(dataWeek)

    return (
        <div className='gr-content-week'>
        <Link to='/week' className='icon-close'>
        <Icon icon="solar:close-square-bold-duotone" width="40" height="40" />
        </Link>
            <h3 className='title'>{dataWeek[id].time.replace('T00:00:00Z', '')}</h3>
            <div className='content-child'>
                <div className='child'>
                    <p>Temp current : {dataWeek[id].values.temperatureApparentAvg.toFixed()}°C</p>
                    <p>Temp : {dataWeek[id].values.temperatureMin.toFixed()}°C-{dataWeek[id].values.temperatureMax.toFixed()}°C</p>
                    <p>Humidity : {dataWeek[id].values.humidityAvg.toFixed()}%</p>
                    <p>Wind speed : {dataWeek[id].values.windSpeedAvg} km/h</p>
                </div>
                <div className='child'>
                    <p>Sunrise : {dataWeek[id].values.sunriseTime.slice(11, -4)} am</p>
                    <p>Sunset : {dataWeek[id].values.sunsetTime.slice(11, -4)} am</p>
                    <p>UV : {dataWeek[id].values.uvIndexAvg}</p>
                    <p>Atmospheric pressure : {dataWeek[id].values.pressureSurfaceLevelAvg.toFixed()} hPa</p>
                </div>
            </div>
        </div>
    );
}

export default DetailsWeek;