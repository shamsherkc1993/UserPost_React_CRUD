import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from './footer.module.css'

const Footer = () => {
  return (
    <>
        <Container fluid className={style.mainFooter}>
            <Row>
                <Col>
                    <p>Copyright@2025</p>
                </Col>
                <Col>Design and develop : shamsherkc</Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer