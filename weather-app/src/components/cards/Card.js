import React from "react";
// routre
import { useNavigate } from "react-router-dom";
// custom hook
import useHover from "../../hooks/useHover";
// redux
import { useDispatch } from "react-redux";
import { createrDeleteCity } from "../../store/reducer/reducerAuth";

const Card = ({ current, location, deleteCard, isFromFullPage, auth, userId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hoverRef, isHovered] = useHover();
    // isFromFullPAge - це стайте який приходить від сторінки куда нас редіректить, він тру по замовчуванні
    // якщо він є значить не буде ховер ефекта і кнопки видалити

    const deleteFromFav = (location) => {
        dispatch(createrDeleteCity(location));
    };

    const navigateFunc = () => {
        // при кліку на кнопку показати, буде редірект в залежності від того чи ввійшов
        // юзер чи ні, + до того на сторінку куда перекидає , сразу перекидаються дані про вибрану карточку
        if (auth) {
            navigate(`/main/user/${userId}/${location.name}`, { state: { current, location } });
        } else {
            navigate(`/${location.name}`, { state: { current, location } });
        }
    };

    return (
        <div
            ref={hoverRef} // custom hook
            className="flex flex-col justify-between  border-solid border-2 gap-2 border-slate-100 p-5 rounded-xl"
        >
            <div>
                <div>
                    {location.name} , {location.country} , {location.localtime}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <p>{current.condition.text}</p>
                    <p>+{current.temp_c} градуса</p>
                    <p>Відчуття +{current.feelslike_c}</p>
                </div>
                <div>
                    <img src={current.condition.icon} alt="" />
                </div>
                {/* button delete */}
                {!auth && !isFromFullPage ? ( // for no auth user
                    <div>
                        <button className="cursor-pointer border border-slate-600 border-solid p-3 rounded-md" onClick={() => deleteCard(location)}>Delete</button>
                    </div>
                ) : null}
                {auth && !isFromFullPage ? ( // fro auth user
                    <p onClick={() => deleteFromFav(location)}>Delete</p>
                ) : null}
            </div>
            {!isFromFullPage ? (
                <div className="flex text-xl justify-between">
                    {/* // if not active     color: #99968b; */}
                    {isHovered ? <p className="cursor-pointer" onClick={() => navigateFunc()}>Show</p> : null}
                    {/* redirect to fullInfoPage */}
                </div>
            ) : null}
        </div>
    );
};

export default Card;
