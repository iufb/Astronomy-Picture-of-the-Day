import { LogoIcon } from "./LogoIcon";

export const Logo = (): JSX.Element => {
  return (
    <>
      {Array(5)
        .fill(true)
        .map((_, index) => (
          <LogoIcon key={index}  />
        ))}
    </>
  );
};
