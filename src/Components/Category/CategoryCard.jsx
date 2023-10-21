import { Link } from "react-router-dom";
const CategoryCard = ({ category }) => {
    const { image, categoryName } = category;
    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }
    return (
        <Link to={`/products/${categoryName?.toLowerCase()}`}>
            <div style={style} className="card  mb-5  relative shadow-xl ">
                <div className="absolute rounded-xl top-0 left-0 h-full w-full bg-[#1d1d1d8a]"></div>
                <div className="card-body relative z-40">
                    <h2 className=" text-3xl font-bold text-purple-600 pt-24">{categoryName}</h2>
                </div>

            </div>
        </Link>
    );
};

export default CategoryCard;