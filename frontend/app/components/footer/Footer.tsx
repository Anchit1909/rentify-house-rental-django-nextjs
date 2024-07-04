function Footer() {
  return (
    <footer className="h-12 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all mt-8">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex justify-center">
          <p className="text-[#9E9E9E] font-poppins text-sm md:text-base">
            © 2024{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-semibold">
              Anchit Sinha.
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
