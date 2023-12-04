import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { CheckingAuth } from '../componets/ui/CheckingAuth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout } from '../store/auth/authSlice'
import { FirebaseAuth } from '../firebase/config'

export const AppRouter = () => {
    
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) =>{
            if(!user) return dispatch(logout())
            const { uid, email,displayName,photoURL} = user;
            dispatch(login({ uid, email,displayName,photoURL}))
        })
    }, [])
    
    if(status === 'checking') {
        return <CheckingAuth/>
    }

    return (
        <Routes>
            
                {
                    (status === 'authenticated')
                    ? <Route path='/*' element={<PrivateRoutes/>}/>
                    : <Route path='/*' element={<PublicRoutes/>}/>
                }
        </Routes>
    )
}
