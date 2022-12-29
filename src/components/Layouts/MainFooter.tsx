import Image from "next/image";

const MainFooter = () => {
  return (
    <footer className="relative font-display">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center justify-between py-8">
          <div className="text-center">
            <Image
              src="/images/logo-main.png"
              alt="Logo"
              width="225"
              height="32"
              className="inline-block h-6 lg:h-8 mb-2"
            />
            <p className="text-sm lg:text-base text-gray-400">Copyright © 2022 ParkNParcel</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-2 lg:space-y-0 text-center lg:text-right text-gray-400 mb-8 lg:mb-0 ">
            <a href="https://www.parknparcel.com.sg/privacy-policy">Privacy Policy</a>
            <a href="https://www.parknparcel.com.sg/terms-and-conditions">Terms and Conditions</a>
            <a href="https://www.parknparcel.com.sg/disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
