import { cn } from "@/utils/helpers/cn";

const H1G = ({ className, children, ...props }) => (
  <h1
    className={cn("font-geologica-bold text-[58px] leading-[87px]", className)}
    {...props}
  >
    {children}
  </h1>
);

const H2G = ({ className, children, ...props }) => (
  <h2
    className={cn("font-geologica-bold text-[48px] leading-[72px]", className)}
    {...props}
  >
    {children}
  </h2>
);

const H3G = ({ className, children, ...props }) => (
  <h3
    className={cn("font-geologica-bold text-[40px] leading-[60px]", className)}
    {...props}
  >
    {children}
  </h3>
);

const H4G = ({ className, children, ...props }) => (
  <h4
    className={cn("font-geologica-bold text-[34px] leading-[51px]", className)}
    {...props}
  >
    {children}
  </h4>
);

const H5G = ({ className, children, ...props }) => (
  <h5
    className={cn("font-geologica-bold text-[28px] leading-[42px]", className)}
    {...props}
  >
    {children}
  </h5>
);

const H6G = ({ className, children, ...props }) => (
  <h6
    className={cn("font-geologica-bold text-[24px] leading-[36px]", className)}
    {...props}
  >
    {children}
  </h6>
);

const H7G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-medium text-[20px] leading-[30px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B1G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-regular text-[16px] leading-[24px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B2G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-regular text-[14px] leading-[21px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B3G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-regular text-[12px] leading-[18px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B4G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-regular text-[10px] leading-[15px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B5G = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-geologica-regular text-[8px] leading-[12px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const H1K = ({ className, children, ...props }) => (
  <h1
    className={cn(
      "font-komikazoom-regular text-[58px] leading-[87px]",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

const H2K = ({ className, children, ...props }) => (
  <h2
    className={cn(
      "font-komikazoom-regular text-[48px] leading-[72px]",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

const H3K = ({ className, children, ...props }) => (
  <h3
    className={cn(
      "font-komikazoom-regular text-[40px] leading-[60px]",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

const H4K = ({ className, children, ...props }) => (
  <h4
    className={cn(
      "font-komikazoom-regular text-[34px] leading-[51px]",
      className
    )}
    {...props}
  >
    {children}
  </h4>
);

const H5K = ({ className, children, ...props }) => (
  <h5
    className={cn(
      "font-komikazoom-regular text-[28px] leading-[42px]",
      className
    )}
    {...props}
  >
    {children}
  </h5>
);

const H6K = ({ className, children, ...props }) => (
  <h6
    className={cn(
      "font-komikazoom-regular text-[24px] leading-[36px]",
      className
    )}
    {...props}
  >
    {children}
  </h6>
);

const H7K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[20px] leading-[30px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B1K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[16px] leading-[24px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B2K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[14px] leading-[21px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B3K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[12px] leading-[18px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B4K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[10px] leading-[15px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

const B5K = ({ className, children, ...props }) => (
  <p
    className={cn(
      "font-komikazoom-regular text-[8px] leading-[12px]",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

export {
  H1G,
  H2G,
  H3G,
  H4G,
  H5G,
  H6G,
  H7G,
  B1G,
  B2G,
  B3G,
  B4G,
  B5G,
  H1K,
  H2K,
  H3K,
  H4K,
  H5K,
  H6K,
  H7K,
  B1K,
  B2K,
  B3K,
  B4K,
  B5K,
};
