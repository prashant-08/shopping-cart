import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header color="light" light={true} expand="md" container="md"/>     
    <div>Some content</div>
    <Footer />
    </>
  )
}

export default App
