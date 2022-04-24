import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../Components/Form/Form";
import { initProfileTrack, setNameFB, setShowName, stopProfileTrack }
    from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => { dispatch(setShowName(!showName)); };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, []);

    return (
        <>
            <h3>This is Profile {showName && <span>{name}</span>}</h3>
            <button onClick={onLogout}>LOGOUT</button>
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />

            <div>
                <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                <label for="checkbox">change show name</label>
            </div>
        </>
    );
};

