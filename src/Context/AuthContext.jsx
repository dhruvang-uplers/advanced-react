import { Component, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default class AuthContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: null,
            user: null
        }
    }

    setAuth = (token, user) => {
        this.setState({ token, user })
    }

    googleLogin = () => {
        signInWithPopup(auth, provider)
        // .then(result => {
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     const user = result.user;
        //     console.log({ token, user })
        //     this.props.navigate('/dashboard');
        //     // document.cookie = `access_token=${token};max-age=604800;domain=champ.me`
        // }).catch(error => {
        //     return { error }
        //     console.log({ error });
        // })
    }

    checkLogin = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { accessToken } = auth.currentUser
                document.cookie = `accessToken=${accessToken};max-age=604800;domain=champ.me`
            } else {
                this.props.navigate('/login');
            }
        });
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, googleLogin: this.googleLogin, setAuth: this.setAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}