import React from 'react';
import MoviesBoxSlide from '../components/MoviesBoxSlide'
import MoviesCardSlide from '../components/MoviesCardSlide';
import moviedata from '../data/moviedata';
import MovieCart from '../components/MovieCart';
import { t } from 'i18next';


const Movies = () => {


  return (
    <div>
      <section className='py-5'>
        <MoviesBoxSlide />
      </section>



      <section className='container mt-5 py-5' >
        <h2 className='text-white m-0 fw-bold section_title'>RECENTLY ADDED</h2>
        <div className='mt-5'>
        <MoviesCardSlide/>
        </div>
      </section>



      <section className='container py-5 '>
        <h2 className='text-white fw-bold my-4 section_title '>HOLLYWOOD MOVIES</h2>
        <div className='container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' >
            {moviedata[7].map((fd, i) => {
              return <MovieCart img={fd.img} title={t(`movietitle.${i+43}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>


      <section className='container py-5 '>
        <h2 className='text-white fw-bold my-4 section_title'>AWARD-WIN MOVIES</h2>
        <div className=' container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' id='trending_cards'>
            {moviedata[3].map((fd, i) => {
              return <MovieCart img={fd.img} title={t(`movietitle.${i+19}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>



    </div>
  )
}

export default Movies