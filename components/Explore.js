import Sidebar from "./Sidebar"

import MainPage from "../components/MainPage"
import User from "./User"

export default function Explore(){
  return(
    <div className="flex w-full h-screen">
      <Sidebar/>
      <MainPage/>
      <User/>
    </div>
  )
}
