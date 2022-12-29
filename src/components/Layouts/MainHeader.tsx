import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import LogoMain from "../../../public/images/asdf.png";

const MainHeader = () => {
  const [isMenu, setMenu] = useState<boolean>(true);

  return (
    <header className="relative z-50 w-full shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-5">
        <Link href="/">
          <Image
            src="/images/logo-main.png"
            alt="Logo"
            width="192"
            height="27"
            className="w-auto h-7 cursor-pointer"
          />
        </Link>
        <div className="lg:hidden" onClick={() => setMenu(true)}>
          {/* <Menu className="w-7 h-7 text-gray-800" /> */}
        </div>
        {isMenu && (
          <div className="absolute lg:relative top-0 left-0 w-full lg:w-auto lg:inline-flex items-center justify-end space-x-3 px-6 py-4 lg:p-0 lg:ml-5 z-10">
            <div className="relative flex flex-col lg:flex-row items-center bg-white border border-gray-300 lg:border-none rounded-2xl p-4 pt-8 lg:p-0 shadow-xl lg:shadow-none">
              <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto lg:space-x-8 mb-4 lg:mb-0">
                <Link href="/">About PnP Packs</Link>
                <Link href="/">Guidelines</Link>
                <Link href="/">Help</Link>
                <div
                  className="absolute top-2 right-0 lg:hidden px-4"
                  onClick={() => setMenu(false)}
                >
                  {/* <X className="w-7 h-7 text-gray-800" /> */}
                </div>
              </div>
              <div className="flex items-center lg:ml-10 space-x-5">
                <button className="relative px-2 py-1 bg-white border border-gray-400 rounded-full text-black text-center">
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-primary rounded-full text-white text-sm">
                    1
                  </div>
                  <i className="uil uil-shopping-cart"></i>
                </button>
                <button className="px-5 py-1 bg-white border border-gray-400 rounded-full text-black text-center">
                  Sign Up
                </button>
                <button className="px-5 py-1 bg-primary border border-transparent rounded-full text-white text-center">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
