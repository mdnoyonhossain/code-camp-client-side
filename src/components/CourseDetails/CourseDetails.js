import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const CourseDetails = () => {
    

    return (
        <section ref={componentRef} id="course-details" className="course-details">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="col-lg-8">
                        <img src={image_url} className="img-fluid" alt="" />
                        <h3>{title}</h3>
                        <p>
                            {details}
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Trainer</h5>
                            <p><Link >{author.name}</Link></p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Course Fee</h5>
                            <p>{price}</p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Available Seats</h5>
                            <p>{total_view}</p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Schedule</h5>
                            <p>{author.published_date}</p>
                        </div>

                        <button onClick={handlePrint} className='btn btn-danger'>Download PDF</button>
                        <Link to={`/courses/checkout/${id}`} className='btn btn-success mt-3'>Get Premium Access</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseDetails;