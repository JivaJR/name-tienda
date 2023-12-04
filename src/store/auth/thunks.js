import Swal from "sweetalert2";
import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLoginWithEmailPassword = ({email,password}) => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email,password})
        if (!result.ok) {
            let error = result.errorMessage.split('/')[1].split(')')[0]
            Swal.fire('Error de inicio de sesion',error)
            return(
                dispatch(logout(result.errorMessage))
            );
        }
        dispatch(login(result));
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startLogout = () =>{
    return async( dispatch ) => {
        await logoutFirebase()
        dispatch(logout())
    }
}
