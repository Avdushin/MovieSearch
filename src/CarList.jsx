import Films from './Car';

const FilmList = ({ filmsList, searchTerm }) => {
    return (
        <div className="container-lg mx-auto grid-cols-3">
            {carList.map((car, index) => {
                return (
                    <Car
                        key={index}
                        carCompany={car.car_company}
                        carModel={car.car_model}
                        carYear={car.car_year}
                    />
                )
            })}
        </div>
    );

}

export default FilmList;