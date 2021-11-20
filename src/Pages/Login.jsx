import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
    const { googleLogin, setAuth } = useContext(AuthContext)
    return (
        <div>
            <button type="button" onClick={googleLogin}>Login With Google</button>
        </div>
    )
}
