import React from 'react'
import { Row, Col, Progress, Avatar} from 'antd'

export default (props) => (
    <div>
        {props.progresses.map((progress) => (
            <Row gutter = {10}>
                <Col span = {20}>
                    <Progress 
                        percent = {progress.percent}
                        showInfo = {false}
                    />
                </Col>
                <Col span = {4}>
                    <Avatar size = "small" src={progress.image} />
                </Col>
            </Row>
        ))}
    </div>
)