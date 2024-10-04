import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <p>page not found</p>
                    <p>go back home</p>
                    <Link to='/'>Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;