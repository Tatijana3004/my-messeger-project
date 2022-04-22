import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../Components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const prevName = usePrev(name);
    console.log(prevName);

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

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

