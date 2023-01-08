import React from 'react'
import Title from './Title'
import { toursLink} from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours"/>

    <div className="section-center featured-center">
       {toursLink.map((link)=>{
        return(
           <article className="tour-card">
        <div className="tour-img-container">
          <img src={link.image} className="tour-img" alt="" />
          <p className="tour-date">{link.date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{link.title}</h4>
          </div>
          <p>
           {link.info}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {link.location}
            </p>
            <p>{link.duration}days</p>
            <p>from ${link.location2}</p>
          </div>
        </div>
      </article>
        )
       })}
    </div>
  </section>
  )
}

export default Tours
