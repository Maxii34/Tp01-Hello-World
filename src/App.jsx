
import './App.css'
import Tp1_Helloworld from './components/Tp1_helloworld'
import Tp2_Helloworld from './components/Tp2_Helloworld'
import Tp3_helloworld from './components/Tp3_helloworld'

function App() {

  return (
    <main className='container text-center my-5'>
      <Tp1_Helloworld />
      <Tp2_Helloworld saludo="My friend" />
      <Tp3_helloworld saludo="My friend" />
      
    </main>
  )
}

export default App
