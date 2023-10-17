import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import { useTheme } from "styled-components";
import useTitle from "../useTitle";
const ContactScreen = () => {
  useTitle("Contattaci");
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className='contact-hero container'>
          <div className='contact-hero-text'>
            <div className='contact-hero-title'>
              <h2 className='contact-title'>
                vorresti aggiungere un cocktail?
              </h2>
              <h4 className='contact-subtitle'>
                il nostro team è sempre disponibile per valutare possibili nuove
                ricette e aggiungerle al nostro database
              </h4>
            </div>
          </div>
          <div className='contact-form-container container'>
            <form
              action='https://formspree.io/f/mbjvqpyb'
              method='POST'
              className='contact-form container'>
              <div className='form-group'>
                <label htmlFor='nome'>nome</label>
                <input
                  type='text'
                  id='nome'
                  name='name'
                  className='input'
                  placeholder='Luca'></input>
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='cognome'>cognome</label>
                <input
                  type='text'
                  id='cognome'
                  name='cognome'
                  className='input'
                  placeholder='Rossi'></input>
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='input'
                  placeholder='luca.rossi@esempio'></input>
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='cellulare'>Telefono</label>
                <input
                  type='cell'
                  id='cellulare'
                  name='cellulare'
                  className='input'
                  placeholder='555 555-5555'></input>
                <hr />
              </div>
              <div className='form-group'>
                <label htmlFor='ricetta'>La tua ricetta</label>
                <input
                  type='text'
                  id='ricetta'
                  name='ricetta'
                  className='input'
                  placeholder='descrivi la tua ricetta'></input>
                <hr />
              </div>
              <button type='submit' className='btn btn-primary'>
                Invia Ricetta
              </button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;
