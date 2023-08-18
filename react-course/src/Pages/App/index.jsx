import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
function App() {

  return (
      <div className='bg-red-400'>
        <Home />
        <MyAccount />
        <MyOder />
        <NotFound />
        <SignIn />
      </div>
  )
}

export default App
