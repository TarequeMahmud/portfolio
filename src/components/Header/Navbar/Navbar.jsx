import styles from "./Navbar.module.scss";
import { navbarItems } from "@/datas/navbar.json";

const Navbar = () => {
  //   const handleClick = (link, name) => {
  //     if (name === "Home") {
  //       navigate(link);
  //       return;
  //     }
  //     if (isAuthenticated) {
  //       navigate(link);
  //     } else {
  //       showAlert(
  //         "Login Required",
  //         `To continue with ${name} you must be a valid user. Please login or Register to create an account.`
  //       );
  //     }
  //   };
  //onClick={() => handleClick(items.link, items.name)}

  return (
    <div className={styles.container}>
      <ul>
        {navbarItems.map((items, index) => (
          <li key={index}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
