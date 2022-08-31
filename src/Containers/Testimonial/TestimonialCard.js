import React from 'react'
import './TestimonialCard.css';
// import rajshree from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/rajshree-nema.jpeg'
// import srijan from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/srijan.jpeg'
// import naman from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/naman.jpeg'

const TestimonialCard = (props) => {
    return (
        <div className={`testimonial-card ${props.isActive ? "active" : ""}`}>
            <div className="testimonial-review">
                {props.review}
            </div>
            <div className="testimonial-person">
                <img src={props.image} alt="avatar" />
                <div className="testimonial-by">
                    <div className="testimonial-by-name">
                        {props.name}
                    </div>
                    <div className="testimonial-by-designation">
                        {props.designation}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TestimonialCard;