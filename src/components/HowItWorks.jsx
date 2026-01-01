import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations.js';
const HowItWorks = () => {
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            дистрибуция всего за 3-4 дня
            <br /> распределение роялти - 80/20 в пользу артиста
          </h2>
          <p className="hiw-subtitle">
            революция в сфере музыкальной дистрибуции
          </p>
        </div>
          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    мы сотрудничаем более чем со 120 музыкальными платформами: {' '}
                    <span className="text-white">
                      Яндекс Музыка, VK Music, Spotify, Apple Music, Deezer, YouTube Music и многими другими
                    </span>.
                  </p>
                </div>
              </div>
            </div>
    </section>
  )
}
export default HowItWorks