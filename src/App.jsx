
import './App.scss'
import Mainlayout from './layout/Mainlayout'
import Navlinkmenu from './layout/Navlinkmenu'
import Routes from './routes'

// authentication


function App() {
  return (
    // authentication success
    <Mainlayout body={
      <Routes
        header={<Navlinkmenu />} 
      />} 
    />

    // authentication fail or was login
    // layout component của authentication
  )
}

export default App
