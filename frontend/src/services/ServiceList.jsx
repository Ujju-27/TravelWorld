import React from 'react'
import ServiceCard from './ServiceCard.jsx';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Best and calculated weather and climate with tours.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "having greart tour guider for your covenience.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Better Customized tours with great customers.",
    },

]


const ServiceList = () => {

    return (<>
    {   
        servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))
    }
    </>
    );
};

export default ServiceList;