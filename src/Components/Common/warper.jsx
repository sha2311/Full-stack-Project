import { themeColor } from "../../lib/utlits";
import Footer from "../Footer";
import Navbarmenu from "../Navbar";

const Warper = ({ children, isDark }) => (
  <div className={themeColor(isDark)}>
    <Navbarmenu isDark={isDark} />
    {children}
    <Footer isDark={isDark} />
  </div>
);

export default Warper;
