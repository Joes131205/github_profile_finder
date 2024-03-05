import { useLocation } from "react-router-dom";

function NotFound() {
    let location = useLocation();
    return (
        <div>
            <h1 className="text-9xl text-center font-bold mb-10 font-fira_code">
                404
            </h1>
            <h1 className="text-center font-bold">
                {`Error 404 :( (Invalid Route) [Accessing ${location.pathname}]`}
            </h1>
        </div>
    );
}

export default NotFound;
