export default function Entry(props) {
  // console.log(props)
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img className="main-img" src={props.img.src} alt={props.img.alt} />
      </div>

      <div>
        <div className="location-row">
          <img className="marker" src="./marker.png" alt="Location Marker" />
          <span>{props.country}</span>
          <a href={props.googleMapsLink} target="_blank" rel="noreferrer" >
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
