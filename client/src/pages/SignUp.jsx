import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form className="flex flex-col gap-4">
      <input 
      type="text" 
      placeholder="username" 
      className="border p-3 rounded-lg" 
      id="username" />
       <input 
      type="email" 
      placeholder="email" 
      className="border p-3 rounded-lg" 
      id="email" />
       <input 
      type="password" 
      placeholder="password" 
      className="border p-3 rounded-lg" 
      id="password" />
      <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80 disabled:opacity-50">Sign Up</button>
    </form>
    <div className="flex gap-4 mt-5">
      <p>Have an account?</p>
      <Link to={'/sign-in'} >
        <span className="text-blue-700">Sign In</span>
      </Link>
    </div>
    </div>
  )
}

export default SignUp