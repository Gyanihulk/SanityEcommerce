import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export function PageLayout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.any,
};
