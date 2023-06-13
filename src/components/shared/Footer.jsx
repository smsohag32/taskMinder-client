import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 default-container text-white text-opacity-80 py-9">
      <div className=" ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Slide right>
              <h2 className="text-lg font-semibold">
                <span className="text-white">Task</span>Minder
              </h2>
            </Slide>
            <p className="text-gray-400 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-400">1234 Main Street, City, Country</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <ul className="flex justify-center md:justify-start">
              <li className="mr-4">
                <Link className="text-gray-400 hover:text-white transition duration-300">
                  Terms and condition
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cookies policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-400">
              © 2023 TaskMinder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
