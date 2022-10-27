import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CoursesNav.css'

const CoursesNav = () => {
    const courseTitle = useLoaderData();

    return (
        <div className='rounded'>
            <ul className="nav flex-column custom">
                {
                    courseTitle.map(course => <li key={course.id} className="nav-item" >
                        <Link to={`/courses/${course.id}`} className="nav-link text-white cusom">{course.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CoursesNav;