const Move = ({ moveName, moveGenre, moveYear }) => {

    return (
        <div className="moveres">
            <div className="moveres-item">
                <div className="propz">Name: <a className="move-item" href="{index}">{moveName}</a></div>
                <div className="propz">Genre: <a className="move-item" href="{index}">{moveGenre}</a></div>
                <div className="propz">Year: <a className="move-item" href="{index}">{moveYear}</a></div>
            </div>
        </div>
    );
}

export default Move;