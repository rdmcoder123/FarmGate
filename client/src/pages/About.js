import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - AgriShop"}>
      <div className="row contactus overflow-x-hidden"  id="style-1">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our Team - <br></br>DHATSHINAMOORTHY R
            <br></br>MUTHIAH GOKUL
            <br></br>HARI SUDHAN
            <br></br>NOEL ASHIK  

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
