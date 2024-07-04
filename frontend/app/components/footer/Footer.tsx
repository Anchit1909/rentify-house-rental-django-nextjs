import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section className="mt-10 py-10 h-16 text-center" id="footer">
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center md:justify-between h-full px-12 md:flex-row">
        <div className="flex items-center text-black font-poppins text-2xl md:text-2xl font-semibold">
          <p>
            <Link href="/">
              Rentify
              <span className="text-airbnb">.</span>{" "}
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[#9E9E9E] font-poppins text-sm md:text-base">
            © 2024{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-semibold">
              Anchit Sinha.
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
