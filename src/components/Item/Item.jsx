
const Item = ({id, name, precio, img}) => {

    return (
        <article>
            <div className="ItemContentImg">
                <picture>
                    <img src={img}></img>
                </picture>
            </div>
            <div className="ItemContentText">
            <h2>{name}</h2>
            <p>{precio}</p>
            </div>
        </article>
    )
}
export default Item