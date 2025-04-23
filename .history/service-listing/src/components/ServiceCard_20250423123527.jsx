import React from "react";

function ServiceCard({service_title,service_description}){
    return(
        <div>
            <p>{service_title}</p>
            <p>{service_description}</p>
        
        </div>
    )
}

export default ServiceCard