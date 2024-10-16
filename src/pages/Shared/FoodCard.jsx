import { Link, Navigate, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: send cart item to the database
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login");
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 mt-4"
          >
            Add to cart
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
