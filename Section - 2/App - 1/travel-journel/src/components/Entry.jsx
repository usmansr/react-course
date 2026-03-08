export default function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://upload.wikimedia.org/wikipedia/commons/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg"
          alt="Mount Fuji"
        />
      </div>

      <div>
        <div className="location-row">
          <img className="marker" src="./marker.png" alt="Location Marker" />
          <span>Japan</span>
          <a href="https://share.google/ANG2p8oYuy8p8aKev">
            View on Google Maps
          </a>
        </div>
        <h2>Mount Fuji</h2>
        <p>12 Jan, 2024 - 24 Feb 2025</p>
        <p>
          Mount Fuji is Japan’s highest, most iconic peak, standing at 3,776
          meters ( feet) as an active stratovolcano southwest of Tokyo. Renowned
          for its perfectly shaped cone, it is a UNESCO World Heritage site, a
          sacred site in Shinto tradition, and a popular hiking destination,
          with its last eruption in 1707.
        </p>
      </div>
    </article>
  );
}
