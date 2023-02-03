import { ButtonProps } from "./Button.props";

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className} w-fit h-full px-4 py-2 bg-baseColor text-white dark:bg-white dark:text-baseColor line-through  text-2xl hover:scale-105 transition hover:ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
};
