import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../Components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";

// Использованы хуки
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
    }
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

// Использован коннект
// export const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//     const handleClick = () => {
//         changeCheckbox();
//     };

//     const handleSubmit = (text) => {
//         changeName(text);
//     };
//     return (
//         <>
//             <h3>This is Profile
//                 {showName && <span>{name}</span>}
//             </h3>
//             <Form onSubmit={handleSubmit} />

//             <div>
//                 <input type="checkbox" id="checkbox" onClick={handleClick}></input>
//                 <label for="checkbox">change show name</label>
//             </div>
//         </>
//     );
// };

// const mapStateToProps = state => ({
//     name: state.profile.name,
//     showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//     changeName: setName,
//     changeCheckbox: () => toggleCheckbox,
// }

// export default Profile = connect(
//     mapStateToProps, mapDispatchToProps
// )
//     (ProfileToConnect);