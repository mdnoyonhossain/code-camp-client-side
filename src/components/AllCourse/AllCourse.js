import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../assets/img/course-1.jpg'
import { FaChartBar, FaStreetView } from 'react-icons/fa';

const AllCourse = () => {
    const allCourses = useLoaderData();

    return (
        <section id="courses" className="courses">
            <div className="container" data-aos="fade-up">

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {
                        allCourses.map(allcourse => <div key={allcourse.id} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-3">
                        <div className="course-item">
                            <img src={allcourse.image_url} className="img-fluid" style={{ height: '150px' }} alt="..." />
                            <div className="course-content">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4>ID: {allcourse.id.slice(0, 10)}</h4>
                                    <p className="price">{allcourse.price}</p>
                                </div>

                                <h3><Link to={`/courses/details/${allcourse.id}`}>{allcourse.title}</Link></h3>
                                <p>{`${allcourse.details.slice(0, 100)} ...read more `}</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="trainer-profile d-flex align-items-center">
                                        <img src={logo} className="img-fluid" alt="" />
                                        <span>{allcourse.author.name}</span>
                                    </div>
                                    <div className="trainer-rank d-flex align-items-center">
                                        <FaStreetView className='me-2' />{allcourse.total_view}
                                        &nbsp;&nbsp;
                                        <FaChartBar className='me-2' />{allcourse.rating.number}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> )
                    }
                </div>

            </div>
        </section>
    );
};

export default AllCourse;