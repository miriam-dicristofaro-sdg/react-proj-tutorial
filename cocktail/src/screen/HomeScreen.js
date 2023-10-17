import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation-drinks.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";

const style = {
  loop: true,
  autoplay: true,
  height: 500,
  speed: 0.25,
};

const HomeScreen = () => {
  useTitle("Home");
  const {
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero>
        <div className='home-hero'>
          <div className='home-hero-text'>
            <div className='home-hero-title'>
              <h2 className='brand-color'>WIKI DRINK</h2>
              <h4>Tutti i cocktail del mondo a portata di click</h4>
            </div>
            <p>
              Wiki Drink è un database internazionale che mette a tua
              disposizione, in maniera{" "}
              <span className='brand-color'>GRATUITA</span>, le ricette dei più
              importati e diffusi cocktail al mondo
            </p>
            <Link to='/about' className='btn btn-primary'>
              Scopri di più
            </Link>
          </div>
          <div className='home-hero-img'>
            <Lottie style={style} animationData={animationData} />
          </div>
        </div>
      </Hero>
      <section className='container home-screen'>
        <div className='search-bar'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <label>
                <h4>cerca il tuo drink!</h4>
              </label>
              <div className='input-search'>
                <input
                  type='text'
                  id='drink'
                  className='input'
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className='btn icon-btn' type='submit'>
                  <FaSearch className='icon' />
                </button>
              </div>
            </form>
          </div>
          <p className='result'>{count} risultati</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>Nessun cocktail trovato!</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;
