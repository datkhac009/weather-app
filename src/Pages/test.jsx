import { useEffect, useState } from "react";
import axios from "axios";

function test() {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city == "") {
            console.log("chưa có data city")
        }
        async function fetchData() {
            const response = await axios.get(
                `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=OLM0ZsHhxoQmLzIGEi9Acrqo3Rywe2RE`
            );
            const data = response.data;
            console.log("step 1", data)
            setData(data);
            window.confirm("Bạn đã thử chưa")
        }
        fetchData();
        console.log("step 2")
    }

    console.log(data, "step 3")
    return (
        <div>
            <h1>Hello</h1>
            {console.log("step 4")}
            <form className="search" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Enter City Name"
                    onChange={(e) => setCity(e.target.value)}/>
                <button type="submit"><img src="/src/assets/travits.png" alt="IMG"/></button>
            </form>
            {/* {
                data.map((value, idx) => {
                    return <div key={idx}>
                    <h2>Date time:{value.datetime}</h2>
                    <p>Temp:{value.app_max_temp}</p>

                    </div>
                })
            } */
            }

        </div>
    );
}

export default test;