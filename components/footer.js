import React from 'react';
import Image from 'next/image';


    

    const Footer = () => {

        const currentYear = new Date().getFullYear();

        return (
            <section id="services">
                <div style={{ marginTop: '1150px' }}>
                    <footer className="footer-08">
                        <div className="container-fluid px-lg-5">
                            <div className="row">
                                <div className="col-md-8 py-5">
                                    <div className="row">
                                        <div className="col-md-6 mb-md-0 mb-4">
                                            <h2 className="footer-heading">Contact Information</h2>
                                            <p>
                                                Phone: (123) 456-7890
                                            </p>
                                            <p>
                                                Email: info@example.com
                                            </p>
                                            <p>
                                                Address: 123 Main Street, Some City, Some State, 12345
                                            </p>
                                            <ul className="p-0" style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
                                                <li className="">
                                                    <a>
                                                        <div className="">
                                                            <Image priority src="/images/facebook.svg" height={40} width={40} alt="" />
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a>
                                                        <Image priority src="/images/twitter.svg" height={40} width={40} alt="" />
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a>
                                                        <Image priority src="/images/instagram.svg" height={40} width={40} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>



                                        {/* <div className="col-md-8">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 col-lg-9">
                                                <div className="row">
                                                    <div className="col-md-4 mb-md-0 mb-4">
                                                        <h2 className="footer-heading">Discover</h2>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Buy &amp; Sell
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Merchant
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Giving back
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Help &amp; Support
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 mb-md-0 mb-4">
                                                        <h2 className="footer-heading">About</h2>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Staff
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Team
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Careers
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Blog
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 mb-md-0 mb-4">
                                                        <h2 className="footer-heading">Resources</h2>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Security
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Global
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Charts
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="py-1 d-block">
                                                                    Privacy
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}


                                    </div>
                                    <div className="row mt-md-5">
                                        <div className="col-md-12">
                                        <p>
                                            &copy; {currentYear} by Be Positively Visible
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 py-md-5 py-4 aside-stretch-right pl-lg-5" style={{ backgroundColor: '#011243' }}>
                                    <h2 className="footer-heading footer-heading-white">Contact us</h2>
                                    <form action="#" className="contact-form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name=""
                                                id=""
                                                cols={30}
                                                rows={3}
                                                className="form-control"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control submit px-3">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        );
    };

    export default Footer;
