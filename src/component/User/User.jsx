import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;
    const navigate=useNavigate();
    const handleShowDetails = () => {
        navigate(`/user/${id}`);
    };
    return (
        <div>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>show Details</button>
        </div>
    );
};

export default User;