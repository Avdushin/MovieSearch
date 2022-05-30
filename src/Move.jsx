const removeSpase = (s) => s.trim(' ').split(/ +/).join('-');
const ultraReplace = (s) => s.replace(',','').replace('\'','').toLowerCase();
const Move = ({ moveName, moveGenre, moveYear }) => {

    return (
        <div className="moveres">
            <div className="moveres-item">
                <div className="propz">Name: <a className="move-item" href={removeSpase(ultraReplace(moveName))}>{moveName}</a></div>
                <div className="propz">Genre: <a className="move-item" href={removeSpase(moveName.replace(',','').replace('\'','').toLowerCase())}>{moveGenre}</a></div>
                <div className="propz">Year: <a className="move-item" href={removeSpase(moveName.replace(',','').replace('\'','').toLowerCase())}>{moveYear}</a></div>
            </div>
        </div>
    );
}

export default Move;