import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12 space-y-6 text-center">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 text-left px-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="/order">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
