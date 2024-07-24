
import './App.scss'
import Mainlayout from './layout/Mainlayout'
import Navlinkmenu from './layout/Navlinkmenu'
import Routes from './routes'


function App() {
  return (
    <Mainlayout body={
      <Routes
        header={<Navlinkmenu />} 
      />} 
    />
  )
}

export default App
