import NasaLogoUrl from "../../assets/nasaLogo.png";
export const NasaLogo = (): JSX.Element => {
  const api = "{ APIs }";
  return (
    <div className="flex gap-2 items-center">
      <img src={NasaLogoUrl} alt="NasaApi" width={50} height={50} />
      <h2 className="text-3xl">{api}</h2>
    </div>
  );
};
