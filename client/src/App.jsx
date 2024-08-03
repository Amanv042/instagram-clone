import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Error404 from "./pages/Error404/Error404"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Notification from "./pages/Notification/Notification"
import Explore from "./pages/Explore/Explore"
import Profile from "./pages/Profile/Profile"
import UserDetails from "./pages/Profile/UserDetails/UserDetails"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Error404 />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="profile/user/:userID" element={<Profile />} />
				<Route path="profile/user/:userID/setting" element={<UserDetails />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
