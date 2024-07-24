import { Route, Routes, } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";

import Today from "./today";
import Hour from "./hour";
import axios from "axios";
import DetailsWeek from "./detail";

import Week from "./week";

function Home() {

    const [dataAll, setData] = useState([]);
    const [dataWeek, setDataWeek] = useState([]);
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({status: ''});

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const location = `location=${city}`
    const weatherUrl = `https://api.tomorrow.io/v4/weather/forecast?${location}&apikey=${apiKey}`;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (city === "") {
            window.alert("Bạn chưa nhập City muốn tìm")
        }

        async function fetchData() {
            const response = await axios.get(weatherUrl);
            const datares = response.data;
            const dataWeekres = response.data.timelines.daily;

            let imgPath = '';

            const temp = response
                .data
                .timelines
                .daily[0]
                .values
                .temperatureApparentAvg;
            const imgPathMap = {
                ">=35": "src/assets/nang.png",
                ">=28": "src/assets/nang_may.png",
                ">=22": "src/assets/mua.png",
                ">=12": "src/assets/tuyet.png",
                "<=12": "src/assets/react.svg"
            };
            for (const range in imgPathMap) {
                const rangeValue = parseFloat(range.substring(1));
                if (temp >= rangeValue) {
                    imgPath = imgPathMap[range];
                    break;
                }
            }

            setStatus({
                ...status,
                status: imgPath
            })
            setData(datares);
            setDataWeek(dataWeekres);
            setLoading(true)
            console.log("step 1", dataAll)
            console.log("step 1", dataWeek)
            console.log(status)
            setCity("")
        }

        fetchData();
    }

    return (
        <>
            <form className="search" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={city}
                    placeholder="Enter City Name"
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit" className="btn btn-rounded bg-slate-4">
                    <Icon icon="material-symbols:search" color="#dac" width="30" height="30"/>
                </button>
            </form>
            {
                loading && <div>
                        <div className="info">
                            <img src={status.status} width="170px" height="170px"/>
                            <h2>{dataAll.location.name}</h2>
                            <h1>{
                                    dataAll
                                        .timelines
                                        .daily[0]
                                        .values
                                        .temperatureApparentAvg
                                        .toFixed()
                                }°C</h1>
                            <h3>Today, {
                                    dataAll
                                        .timelines
                                        .daily[0]
                                        .time
                                        .replace('T00:00:00Z', '')
                                }</h3>
                            <p>{dataAll.location.type}</p>
                            <p>Clouds {
                                    dataAll
                                        .timelines
                                        .daily[0]
                                        .values
                                        .cloudCoverAvg
                                        .toFixed()
                                }%</p>
                        </div>
                        <div className="content">
                            <Routes>
                                <Route path="/" exact="exact"/>
                                <Route
                                    path="/today"
                                    element={<Today
                                    temp = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .temperatureApparentAvg
                                            .toFixed()
                                    }
                                    status = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .windGustAvg
                                    }
                                    humidity = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .humidityAvg
                                            .toFixed()
                                    }
                                    visibility = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .visibilityAvg
                                    }
                                    pressure = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .pressureSurfaceLevelAvg
                                            .toFixed()
                                    }
                                    uv = {
                                        dataAll
                                            .timelines
                                            .daily[0]
                                            .values
                                            .uvIndexAvg
                                    }
                                    />}
                                    exact="exact"/>
                                <Route
                                    path="/week"
                                    element={<Week dataWeek = {
                                        dataWeek
                                    } />}
                                    exact="exact"/>
                                <Route
                                    path="/week/:id"
                                    element={<DetailsWeek dataWeek = {
                                        dataWeek
                                    } />}
                                    exact="exact"/>
                                <Route path="/hour" element={<Hour/>} exact="exact"/>
                            </Routes>
                        </div>
                    </div>
            }
        </>
    );
}

export default Home;