import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOut.module.css.css';

const CheckOut = () => {
    const checkout = useLoaderData();
    console.log(checkout);
    const { id, image_url, price, title, total_view } = checkout;
    return (
        <div classNameName="single">

            <section className="bg-dark">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">ID</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Total View</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="border-0">
                                                <div className="p-2">
                                                    <img src={image_url} alt="" width="100" className="img-fluid rounded shadow-sm" />
                                                    <div className="ms-3 d-inline-block align-middle">
                                                        <h5 className="mb-0"> <Link  className="text-dark d-inline-block align-middle">{title}</Link></h5>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-0 align-middle"><strong>{price}</strong></td>
                                            <td className="border-0 align-middle"><Link  className="text-danger">{id}</Link></td>
                                            <td className="border-0 align-middle"><strong>{total_view}</strong></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                        <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
                            <div className="p-4">
                                
                                <div className="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                    <div className="input-group-append border-0">
                                        <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                            <div className="p-4">
                                
                                <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                            <div className="p-4">
                                
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                        <h5 className="fw-bold">{price}</h5>
                                    </li>
                                </ul><Link className="btn btn-dark rounded-pill py-2 d-md-block" to={'/checkout'}>Procceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;