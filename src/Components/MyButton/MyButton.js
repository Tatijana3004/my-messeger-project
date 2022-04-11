export const MyButton = ({ text, onClick, children }) => {
    return (
        <div role="button" onClick={onClick}>
            {children}
        </div>
    );
};