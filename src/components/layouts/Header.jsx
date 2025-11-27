import { useState } from 'react';
import Container from '../Container';
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="relative">
      <Container>
        <div className="flex justify-between items-center pt-[30px] pb-[15px] md:px-0 px-5">
          <div>
            <Image imgSrc={Logo} />
          </div>
          <div className="flex items-center gap-x-6">


            <ul className="hidden md:flex space-x-6 font-nunito font-bold text-[#0A2C3D] ">
              <li className="hover:text-[#FF5A3C]"><Link to="/">Home</Link></li>
              <li className="hover:text-[#FF5A3C]"><Link to="/properties">Properties</Link></li>
              <li className="hover:text-[#FF5A3C]"><Link to="/property">Property</Link></li>
              <li className="hover:text-[#FF5A3C]"><Link to="/blog">Blog</Link></li>
              <li className="hover:text-[#FF5A3C]"><Link to="/pages">Pages</Link></li>
              <li className="hover:text-[#FF5A3C]"><Link to="/contact">Contact</Link></li>
            </ul>


            <button
              className="md:hidden"
              onClick={() => setActive(!active)}
            >
              {active ? <RxCross1 size={28} /> : <FaBars size={28} />}
            </button>
          </div>


          <div className="hidden md:flex gap-x-4">
            <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md cursor-pointer">
              <CiUser />
            </div>
            <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md cursor-pointer">
              <CiHeart className="text-[#FF5A3C]" />
            </div>
            <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md cursor-pointer">
              <CiSearch />
            </div>
          </div>
        </div>


        {active && (
          <ul className="md:hidden  space-y-4 font-nunito font-bold text-[#0A2C3D] p-4   absolute left-0 right-0 bg-amber-300 transition-all duration-700 ease-in-out">
            <li className="hover:text-[#FF5A3C]"><Link to="/">Home</Link></li>
            <li className="hover:text-[#FF5A3C]"><Link to="/properties">Properties</Link></li>
            <li className="hover:text-[#FF5A3C]"><Link to="/property">Property</Link></li>
            <li className="hover:text-[#FF5A3C]"><Link to="/blog">Blog</Link></li>
            <li className="hover:text-[#FF5A3C]"><Link to="/pages">Pages</Link></li>
            <li className="hover:text-[#FF5A3C]"><Link to="/contact">Contact</Link></li>
          </ul>
        )}

      </Container>
    </section>
  );
};

export default Header;
