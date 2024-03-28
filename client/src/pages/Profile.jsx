import { useSelector } from "react-redux"

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="p-2 max-w-lg mx-auto">
    <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>
    <form className="flex flex-col gap-4">
    <img className="mt-5 rounded-full h-24 w-24 object-cover cursor-pointer self-center" src={currentUser.avatar} />
    <input className="border p-3 rounded-lg" id="username" type="text" placeholder="Usernme" />
    <input className="border p-3 rounded-lg" id="email" type="email" placeholder="Email" />
    <input className="border p-3 rounded-lg" id="password" type="password" placeholder="Password" />
    <button className="bg-slate-700 rounded-lg uppercase p-3 text-white hover:opacity-95">Update</button>
    </form>
    <div className="text-red-500 cursor-pointer flex justify-between mt-3">
      <span>Delete Account</span>
      <span>Sign Out</span>
    </div>
    </div>
  )
}

export default Profile