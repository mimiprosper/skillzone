// import React from 'react'

import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className=" w-[90%] pt-10 pb-10 mx-auto mb-20 grid md:grid-cols-3 justify-center flex-wrap gap-9">
    
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
     
    </section>
  );
}

export default Services