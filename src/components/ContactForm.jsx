import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://forms.yandex.ru/_static/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Link
                to="/"
                className="text-gray hover:text-white transition-all font-semibold"
              >
                <span>←</span>
              </Link>
              <h1 className="text-5xl font-semibold text-white">отправить релиз на дистрибуцию</h1>
            </div>
            <p className="text-gray-400 text-lg">чтобы отправить релиз к нам, пожалуйста, заполните эту форму</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex justify-center">
              <iframe
                src="https://forms.yandex.ru/cloud/6955d3b11f1eb5203adfeaf9?iframe=1"
                frameBorder="0"
                name="ya-form-6955d3b11f1eb5203adfeaf9"
                width="100%"
                height="600"
                style={{
                  border: 'none',
                  maxWidth: '650px',
                  minHeight: '400px'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default ContactForm;