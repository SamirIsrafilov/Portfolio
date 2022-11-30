import React from 'react'
import MovieCart from '../components/MovieCart';
import { useState } from 'react';
import moviedata from '../data/moviedata';
import BoxSlide from '../components/BoxSlide';
import CardSlide from '../components/CardSlide';
import BannerSlide from '../components/BannerSlide';
import { t } from 'i18next';



const Home = () => {
  const [featured, setFeatured] = useState('d-flex');
  const [movies, setMovies] = useState('d-none');
  const [shows, setShows] = useState('d-none');


  const [drama, setDrama] = useState('d-flex');
  const [action, setAction] = useState('d-none');
  const [romance, setRomance] = useState('d-none');



  const [color, setColor] = useState('red');
  const [textColor, setTextColor] = useState('white');
  const [color1, setColor1] = useState('#202020');
  const [textColor1, setTextColor1] = useState('white');
  const [color2, setColor2] = useState('#202020');
  const [textColor2, setTextColor2] = useState('white');


  const [color3, setColor3] = useState('red');
  const [color4, setColor4] = useState('transparent');
  const [color5, setColor5] = useState('transparent');
  


  return (
    <div>

      <section className='banner'>
        <BannerSlide />
      </section>

      <section className='main_tab'>
        <div className='container mt-5'>
          <div className="container " >
            <div className='d-flex mb-4 movies_btn'>
              <button onClick={() => {
                setFeatured('d-flex');
                setMovies('d-none');
                setShows('d-none');
                setColor('red');
                setTextColor('white');
                setColor1('#202020');
                setTextColor1('white');
                setColor2('#202020');
                setTextColor2('white');

              }}
                style={{ backgroundColor: color, color: textColor }}
                type="button"
                className="btn btn-outline-danger border-0 text-white" >Featured</button>
              <button onClick={() => {
                setFeatured('d-none');
                setMovies('d-flex');
                setShows('d-none');
                setColor('#202020');
                setTextColor('white');
                setColor1('red');
                setTextColor1('white');
                setColor2('#202020');
                setTextColor2('white')


              }}
                style={{ backgroundColor: color1, color: textColor1 }}
                type="button"
                className="btn border-0 text-white" >Movies</button>
              <button onClick={() => {
                setFeatured('d-none');
                setMovies('d-none');
                setShows('d-flex');
                setColor('#202020');
                setTextColor('white');
                setColor1('#202020');
                setTextColor1('white');
                setColor2('red');
                setTextColor2('white')
              }}
                style={{ backgroundColor: color2, color: textColor2 }}
                type="button"
                className="btn border-0 text-white">Shows</button>
            </div>
            <div className={`row ${featured}`} id="featured" >
              {moviedata[0].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+1}`)} key={i} movies={fd} />

              })}
            </div>

            <div className={`row ${movies}`} id="movies">
              {moviedata[1].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+7}`)} key={i} movies={fd} />
              })}
            </div>
            <div className={`row ${shows}`} id="shows">
              {moviedata[2].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+13}`)} key={i} movies={fd} />
              })}
            </div>

          </div>
        </div>
      </section>

      <section className='container mt-5 popular_movies' >
        <h2 className='text-white m-0 fw-bold section_title'>PUPULAR MOVIES</h2>
        <div className='mt-5'>
          <CardSlide />
        </div>
      </section>


      <section className='container py-5 box_office'>
        <h2 className='text-white fw-bold my-4 section_title'>TOP 10 BOX OFFICE</h2>
        <BoxSlide />
      </section>

      <section className='container trending_now py-5 '>
        <h2 className='text-white fw-bold my-4  section_title'>TRENDING NOW</h2>
        <div className=' container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' id='trending_cards'>
            {moviedata[3].map((fd, i) => {
              return <MovieCart img={fd.img} title={t(`movietitle.${i+19}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>




      <section className='best_series my-5'>
        <div className='best_series_shadow py-5'>
          <div className='best_series_head d-flex flex-column align-items-center'>
            <span className='text-white fw-bold mt-4 fs-5'>featured</span>
            <h1 className='text-white fw-bold my-4'>Best Series</h1>
            <p className='text-white text-center px-4'>News Season 5 Just flown in Watch and debate.</p>
            <div className='d-flex mt-3'>
              <button onClick={() => {
                setDrama('d-flex');
                setAction('d-none');
                setRomance('d-none');
                setColor3('red');
                setColor4('transparent');
                setColor5('transparent');


              }}
                type="button"
                style={{ backgroundColor: color3 }}
                className="btn rounded-0 py-2 border-0 text-white" >Drama</button>
              <button onClick={() => {
                setDrama('d-none');
                setAction('d-flex');
                setRomance('d-none');
                setColor3('transparent');
                setColor4('red');
                setColor5('transparent');
              }}
                type="button"
                style={{ backgroundColor: color4 }}
                className="btn rounded-0 py-2 border-0 text-white" >Action</button>

              <button onClick={() => {
                setDrama('d-none');
                setAction('d-none');
                setRomance('d-flex');
                setColor3('transparent');
                setColor4('transparent');
                setColor5('red');

              }}
                type="button"
                style={{ backgroundColor: color5 }}
                className="btn rounded-0 py-2 border-0 text-white" >Romance</button>
            </div>
          </div>

          <div className='container mt-5'>
            <div className={`row ${drama}`}>
              {moviedata[4].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+25}`)} key={i}  movies={fd} />

              })}
            </div>

            <div className={`row ${action}`}>
              {moviedata[5].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+31}`)} key={i} movies={fd} />

              })}
            </div>


            <div className={`row ${romance}`}>
              {moviedata[6].map((fd, i) => {
                return <MovieCart img={fd.img} title={t(`movietitle.${i+37}`)} key={i} movies={fd} />

              })}
            </div>
          </div>
        </div>
      </section>


      <section className='container suggested py-5 '>
        <h2 className='text-white fw-bold my-4 section_title '>SUGGESTED FOR YOU</h2>
        <div className='container d-flex justify-content-center alig-items-center mt-5'>
          <div className='row' >
            {moviedata[7].map((fd, i) => {
              return <MovieCart img={fd.img} title={t(`movietitle.${i+43}`)} key={i} movies={fd} />

            })}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home