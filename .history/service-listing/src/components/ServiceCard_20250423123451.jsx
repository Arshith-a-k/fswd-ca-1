import React from "react";

function ServiceCard({service_title,service_description}){
    return(
        <p>{service_title}</p>
        <p>{service_description}</p>
    )
}

export default ServiceCard