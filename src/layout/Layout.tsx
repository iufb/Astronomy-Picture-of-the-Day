import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GetPictureForm } from "../componets/GetPictureForm";
import { PoweredBy } from "../componets/PoweredBy";
import { Logo } from "../ui";
import { ArrowIcon } from "../ui/icons/ArrowIcon";
import { constants } from "../helpers/constants";
import { ThemeToggle } from "../componets/ThemeToggle";
export const Layout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { discover, space } = constants;
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, []);
  return (
    <div className="w-full max-w-[1500px] h-[100vh] mx-auto overflow-hidden text">
      <div className="w-full h-[98%] bg-white dark:bg-baseColor  my-2 grid grid-cols-custom grid-rows-custom">
        <div className="border-r-2 border-b-2 border-baseColor dark:border-white  col-span-2 row-span-2 center ">
          <Link to="/home" className="center">
            <Logo />
          </Link>
        </div>
        <div className="border-baseColor border-b-2 col-span-2  dark:border-white row-span-1 center">
          <h1 className="text-4xl  tracking-wider">
            Astronomy Picture of the Day
          </h1>
        </div>
        <div className="border-baseColor border-b-2 group border-r-2  dark:border-white col-span-1 row-span-1 center px-3 cursor-pointer">
          <h2 className="text-3xl">
            <ThemeToggle />
          </h2>
        </div>
        <div className="  col-span-1 row-span-3 dark:border-white">
          <Outlet />
        </div>

        <div className=" col-span-1 row-span-2 bg-baseColor  dark:bg-white  dark:text-baseColor text-white flex flex-col justify-center items-center">
          {space.map((letter, index) => (
            <h3
              key={index}
              className={`text-9xl font-neueu ${
                index == 0 && "animate-bounce"
              }`}
            >
              {letter}
            </h3>
          ))}
        </div>
        <div className="border-baseColor border-r-2 border-b-2 dark:border-white  col-span-2 row-span-1 center">
          <GetPictureForm />
        </div>
        <div className=" border-baseColor border-r-2 dark:border-white  col-span-1 row-span-1 center px-3">
          <p className=" text-3xl text-center ">{discover}</p>
        </div>
        <div className="  border-baseColor border-r-2 dark:border-white col-span-1 row-span-1 center">
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};
