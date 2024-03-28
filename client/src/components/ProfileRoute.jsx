import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const ProfileRoute = () => {
    const {currentUser} = useSelector((state) => state.user)
  return ( 
    currentUser ? <Outlet /> : <Navigate to='/sign-in' />
  )
}

export default ProfileRoute