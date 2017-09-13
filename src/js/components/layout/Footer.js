import React from "react";

export default class Footer extends React.Component {
  render() {
    const mapsStyle = {
      border: "0",
      width: "600",
      heigh: "450",
      frameborder: "0"
    };

    const centered = {
      float: "none",
      margin: "0 auto"
    };

    return (
      <footer>
        <div class="row">
          <hr></hr>
          <div style={centered}>
            <p> Club Deportivo Español de Buenos Aires</p>
            <p>Santiago de Compostela 3801, C1407MDB</p>
            <p>Ciudad Autónoma de Buenos Aires</p>
          </div>
          <div style={centered}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.908257340168!2d-58.46395860248002!3d-34.65701978668285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc961e93c29ff%3A0x2f8389a9b322a12!2sClub+Deportivo+Espa%C3%B1ol!5e0!3m2!1ses!2ses!4v1503853128308"
                style={mapsStyle} allowFullScreen>
            </iframe>
          </div>
        </div>
      </footer>
    );
  }
}
