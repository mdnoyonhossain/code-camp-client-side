import React from 'react';
import { Outlet } from 'react-router-dom';


import CoursesNav from '../../components/CoursesNav/CoursesNav';

const Course = () => {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-md-2 bg-light'>
                    <CoursesNav></CoursesNav>
                </div>
                <div className='col-md-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Course;