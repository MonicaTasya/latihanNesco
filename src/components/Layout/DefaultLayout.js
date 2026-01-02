import { cn } from "../../utils/helpers/cn";

const DefaultLayout = ({
  className,
  decoration = <></>,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        `font-geologica-medium relative mx-auto flex w-full flex-col items-center gap-4 px-4 py-10 sm:px-8 xl:px-30 xl:py-20 2xl:px-60`,
        className
      )}
      {...props}
    >
      {decoration}
      <div className="relative w-full max-w-[1440px]">{children}</div>
    </section>
  );
};

export default DefaultLayout;
