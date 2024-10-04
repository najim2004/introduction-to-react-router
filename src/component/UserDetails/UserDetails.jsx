import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, phone } = user;
    const navigate = useNavigate();
    const handleGoBack =() => {
        navigate(-1);
    };
    return (
        <div>
            <h2>name: {name}</h2>
            <h2>name: {email}</h2>
            <h2>name: {phone}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;