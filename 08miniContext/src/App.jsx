
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
     <h1 className='bg-red-600 text-center p-4 text-white'>Context Api</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
