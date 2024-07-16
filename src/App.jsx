import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'



const details = data.map((item) => {
    return(
      <Card 
        key = {item.id}
        item = {item}
      />
       
    )

  }
)


export default function App() {
  return(
    <div className='card-main'>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {details}   
      </section>
      

    </div>
  )
}