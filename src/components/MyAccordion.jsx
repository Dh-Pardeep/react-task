import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const MyAccordion = () => {
    const [activeKey, setActiveKey] = useState("0");

    const handleAccordionChange = (eventKey) => {
        setActiveKey(eventKey);
    };

    return (
        <>
            <section className=' vh-100'>
                <div className="container">
                    <h2 className='text-center pt-5 fw-bold fs-1 lh-base mb-3'>Accordion</h2>
                    <p className='text-center fs-6 lh-base accordion_pare_w mx-auto mb-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                    <Row className='justify-content-center'>
                        <Col md={10}>
                            <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is a cryptocurrency token?</Accordion.Header>
                                    <Accordion.Body>
                                        Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mt-4'>
                                    <Accordion.Header>How can I buy cryptocurrency tokens?</Accordion.Header>
                                    <Accordion.Body>
                                        Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='mt-4'>
                                    <Accordion.Header>What is a token wallet, why do I need one?</Accordion.Header>
                                    <Accordion.Body>
                                        Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='mt-4'>
                                    <Accordion.Header>Are cryptocurrency tokens secure?</Accordion.Header>
                                    <Accordion.Body>
                                        Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='mt-4'>
                                    <Accordion.Header>What is a token wallet, and why do I need one?</Accordion.Header>
                                    <Accordion.Body>
                                        Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}

export default MyAccordion;
