import React from 'react';

const Introduction = () => {
    return (
        <section id="benefits">
            <div className="container" style={({ marginTop: '150px' })}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center mb-4">Why Partner With Us?</h2>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false" // Update the aria-expanded attribute to "true"
                                        aria-controls="collapseOne"
                                    >
                                        Improved accuracy and compliance
                                    </button>
                                </h3>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        We help ensure that claims are accurate, medically necessary, and in compliance with regulations and policies. This can reduce the risk of denied claims, audits, and penalties.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Expertise and experience
                                    </button>
                                </h3>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        Our experienced physicians have the knowledge and skills to review complex medical claims. We can identify errors, inconsistencies, and unnecessary procedures that may be missed by non-medical reviewers.
                                    </div>
                                </div>
                            </div>







                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="true"
                                        aria-controls="collapseThree"
                                    >
                                        Cost savings
                                    </button>
                                </h3>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        By catching errors and ensuring that claims are medically necessary, we can help reduce healthcare costs for patients, providers, and payers. This can lead to lower premiums, reduced out-of-pocket expenses, and increased revenue for healthcare providers.
                                    </div>
                                </div>
                            </div>







                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Improved patient outcomes
                                    </button>
                                </h3>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        Our doctors can help ensure that patients receive appropriate care and that healthcare providers are reimbursed fairly for their services. This can lead to improved patient outcomes, increased patient satisfaction, and better relationships between patients and providers.
                                    </div>
                                </div>
                            </div>





                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Customized solutions
                                    </button>
                                </h3>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        Our services can be tailored to meet the specific needs of different healthcare providers, payers, and patient populations. This can include specialized review services for certain procedures or conditions, as well as customized reporting and analytics to help providers and payers track their performance and identify areas for improvement.
                                    </div>
                                </div>
                            </div>



                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingSix">
                                    <button
                                        className="accordion-button bg-primary collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        Efficiency and speed
                                    </button>
                                </h3>
                                <div
                                    id="collapseSix"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body bg-light">
                                        We can help streamline the claims review process and reduce the time it takes to process claims. This can help healthcare providers get paid faster and reduce administrative burdens.
                                    </div>
                                </div>
                            </div>

                            {/* Add more accordion items as needed */}
                        </div>
                    </div>
                </div>
            </div>




        </section>
    );
};

export default Introduction;
