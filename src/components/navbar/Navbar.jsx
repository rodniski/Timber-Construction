import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{type: "spring", damping: 20 }}
        >
          <img src="/timber-white.png" alt="" />
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{type: "spring", damping: 20 }}
        >
          <a href="">
            <img src="/s-facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/s-instagram.svg" alt="" />
          </a>
          <a href="">
            <img src="/s-YouTube.svg" alt="" />
          </a>
          <a href="">
            <img src="/s-timber.svg" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
