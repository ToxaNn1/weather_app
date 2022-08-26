import React, { useState, useEffect } from "react";
// router
import { useLocation } from "react-router-dom";
// ui
import Card from "../components/cards/Card";
import ForecastCard from "../components/cards/ForecastCard";
import Tabs from "../components/UI/Tabs";
//redux
import { createrAuth } from "../store/reducer/reducerAuth";
import { useDispatch, useSelector } from "react-redux";
// hooks
import useAuth from "../hooks/useAuth";

const FullInfoPage = () => {
    const [isFromFullPage, setFromPage] = useState(true);
    const location = useLocation(); // data about city name , in location.state.location
    // tabs
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth);
    const [result, id] = useAuth();

    useEffect(() => {
        dispatch(createrAuth(id)); // pass id , if id !== null or undef return true
    }, [dispatch]);

    const [activeTab, setActiveTab] = useState({
        first: true,
        second: false,
        third: false,
        forth: false,
    });

    const clickFitstTab = () => {
        // if active, second and third tabs not select
        setActiveTab({ first: true, second: false, third: false, forth: false });
    };
    const clickSecondtTab = () => {
        // if active, first and third tabs not select
        setActiveTab({ first: false, second: true, third: false, forth: false });
    };
    const clickThirdTab = () => {
        // if active, first and third tabs not select
        setActiveTab({ first: false, second: false, third: true, forth: false });
    };
    const clickFourthTab = () => {
        // if active, first and third tabs not select
        setActiveTab({ first: false, second: false, third: false, forth: true });
    };

    //  isFromFullPage показує чи карточка рендериться на fullInfoPage чи на NoAuthPage
    return (
        <>
            {/* show only clicked tab */}
            <Tabs
                activeTab={activeTab}
                clickFitstTab={clickFitstTab}
                clickSecondtTab={clickSecondtTab}
                clickThirdTab={clickThirdTab}
                clickFourthTab={clickFourthTab}
            ></Tabs>

            {activeTab.first ? (
                <Card
                    auth={auth}
                    isFromFullPage={isFromFullPage}
                    location={location.state.location}
                    current={location.state.current}
                />
            ) : null}
            {/* location.state.location = city.name */}
            {activeTab.second ? (
                <ForecastCard activeTab={activeTab} cityName={location.state.location} />
            ) : null}
            {activeTab.third ? (
                <ForecastCard activeTab={activeTab} cityName={location.state.location} />
            ) : null}
            {activeTab.forth ? (
                <ForecastCard activeTab={activeTab} cityName={location.state.location} />
            ) : null}
        </>
    );
};

export default FullInfoPage;
