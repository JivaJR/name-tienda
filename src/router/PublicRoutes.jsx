import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { HomePage } from '../pages/home/HomePage'
import { MainLayout } from '../layout/MainLayout'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
      </Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/*' element={<Navigate to='./'/>}/>

    </Routes>
  )
}
