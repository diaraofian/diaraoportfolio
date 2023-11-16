import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.css";
//import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []); // increase the delay to 5 seconds }, []);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "gmail",
  //       "Dia_Raofian", // i dont care more , templete id
  //       refForm.current,
  //       "diamor6060" // i dont care more / public key
  //     )
  //     .then(
  //       () => {
  //         alert("Message successfully sent!");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send the message , please try again");
  //       }
  // //     );  //in form tag ref={refForm} onSubmit={sendEmail}
  // };
  const HeratCoordinates = [34.3508, 62.2164];
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I am interested in freelance opportunities- especially ambitious or
          large projects . however, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        Dia Raofian,
        <br />
        Afghanistan,
        <br />
        Bagh Azadi Street block 24 ,
        <br />
        Herat city ,
        <br />
        <span>dianaraofian@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={HeratCoordinates} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={HeratCoordinates}>
            <Popup>Dia lives here,come over for a cup of coffe :)</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
export default Contact;
