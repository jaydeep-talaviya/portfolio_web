import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

const QualificationTab = () => {


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className='work_experience'>
                            <div className='work_experience_header d-inline-block pb-2'>
                                <h2>Work Experience</h2>
                            
                            </div>
                            <div class="card mt-2">
                                <div className='card-body'>
                                    <div className='row py-2'>
                                        <div className='col-md-6 box'>
                                            <div>
                                                <h5 className='fw-bold'>Software Engineer(Python developer)</h5>
                                                <h6>9Series Solutions PVT. LTD. | Jan 2023 - Present</h6>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>

                                        </div>
                                    </div>
                                    <div className='row py-2'>
                                    <div className='col-md-6'></div>
                                        <div className='col-md-6 box'>
                                        <div>
                                            <h5 className='fw-bold'>Software Engineer(Fullstack developer)</h5>
                                            <h6>SecureMeta Sys. | May 2022 - Jan 2023</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row py-2'>
                                        <div className='col-md-6 box'>
                                        <div>
                                            <h5 className='fw-bold'>Python/Odoo Developer</h5>
                                            <h6>Techultra Solution PVT LTD. | Feb 2021 - may 2022</h6>
                                            </div>
                                        </div>
                                        <div className='col-md-6'></div>

                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default QualificationTab;
