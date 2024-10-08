import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 text-left px-6 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-5">
        {title && (
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order now your favorite <span className="">{title}</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
