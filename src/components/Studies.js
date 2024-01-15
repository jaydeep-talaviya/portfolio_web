import React from 'react'
import { Col } from "react-bootstrap";


function Studies() {
  return (
    <Col size={12}>
    <div className="card border-secondary project_card h-100">
        <div class="card-body">

            <h3 className="card-title pb-2 text-center">Education</h3>
            <div className='card-body'>
                <div>
                    <div className='py-2'>
                        <h4 class="font-weight-bold">Balaji Engineering College (GTU), Junagadh</h4>
                        <h5>Bachelor of Engineering (B.E.), Computer Engine ering(CE)</h5>
                        <h6 class="d-flex justify-content-between px-3"><span>July, 2021</span><span>CGPA: 9.32/10.00</span></h6>
                        </div>
                        <div className='py-2'>
                        <h4 class="font-weight-bold">Shree Manas VidhyaBhavan, Junagadh</h4>
                        <h5>Class XII (Higher Secondary Examination), GSEB</h5>
                        <h6 class="d-flex justify-content-between px-3"><span>May, 2017</span><span>Aggregate: 65%</span></h6>
                        </div>
                        <div className='py-2'>
                        <h4 class="font-weight-bold">Shree R.B. Patel Vidhya Sankul, Junagadh</h4>
                        <h5>Class X (Senior Secondary Examination), SSE</h5>
                        <h6 class="d-flex justify-content-between px-3"><span>July, 2015</span><span>Aggregate 95.95%</span></h6>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</Col>
  )
}

export default Studies