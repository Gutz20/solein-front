import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <img
        className="opacity-30 absolute h-[150%]"
        src="https://ielektro.es/wp-content/uploads/2023/07/Las-mejores-practicas-para-optimizar-la-energia-solar-en-verano-segun-los-expertos.jpg"
      ></img>

      <div className="flex justify-between py-4 px-10 absolute">
        <img
          className=" px-0 py-1 h-[120px] w-auto aspect-ratio-4/3 float-left"
          src="/src/components/images/logo_solein.png"
        ></img>
      </div>

      <div className="flex justify-end">
        <nav className="flex sm:justify-center space-x-4 py-8 px-10 gap-3">
          {linksNavar.map(({ label, path }) => (
            <Link
              to={path}
              className="relative rounded-lg px-3.5 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
