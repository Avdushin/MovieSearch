import Moves from './Move';

const MoveList = ({ moveList, searchTerm }) => {
    return (
        <div className="movebox">
            {moveList.map((move, index) => {
                return (
                    <Moves
                        key={index}
                        moveName={move.move_name}
                        moveGenre={move.move_genre}
                        moveYear={move.move_year}
                    />
                )
            })}
        </div>
    );

}

export default MoveList;