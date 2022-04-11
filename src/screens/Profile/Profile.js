import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    return (
        <>
            <h3>This is Profile {state.showName && <span>{state.name}</span>}</h3>

            <div>
                <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                <label for="checkbox">change show name</label>
            </div>
        </>
    );
};