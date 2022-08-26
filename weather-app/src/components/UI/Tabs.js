import React from "react";

const Tabs = ({ activeTab, clickFitstTab, clickSecondtTab, clickThirdTab, clickFourthTab }) => {
    const styleForActiveBtn = "text-slate-500 cursor-pointer";
    const styleForNotActiveBtn = "text-slate-100 cursor-pointer" ;
    return (
        <div className="flex justify-start gap-4 mb-2.5">
            <p
                onClick={() => clickFitstTab()} //change selectTab
                className={activeTab.first ? styleForActiveBtn : styleForNotActiveBtn}
            >
                Current
            </p>
            <p
                onClick={() => clickSecondtTab()} //change selectTab
                className={activeTab.second ? styleForActiveBtn : styleForNotActiveBtn}
            >
                Today
            </p>
            <p
                onClick={() => clickThirdTab()} //change selectTab
                className={activeTab.third ? styleForActiveBtn : styleForNotActiveBtn}
            >
                tommorow
            </p>
            <p
                onClick={() => clickFourthTab()} //change selectTab
                className={activeTab.forth ? styleForActiveBtn : styleForNotActiveBtn}
            >
                yesterday
            </p>
        </div>
    );
};

export default Tabs;
