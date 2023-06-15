import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const Services = () => {
    return (
        <section>
            <Container style={{ marginTop: '150px' }}>
                <h2 className="text-center mb-4">Services Offered</h2>
                <Row>
                <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Medical record review</Card.Title>
                                <Card.Text>
                                    Medical claims physician reviewers can review medical records to ensure that the services provided were medically necessary and appropriately documented. They can also identify any potential errors, inconsistencies, or omissions in the medical records.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services1.png" alt="Service 1" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Claims coding review</Card.Title>
                                <Card.Text>
                                    Our physicians can review claims coding to ensure that the codes used accurately reflect the services provided and are compliant with coding guidelines.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services2.png" alt="Service 2" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Utilization review</Card.Title>
                                <Card.Text>
                                    We can perform utilization review to ensure that the services provided were medically necessary and appropriate, and that they were provided in the most cost-effective setting.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services3.png" alt="Service 3" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Medical necessity review</Card.Title>
                                <Card.Text>
                                    Our doctors can perform peer review to ensure that the services provided meet the standards of care and are consistent with medical guidelines and best practices.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services4.png" alt="Service 4" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Peer review</Card.Title>
                                <Card.Text>
                                    Medical Claims Physician Reviewers can perform medical necessity review to ensure that the services provided were medically necessary and appropriate for the patient's condition.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services5.png" alt="Service 5" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Independent medical examination</Card.Title>
                                <Card.Text>
                                    We can perform independent medical examinations to evaluate a patient's medical condition and provide an objective opinion on the medical necessity of the services provided
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services6.png" alt="Service 6" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Expert witness testimony</Card.Title>
                                <Card.Text>
                                    Our physicians can provide expert witness testimony in legal cases involving medical claims disputes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services7.png" alt="Service 7" width={300} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}  style={{ marginTop: '20px' }}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>Consulting services</Card.Title>
                                <Card.Text>
                                    We can provide consulting services to healthcare organizations or insurance companies to help them improve their claims processing and medical review processes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Image src="/images/services8.png" alt="Service 8" width={310} height={300} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
