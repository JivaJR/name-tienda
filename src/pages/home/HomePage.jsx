import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <>
      <div className='text-black'>HomePage</div>
      <Link to="/login">Login</Link>
    </>
  )
}
