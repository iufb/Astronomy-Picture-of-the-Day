import { Button, NasaLogo } from "../ui";
import { constants } from "../helpers/constants";
export const PoweredBy = (): JSX.Element => {
  const { aboutNasaApi } = constants;
  return (
    <div className="flex flex-col items-center gap-3  ">
      <h2 className="text-3xl uppercase  underline underline-offset-4 ">
        Powered By
      </h2>
      <NasaLogo />
      <p className="text-xl text-center dark:text-white">{aboutNasaApi}</p>
      <a href="https://api.nasa.gov/" target="_blank">
        <Button>Visit</Button>
      </a>
    </div>
  );
};
