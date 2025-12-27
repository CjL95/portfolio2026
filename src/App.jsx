import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/Header.jsx'
import { Footer } from './components/footer/Footer.jsx'
//import {ReactComponent as HeroJag} from './assets/heroJag.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="container main">
        <section className="hero row">
          <figure className="profilePic col-6">
            <img src="./src/assets/250-250.png" />
          </figure>
          <div className="heroTxt col-6">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam nobis perferendis amet, ullam mollitia sit perspiciatis? Quibusdam eos rem rerum nam iste reprehenderit aliquam, totam eius odio quisquam enim!</h1>
          </div>
        </section>
        <section className="handwrittenCaption">
          <span className="handwrittenCaption"></span>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
