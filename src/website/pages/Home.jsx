import React from 'react'
import Hero from './Hero'
import Team from './Team'
import About from './About'
import Service from './Service'
import Department from './Department'
import Gallery from './Gallery'
import Contact from './Contact'
import InfiniteSlider from './InfiniteSlider'

export default function Home() {
  return (
    <>
    <Hero/>
    <Department/>
    <About/>
    <Service/>
    <Team/>
    <Gallery/>
    <InfiniteSlider/>
    <Contact/>

    </>
  )
}
