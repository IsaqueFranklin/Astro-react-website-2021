import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Se inscreva na nossa Astro newsletter para receber nossas notícias.
                </p>
                <p className='footer-subscription-text'>
                    Você pode se desinscrever a qualquer hora.
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Inscrever</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nós</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Testemunhos</Link>
            <Link to='/'>Carreiras</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos de uso</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Nos Contate</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Parcerias</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Vídeos</h2>
            <Link to='/'>Enviar vídeos</Link>
            <Link to='/'>Embaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
          <div className='social-media-wrap'>
              <div className='footer-logo'>
                  <Link className='social-logo'>
                      ASTRO <i className='fab fa-typo3' />
                  </Link>
              </div>
              <small className='website-rights'>ASTRO copy& 2021</small>
              <div className='social-icons'>
              <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
              </div>
          </div>
      </section>
        </div>
    )
}

export default Footer
