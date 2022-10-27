import React from 'react';
import about from '../../assets/img/about.jpg';
import man1 from '../../assets/img/trainers/trainer-1.jpg';
import man2 from '../../assets/img/trainers/trainer-2.jpg';
import man3 from '../../assets/img/trainers/trainer-3.jpg';
import { FaFacebook, FaGlobeAfrica, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative " data-aos="zoom-in" data-aos-delay="100">
                    <h1 className='text-white'>Learning Today,<br />Leading Tomorrow</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <Link to="/courses" className="btn-get-started">Get Started</Link>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>

                        </div>
                    </div>

                </div>
            </section>
            <section id="why-us" className="why-us">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch">
                            <div className="content">
                                <h3>Why Choose Mentor?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <Link href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-receipt"></i>
                                            <h4>Corporis voluptates sit</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Ullamco laboris ladore pan</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-images"></i>
                                            <h4>Labore consequatur</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="features" className="features">
                <div className="container" data-aos="fade-up">

                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-store-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Lorem Ipsum</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-bar-chart-box-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""><FaGlobeAfrica /> Dolor Sitema</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-calendar-todo-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Sed perspiciatis</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="ri-paint-brush-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Magni Dolores</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-database-2-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Nemo Enim</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-gradienter-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""><FaGlobeAfrica /> Eiusmod Tempor</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-file-list-3-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Midela Teren</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-price-tag-2-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Pira Neve</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-anchor-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Dirada Pack</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-disc-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Moton Ideal</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-base-station-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""><FaGlobeAfrica /> Verdo Park</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-fingerprint-line" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link href=""> <FaGlobeAfrica /> Flavor Nivelanda</Link></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="trainers" className="trainers">
                <div className="container" data-aos="fade-up">

                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src={man1} className="img-fluid" alt="" />
                                <div className="member-content">
                                    <h4>Walter White</h4>
                                    <span>Web Development</span>
                                    <p>
                                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                    </p>
                                    <div className="social">
                                        <Link className='me-2'><FaFacebook></FaFacebook></Link>
                                        <Link className='me-2'><FaTwitter></FaTwitter></Link>
                                        <Link className='me-2'><FaInstagram></FaInstagram></Link>
                                        <Link className='me-2'><FaLinkedin></FaLinkedin></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src={man2} className="img-fluid" alt="" />
                                <div className="member-content">
                                    <h4>Sarah Jhinson</h4>
                                    <span>Marketing</span>
                                    <p>
                                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                    </p>
                                    <div className="social">
                                        <Link className='me-2'><FaFacebook></FaFacebook></Link>
                                        <Link className='me-2'><FaTwitter></FaTwitter></Link>
                                        <Link className='me-2'><FaInstagram></FaInstagram></Link>
                                        <Link className='me-2'><FaLinkedin></FaLinkedin></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src={man3} className="img-fluid" alt="" />
                                <div className="member-content">
                                    <h4>William Anderson</h4>
                                    <span>Content</span>
                                    <p>
                                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                    </p>
                                    <div className="social">
                                        <Link className='me-2'><FaFacebook></FaFacebook></Link>
                                        <Link className='me-2'><FaTwitter></FaTwitter></Link>
                                        <Link className='me-2'><FaInstagram></FaInstagram></Link>
                                        <Link className='me-2'><FaLinkedin></FaLinkedin></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;