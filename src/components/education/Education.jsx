import React from 'react'
import {BsFillAwardFill} from 'react-icons/bs'
import './education.css'

const Education = () => {
  return (
    <section id='Education'>
        <h2>Education History</h2>
        <div className='container edu__container'>
            <div className='edu__cards'>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>Aug 2021- Dec 2022</h6>
                <h3>Masters in Computer Science</h3>
                <h5>Missouri State University</h5>
              </div>
            </article>
            
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2016-2020</h6>
                <h3>Bachelors in Computer Science</h3>
                <h5>Sathyabama Institute of Science & Technology</h5>
              </div>
            </article>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2014-2016</h6>
                <h3>Higher Secondary Certificate</h3>
                <h5>Sasi Junior College</h5>
              </div>
            </article>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2013-2014</h6>
                <h3>Secondary School Certificate</h3>
                <h5>Sasi High School</h5>
              </div>
            </article>
            </div>

        </div>
    </section>
  )
}

export default Education