'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Star, Heart, Instagram, MessageCircle, Globe } from 'lucide-react'

export default function Home() {
  const [lang, setLang] = useState('ru')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = {
    ru: {
      nav: ['Главная', 'О тренере', 'Онлайн-занятия', 'Арт Асана', 'Контакты'],
      heroTitle: 'Йога & Искусство\nс Аленой',
      heroSubtitle: '10 лет опыта • Индивидуальный подход • Остров Бали',
      heroDesc: 'Трансформируйте тело и душу через практику йоги и творчества',
      cta1: 'Онлайн-занятия',
      cta2: 'Арт Асана',
      aboutTitle: 'Привет, меня зовут Алена',
      aboutText: 'Уже 10 лет я помогаю женщинам обрести гармонию через йогу. Моя философия — соединение древних практик с современным пониманием тела и души.',
      programsTitle: 'Программы обучения',
      basicTitle: 'Базовый',
      basicPrice: '2,500₽/месяц',
      basicFeatures: ['Групповые онлайн-классы', '4 занятия в неделю', 'Библиотека медитаций', 'Чат поддержки'],
      premiumTitle: 'Премиум',
      premiumPrice: '6,500₽/месяц',
      premiumFeatures: ['Индивидуальные сессии', 'Безлимитный доступ', 'Персональный план', 'Арт-терапия сессии'],
      artAsanaTitle: 'Арт Асана на Бали',
      artAsanaText: 'Уникальный retreat, где йога встречается с искусством в мистическом пространстве Red Tent',
      testimonialsTitle: 'Отзывы учениц',
      footerText: '© 2024 Алена Йога. Остров Бали, Ноану Креатив Сити'
    },
    en: {
      nav: ['Home', 'About Teacher', 'Online Classes', 'Art Asana', 'Contacts'],
      heroTitle: 'Yoga & Art\nwith Alena',
      heroSubtitle: '10 years experience • Personal approach • Bali Island',
      heroDesc: 'Transform body and soul through yoga practice and creativity',
      cta1: 'Online Classes',
      cta2: 'Art Asana',
      aboutTitle: 'Hi, I\'m Alena',
      aboutText: 'For 10 years I have been helping women find harmony through yoga. My philosophy is connecting ancient practices with modern understanding of body and soul.',
      programsTitle: 'Learning Programs',
      basicTitle: 'Basic',
      basicPrice: '$35/month',
      basicFeatures: ['Group online classes', '4 classes per week', 'Meditation library', 'Support chat'],
      premiumTitle: 'Premium',
      premiumPrice: '$90/month',
      premiumFeatures: ['Individual sessions', 'Unlimited access', 'Personal plan', 'Art therapy sessions'],
      artAsanaTitle: 'Art Asana in Bali',
      artAsanaText: 'Unique retreat where yoga meets art in the mystical Red Tent space',
      testimonialsTitle: 'Student Reviews',
      footerText: '© 2024 Alena Yoga. Bali Island, Noanau Creative City'
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🧘‍♀️</div>
            <span className="font-playfair text-xl text-text-brown font-semibold">Алена</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {t[lang].nav.map((item, i) => (
              <Link key={i} href={i === 0 ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-text-brown hover:text-soft-pink transition-colors">{item}</Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} 
                    className="flex items-center space-x-1 text-text-brown hover:text-soft-pink transition-colors">
              <Globe size={16} />
              <span className="text-sm uppercase">{lang}</span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-text-brown"></div>
                <div className="w-6 h-0.5 bg-text-brown"></div>
                <div className="w-6 h-0.5 bg-text-brown"></div>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full hero-video">
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a6d1c6&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-light-peach/60 to-soft-pink/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
                     className="font-playfair text-6xl md:text-8xl font-bold text-text-brown mb-6 whitespace-pre-line leading-tight">
            {t[lang].heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl font-light mb-4 text-text-brown/80">
            {t[lang].heroSubtitle}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="text-lg mb-12 text-text-brown/70 max-w-2xl mx-auto">
            {t[lang].heroDesc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                      className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-soft bg-soft-pink text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-soft-pink/90 flex items-center justify-center space-x-2">
              <span>{t[lang].cta1}</span>
              <ChevronRight size={20} />
            </button>
            <button className="btn-soft bg-gradient-to-r from-lavender to-gold text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center space-x-2">
              <span>{t[lang].cta2}</span>
              <Heart size={20} />
            </button>
          </motion.div>
        </div>
        
        {/* Floating watercolor elements */}
        <div className="absolute top-20 left-10 w-32 h-32 watercolor-bg animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 watercolor-bg animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 watercolor-stroke animate-watercolor opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 watercolor-stroke animate-watercolor opacity-15" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="relative">
              <div className="relative w-96 h-96 mx-auto">
                <Image src="https://lh3.googleusercontent.com/drive-storage/AJQWtBPtpcUxDFOw5hG0GOEd7lwrVs2lTRDnoZKAxU6zrKxbDttIX6rVC170CPeocmIpAEuUZebOkfQVnwsX94o2ujlpWw486psTYB6-5Yr1enHFiXG0sw=s220" 
                       alt="Alena yoga instructor" fill className="object-cover rounded-full shadow-2xl" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-soft-pink/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-lavender/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="space-y-8">
              <h2 className="font-playfair text-5xl font-bold text-text-brown">{t[lang].aboutTitle}</h2>
              <p className="text-lg leading-relaxed text-text-brown/80">{t[lang].aboutText}</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-soft-pink mb-2">500+</div>
                  <div className="text-text-brown/70">Учениц</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lavender mb-2">10</div>
                  <div className="text-text-brown/70">Лет опыта</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-gradient-to-br from-light-peach/30 to-cream relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="text-center mb-20">
            <h2 className="font-playfair text-6xl font-bold text-text-brown mb-6">{t[lang].programsTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-soft-pink to-lavender mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Basic Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="card-float bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft-pink/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-text-brown mb-2">{t[lang].basicTitle}</h3>
                  <div className="text-4xl font-bold text-soft-pink mb-4">{t[lang].basicPrice}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {t[lang].basicFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Star className="text-soft-pink" size={16} fill="currentColor" />
                      <span className="text-text-brown/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-soft bg-soft-pink text-white py-4 rounded-full font-medium">
                  Выбрать план
                </button>
              </div>
            </motion.div>
            
            {/* Premium Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="card-float bg-gradient-to-br from-lavender/20 to-gold/20 rounded-3xl p-8 shadow-xl relative overflow-hidden border-2 border-gold/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white px-6 py-2 rounded-full text-sm font-medium">
                Популярный
              </div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-text-brown mb-2">{t[lang].premiumTitle}</h3>
                  <div className="text-4xl font-bold text-gold mb-4">{t[lang].premiumPrice}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {t[lang].premiumFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Star className="text-gold" size={16} fill="currentColor" />
                      <span className="text-text-brown/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-soft bg-gradient-to-r from-lavender to-gold text-white py-4 rounded-full font-medium">
                  Выбрать план
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Art Asana Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 parallax">
          <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" 
                 alt="Bali sunset" fill className="object-cover" style={{ transform: 'translateZ(-1px) scale(2)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-text-brown/80 via-text-brown/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="text-white space-y-8">
              <h2 className="font-playfair text-6xl font-bold">{t[lang].artAsanaTitle}</h2>
              <p className="text-xl leading-relaxed opacity-90">{t[lang].artAsanaText}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7 дней</div>
                  <div className="text-sm opacity-80">Интенсив</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Red Tent</div>
                  <div className="text-sm opacity-80">Пространство</div>
                </div>
              </div>
              <Link href="/art-asana" className="inline-block btn-soft bg-gradient-to-r from-soft-pink to-gold text-white px-8 py-4 rounded-full font-medium">
                Узнать больше
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4">
              <Image src="https://lh3.googleusercontent.com/drive-storage/AJQWtBMIC7UzciC3rPWonuY_sH9_gnrYrPdP3cWgb2dAAidGKUvc5OSLD6pdWX0feUry1q2-sgrKxW5RfnoUxBcxXor9KucGocQIZetbtAoLEYrosXEPXg=s220" 
                     alt="Art Asana" width={200} height={250} className="rounded-2xl shadow-lg object-cover" />
              <div className="space-y-4">
                <Image src="https://lh3.googleusercontent.com/drive-storage/AJQWtBO4ACGqJKKSJBkOf1RjTIGISHQir1Ydzp8eYWhP8K-UV7sFZ0o35Zog5jAUmbn0vYI3o0m8flIzsmSak5h8ogP7RaWBAZApc4k3t8ORknhjXapNpA=s220" 
                       alt="Yoga retreat" width={200} height={120} className="rounded-2xl shadow-lg object-cover" />
                <Image src="https://lh3.googleusercontent.com/drive-storage/AJQWtBMFWvSR2MSqQW1mGByu06_v_Tf-oFqjpQ6l8mLHe4Y8KrTNUQw86q59H6Q1uGJlETH-0O6pJIX2lyR3CkyGqSDB5lA5WOpF6hZUDYWbJg06ypgG6g=s220" 
                       alt="Meditation space" width={200} height={120} className="rounded-2xl shadow-lg object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-soft-pink/10 via-cream to-lavender/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                     className="font-playfair text-6xl font-bold text-center text-text-brown mb-20">
            {t[lang].testimonialsTitle}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Мария', text: 'Алена изменила мое отношение к себе и своему телу. Каждое занятие - это медитация и исцеление.' },
              { name: 'Елена', text: 'Арт Асана открыла во мне творческое начало. Теперь я не только практикую йогу, но и рисую!' },
              { name: 'Анна', text: 'Онлайн-занятия с Аленой помогли мне сохранить практику даже в самые загруженные периоды жизни.' }
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ delay: i * 0.2 }}
                          className="card-float bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-gold" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-text-brown/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-medium text-text-brown">— {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-3xl">🧘‍♀️</div>
                <span className="font-playfair text-2xl font-semibold">Алена</span>
              </div>
              <p className="text-white/80 mb-6">Трансформация через йогу и искусство на острове Бали</p>
              <div className="flex space-x-4">
                <Instagram className="text-soft-pink hover:text-white cursor-pointer" size={24} />
                <MessageCircle className="text-soft-pink hover:text-white cursor-pointer" size={24} />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                {t[lang].nav.map((item, i) => (
                  <li key={i}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>Бали, Ноану Креатив Сити</p>
                <p>WhatsApp: +62 xxx xxx xxx</p>
                <p>Instagram: @alena_yoga_bali</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>{t[lang].footerText}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}