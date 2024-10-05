import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 py-4 rounded-lg bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          {/* <Link to={``}> */}
          <button className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 mt-4">
            Add to cart
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
