import React, { useEffect, useState } from "react";
// dispatch
import { useDispatch, useSelector } from "react-redux";
import { createrQuery, createrDelCityNoAuth } from "../store/reducer/reducerNoAuth";
// api
import { asyncNoAuthAddCity } from "../store/asyncAction/asyncNoAuthStart";
// ui
import Card from "../components/cards/Card";
import Loader from "../components/UI/loader/Loader";

const NoAuthPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); //loader 

    const query = useSelector((state) => state.main.query); //return input value
    const citiesNoAuth = useSelector((state) => state.noAuth.noAuthCities); //return cities , which user searched

    useEffect(() => {
        dispatch(createrQuery()); //return input value
        setLoading(true);
    }, [query,dispatch]);

    useEffect(() => {
        if (query.length > 0) {
            dispatch(asyncNoAuthAddCity(query));
            // api async func , which retrun city forecast from server
        }
        setLoading(true)
    }, [query,dispatch]); // work after click button search

    if (!loading) {
        return <Loader></Loader>;
    }

    const randNumForKey = () => { //for key
        return Math.round(Math.random() * 1000000);
    };

    const deleteCard = (location) => { //delete card
        dispatch(createrDelCityNoAuth(location));
    };

    return (
        <div className="flex flex-wrap">
            {citiesNoAuth.map((city) => {
                return (
                    <Card
                        deleteCard={deleteCard}
                        key={randNumForKey()}
                        current={city.current}
                        location={city.location}
                    />
                );
            })}
        </div>
    );
};

export default NoAuthPage;
