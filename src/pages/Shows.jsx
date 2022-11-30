import React from 'react';
import ShowsSlideBox from '../components/ShowsBoxSlide';
import ShowsCardSlide from '../components/ShowsCardSlide';
import moviedata from '../data/moviedata';
import MovieCart from '../components/MovieCart';
import { t } from 'i18next';

const Shows = () => {
  return (
    <div>
      <section className='py-5'>
        <ShowsSlideBox />
      </section>


      <section className='container py-5' >
        <h2 className='text-white m-0 fw-bold section_title'>WORTH WATCHING</h2>
        <div className='mt-5'>
          <ShowsCardSlide />
        </div>
      </section>



      <section className='container py-5 '>
        <h2 className='text-white fw-bold my-4  section_title'>LATEST IN SERIES</h2>
        <div className=' container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' id='trending_cards'>
            {moviedata[2].map((fd, i) => {
              return <MovieCart img={fd.img}  title={t(`movietitle.${i+13}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>

      <section className='container  py-5 '>
        <h2 className='text-white fw-bold my-4  section_title'>LATEST IN SERIES</h2>
        <div className=' container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' id='trending_cards'>
            {moviedata[5].map((fd, i) => {
              return <MovieCart img={fd.img} title={t(`movietitle.${i+31}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>




    </div>
  )
}

export default Shows