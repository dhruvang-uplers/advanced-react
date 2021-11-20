import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { setGoogleAuth } from "./googleAuthSlice"

export default function GoogleAuth() {
    const { isAuthenticated, user } = useSelector(state => state.googleAuth)
    const dispatch = useDispatch()

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const login = () => {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const { email, displayName, accessToken, phoneNumber, photoURL, emailVerified, isAnonymous, uid } = result.user;
            dispatch(setGoogleAuth({ isAuthenticated: true, user: { email, displayName, accessToken, phoneNumber, photoURL, emailVerified, isAnonymous, uid } }))
            document.cookie = `access_token=${token};max-age=604800;domain=champ.me`
        }).catch(error => {
            return { error }
            console.log({ error });
        })
    }
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    } else {
        return (
            <div>
                <h1>Google Auth</h1>
                <button onClick={login}>Login with Google</button>
            </div>
        )
    }
}
