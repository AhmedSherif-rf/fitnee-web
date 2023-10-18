import React from 'react'
import { Col, Row } from 'reactstrap'
import FillBtn from '../Buttons/FillBtn'

const index = () => {
  return (
    <Row className='my-3'>
        <Col md={12}>
            <FillBtn className="w-100 mb-2" text="My Current Trainer"/>
            <FillBtn className="w-100 mb-2" text="My Current Nutritionist"/>
            <FillBtn className="w-100 mb-2" text="My Subscription History"/>
            <FillBtn className="w-100 mb-2" text="My Progress"/>
        </Col>
    </Row>
  )
}

export default index