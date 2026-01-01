import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">akaplus</p>
        <div className="md:w-10/12 w-9/12">
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="https://vk.com/akaplus" className="btn">наше сообщество вк</a>
        <p className="font-normal text-xl">листайте ниже 👇</p>
      </div>
    </section>
  )
}
export default Hero