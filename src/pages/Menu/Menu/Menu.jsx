import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>KLocal | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>

      {/* main cover */}
      <SectionTitle
        heading="Today's Offer"
        subHeading="Don't Miss"
      ></SectionTitle>

      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert menu items */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>

      {/* Pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>

      {/* Salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>

      {/* Soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
