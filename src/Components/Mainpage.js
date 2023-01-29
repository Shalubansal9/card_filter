import React, {useState} from 'react'
import Coursearray from './Coursearray'
import {Link} from 'react-router-dom'
const Mainpage = () => {
  const [items, setItems]= useState(Coursearray);
  const filterItem = (courseitem) => {
    const update = Coursearray.filter((current) => {
      return current.category === courseitem;
    });
    setItems(update);
  }
  return (
    <>
     <h2 className='text-center mt-4 flex-item' style={{color : "green"}}>E-Learning Courses from Internshala Trainings</h2> 
     <hr/>
     <div className='d-flex justify-content-center gap-2 mt-5 fluid'>
        <button className="btn btn-info" onClick={() => setItems(Coursearray)}>All</button>
        <button className="btn btn-info" onClick={() => filterItem('programming')}>Programming</button>
        <button className="btn btn-info" onClick={() => filterItem('design')}>Design</button>
        <button className="btn btn-info" onClick={() => filterItem('business')}>Business</button>
        <button className="btn btn-info" onClick={() => filterItem('datascience')}>Data Science</button>
        <button className="btn btn-info" onClick={() => filterItem('career')}>Career Development</button>
     </div>
     <div className='container'>
     <div className='row mt-5'>
     {items.map((element) => {
        const {image, title, text, category} = element;   //array destructuring
        return (
          <>
            <div className="col mb-3">
              <div class="card border-secondary" style={{width: "18rem"}}>
                <img src={image} class="card-img-top" alt="courseimage" style={{height: "14rem"}}/>
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{text}</p>
                  <Link to="/" class="btn btn-primary">Know More</Link>
                </div>
              </div>
            </div>
          </>
        )
     })}
     </div>
     </div>
    </>
  )
}

export default Mainpage
