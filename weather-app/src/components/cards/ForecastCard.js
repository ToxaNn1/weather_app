import React, { useEffect, useState } from "react";
// router
import { useNavigate } from "react-router-dom";
//redux
import { asyncGetForecast } from "../../store/asyncAction/asyncGetForecast";
import { asyncgetTomorrow } from "../../store/asyncAction/asyncGetTomorrow";
import { asyncGetYesterday } from "../../store/asyncAction/asyncGetYesterday";
import { useDispatch, useSelector } from "react-redux";
//loader
import Loader from "../UI/loader/Loader";
// utilitis
import { getYesterday } from "../../utility/utility";

const ForecastCard = ({ cityName, activeTab }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        whatDayForecast(cityName);
        setLoading(true);
    }, [loading]);

    const forecast = useSelector((state) => state.forecast.forecast);

    const whatDayForecast = () => {
        let keys = Object.keys(activeTab);
        let [key] = keys.filter((item) => activeTab[item]);
        switch (key) {
            case "second":
                dispatch(asyncGetForecast(cityName.name)); // today
                break;
            case "third":
                dispatch(asyncgetTomorrow(cityName.name));
                break;
            case "forth":
                dispatch(asyncGetYesterday(cityName.name, getYesterday()));
                break;
            default:
                alert("error");
                navigate("/");
        }
    };

    const every3hour = forecast[0]?.hour.filter((hour, index) => index % 3 === 0); //return array with hours , where gap 3 hour
    // // тут я вибираю масив обектів де тільки години від 0 до 24

    if (!loading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col">
            <div>{/* <p>{every3hour[0]?.time?.substring(0, 10)}</p> */}</div>
            <table className="flex  border-solid border-2 gap-2 border-slate-100 p-5 rounded-xl ">
                <thead className="border-solid border-2 gap-2 border-slate-100 p-5 rounded-xl">
                    <tr className="flex flex-col gap-4 items-start justify-between tr-head">
                        <th className=" w-full p-2">Hour</th>
                        <th className="w-full p-8">Status</th>
                        <th className=" w-full p-2">Temperature</th>
                        <th className=" w-full p-2">Feels like</th>
                    </tr>
                </thead>
                <tbody className="flex border-solid border-2 gap-2 border-slate-100 p-5 rounded-xl  ">
                    {every3hour?.map((hours, index) => {
                        return (
                            <tr
                                key={index}
                                className="flex flex-col justify-between items-center hover:border-2 rounded-xl "
                            >
                                <td className="w-full p-2 ">{hours.time.substring(10)}</td>
                                <td className="w-full p-2">
                                    <img src={hours.condition.icon} />
                                    <p>{hours.condition.text}</p>
                                </td>
                                <td className="w-full p-2"> {hours.temp_c}</td>
                                <td className="w-full p-2">{hours.feelslike_c}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ForecastCard;
