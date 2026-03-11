export default function Contacts({ img, alt_text, name, phone, email }) {
    return (
        <article>
            <img src={img} alt={alt_text} />
            <h3>{name}</h3>
            {phone && <p>Phone : {phone}</p>}
            <p>{email}</p>
        </article>
    )
}