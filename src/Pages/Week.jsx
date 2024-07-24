import { NavLink, Route, Router, useParams } from "react-router-dom";
import { useState } from "react";

import DetailsWeek from "./detail";

function week (props) {
    const {dataWeek} = props
    console.log(dataWeek)
    const [selectID, setSelectID] = useState()
    const [isState, setIsState] = useState(false)

    const handClickdetails = (id) => {
        console.log("step 1", id);
        setSelectID(id);
        setIsState(true)
    }
    console.log('step 2');
    return (
        <div>
            <div className="week">
                {
                    dataWeek.map((value, idx) => {
                        return <div key={idx} className="nav">
                            <NavLink to={`/week/${idx}`} onClick={() => handClickdetails(idx)}>
                                <p>{
                                        value
                                            .time
                                            .replace('T00:00:00Z', '')
                                    }</p>
                                <p>{
                                        value
                                            .values
                                            .temperatureMin
                                            .toFixed()
                                    }°C-{
                                        value
                                            .values
                                            .temperatureMax
                                            .toFixed()
                                    }°C</p>
                            </NavLink>

                        </div>
                    })
                }
            </div>
            <div>
                {console.log("step 3", selectID)}
                {
                    isState
                        ? <DetailsWeek selectID={selectID} dataWeek={dataWeek}/>
                        : 'Details '
                }
            </div>
        </div>
    );
}

export default week;