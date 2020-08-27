import React from 'react';
import './Course.css';


const Course = (props) => {
    const {name, instructor, price, image} = props.course;
  

    
    return (
        
        <div className= "course">
            <div className="col-md-4">
                <img src={props.course.image} className="course-img" alt=""/>
            </div>
            <div className="col-md-8">
                <h3 >{name}</h3>
                <br/>
                <p>Instructed by : <small> {instructor}</small></p>
                <p>${price}</p>
                <br/>
                
                <button className= "btn btn-success" onClick= {() => props.handleAddCourse(props.course) }>Enroll Now</button>
            </div>
          
        </div>
    );
};

export default Course;