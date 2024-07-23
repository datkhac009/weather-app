import { Route, Routes, } from "react-router-dom";
import Navlinkmenu from "../Mainlayout/Navlinkmenu";
import Week from "./Week";
import "./style.css"
import Today from "./Today";
import Hour from "./Hour";
import { useState } from "react";
import axios from "axios";
import DetailsWeek from "./DetailsWeek";
import { Icon } from "@iconify/react";


function Home() {

    const [dataAll, setData] = useState([]);
    const [dataWeek, setDataWeek] = useState([]);
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        status: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (city === "") {
            window.alert("Bạn chưa nhập City muốn tìm")
        }
        async function fetchData() {
            const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=OLM0ZsHhxoQmLzIGEi9Acrqo3Rywe2RE`);
            const datares = response.data;
            const dataWeekres = response.data.timelines.daily;
            let imgPath = '';
            if (response.data.timelines.daily[0].values.temperatureApparentAvg >= 35) {
                imgPath = "src/assets/nang.png"
            }
            else if (response.data.timelines.daily[0].values.temperatureApparentAvg >= 28) {
                imgPath = "src/assets/nang_may.png"
            }
            else if (response.data.timelines.daily[0].values.temperatureApparentAvg >= 22) {
                imgPath = "src/assets/mua.png"
            }
            else if (response.data.timelines.daily[0].values.temperatureApparentAvg >= 12) {
                imgPath = "src/assets/tuyet.png"
            }
            else if(response.data.timelines.daily[0].values.temperatureApparentAvg <= 12) {
                imgPath = "src/assets/react.svg"
            }
        setStatus({ ...status, status: imgPath })
        setData(datares);
        setDataWeek(dataWeekres);
        setLoading(true)
        console.log("step 1", dataAll)
        console.log("step 1", dataWeek)
        console.log(status)
        setCity("")
    }
    // if(loading!==true){
    //     return <div>Loading...</div>
    // }
    fetchData();
    console.log("step 2")
    console.log(status)
}
console.log("step2", dataAll)
return (
    <div>
        <div>
            {
                console.log(status)
            }
        </div>
        <div className="container">
            <div className="weather">
                <Navlinkmenu />
                <form className="search" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={city} placeholder="Enter City Name" onChange={(e) => setCity(e.target.value)} />
                    <button type="submit"><Icon icon="material-symbols:search" color="#dac" width="60" height="60" /></button>
                </form>
                {
                    loading &&
                    <div>
                        <div className="info">
                            <img src={status.status} width="170px" height="170px"/>
                            <h2>{dataAll.location.name}</h2>
                            <h1>{dataAll.timelines.daily[0].values.temperatureApparentAvg.toFixed()}°C</h1>
                            <h3>Today, {dataAll.timelines.daily[0].time.replace('T00:00:00Z', '')}</h3>
                            <p>{dataAll.location.type}</p>
                            <p>Clouds {dataAll.timelines.daily[0].values.cloudCoverAvg.toFixed()}%</p>
                        </div>
                        <div className="content">
                            <Routes>
                                <Route path="/" exact />
                                <Route path="/today" element={<Today
                                    temp={dataAll.timelines.daily[0].values.temperatureApparentAvg.toFixed()}
                                    status={dataAll.timelines.daily[0].values.windGustAvg}
                                    humidity={dataAll.timelines.daily[0].values.humidityAvg.toFixed()}
                                    visibility={dataAll.timelines.daily[0].values.visibilityAvg}
                                    pressure={dataAll.timelines.daily[0].values.pressureSurfaceLevelAvg.toFixed()}
                                    uv={dataAll.timelines.daily[0].values.uvIndexAvg}
                                />} exact />
                                <Route path="/week" element={<Week dataWeek={dataWeek} />} exact />
                                <Route path="/week/:id" element={<DetailsWeek dataWeek={dataWeek} />} exact />
                                <Route path="/hour" element={<Hour/>} exact />
                            </Routes>
                        </div>
                    </div>
                }

            </div>
        </div>

    </div>
);
}

export default Home;
    // setData({
    //     ...data,
    //     name:res.data.city_name ,
    //     temp:res.data.data[0].temp.toFixed(),
    //     uv:res.data.data[0].uv,
    //     humidity:res.data.data[0].rh,
    //     visibility:res.data.data[0].vis,
    //     pressure:res.data.data[0].pres,
    //     status:res.data.data[0].wind_spd,
    //     low_temp:res.data.data[0].low_temp,
    //     high_temp:res.data.data[0].high_temp,
    //     description:res.data.data[0].weather.description,
    //     clouds:res.data.data[0].clouds,
    //     datetime:res.data.data[0].datetime,
    //     dataAll:res.data[0].dataAll.data
    // })