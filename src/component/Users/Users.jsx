import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const Users= useLoaderData();
    return (
        <div>
            <h2>Our users : {Users.length}</h2>
            <p>fantastic and vodro users</p>
            {
                Users.map((user, idx)=><User key={idx} user={user}></User>)
            }
        </div>
    );
};

export default Users;