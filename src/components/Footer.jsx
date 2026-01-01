import React from 'react'
import { footerLinks } from '../constants/index.js'
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            юридическая информация: {' '}
            <span>
            ИП {' '}
            </span>
            <span>
            ИНН
            </span>{' '}
            ОГРНИП
          </p>
          <p className="font-semibold text-gray text-xs">
            по вопросам DMCA, сотрудничества и так далее: music@akaplus.ru
          </p>
          <p className="font-semibold text-gray text-xs">
            по вопросам модерации: sloykasvishney@akaplus.ru
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">2026 akaplus.ru</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray text-xs hover:text-white transition-colors"
              >
                {link.label}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer