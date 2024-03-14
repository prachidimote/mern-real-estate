import { GoogleAuthProvider, getAuth, signInWithPopup } from '@firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
const OAuth = () => {
  const dispatch = useDispatch();
    //this function is asynchronous because we have to wait till google to respond to us
    const handleGoogleClick = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const res = await fetch("/api/auth/google", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
            });
            const data = await res.json();
            console.log(data);
            dispatch(signInSuccess(data));
        }catch (error) {
            console.log("could not sign in with google", error)
        }

    }
  return (
    <button 
    onClick={handleGoogleClick}
    type="button"
    className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95">
    Continue With Google</button>
  )
}

export default OAuth