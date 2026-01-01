import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations.js';
import gsap from 'gsap';
const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })
    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">ниже - про нас ❤️</h1>
        </div>
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">лейбл от артистов для артистов</h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">akaplus records</h2>
          </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    akaplus - {' '}
                    <span className="text-white">
                      один из первых в России музыкальный лейбл с абсолютно бесплатной дистрибуцией.
                    </span>
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    мы не забираем права на музыку, абсолютно все права остаются у артиста. {' '}
                    <span className="text-white">
                      мы лишь выполняем всю работу за артиста, чтобы вы смог сконцентрироватьсчя на творчестве.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}
export default Features