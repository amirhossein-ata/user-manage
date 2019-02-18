import React from 'react'
import {Button, Row, Col, Spin} from 'antd'

export default  () => (
    <Row>
        <Col span={12} offset={6}>
            <Spin size="large"/>
        </Col>
    </Row> 
)