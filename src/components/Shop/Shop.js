import React, { useState } from 'react';
import Course from '../Course/Course';
import courses from '../../fakeCourse/courses';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {

  
    const [course, setCourse] = useState(courses);

    const [cart, setCart] = useState([]);

    const handleAddCourse= (course) =>{

         const newCart = [...cart, course];
         setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="course-container">
              
            {
                course.map(course => <Course handleAddCourse={handleAddCourse }  course = {course}></Course>)
            }
            </div>
            <div className="cart-container ">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;