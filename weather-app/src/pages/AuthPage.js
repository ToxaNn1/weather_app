import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { asyncAddCity } from "../store/asyncAction/asyncStart";
import { createrAuth } from "../store/reducer/reducerAuth";
import { createrQuery } from "../store/reducer/reducerMain";
// ui
import useAuth from "../hooks/useAuth";
import Loader from "../components/UI/loader/Loader";
import Card from "../components/cards/Card";

const AuthPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [result, id] = useAuth();

    const auth = useSelector((state) => state.auth.auth);
    const allCities = useSelector((state) => state.auth.authCities);
    const query = useSelector((state) => state.main.query); //return input value

    useEffect(() => {
        dispatch(createrQuery()); //return input value
        dispatch(createrAuth(result)); // auth in system
        setLoading(true);
    }, [dispatch, result]);

    useEffect(() => {
        if (query.length > 0) {
            // api async func , which retrun city forecast from server
            dispatch(asyncAddCity(query));
        }
        setLoading(true);
        return () => {
            dispatch(createrQuery()); // clear input , because if dont clear input card will be render twice
        };
    }, [query, dispatch]); //workd only after click button

    if (!loading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-wrap gap-2  cursor-pointer justify-around">
            {/* {user // show cards only if user auth in system */}
            {auth
                ? allCities?.map((item, index) => {
                      let randomNumberId = Math.round(Math.random() * 1000);
                      return (
                          <Card
                              userId={id}
                              auth={auth}
                              id={randomNumberId}
                              location={item.location}
                              key={randomNumberId}
                              current={item.current}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default AuthPage;
