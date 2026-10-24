export const variants = {
  primary: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  destroy: "bg-red-100 text-red-700 hover:bg-red-200",
  disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
};

export const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export interface ButtonBakProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "destroy" | "disabled";
  size: "sm" | "md" | "lg";
}

export default function ButtonBak({
  variant,
  size,
  className = "",
  disabled,
  children,
  ...rest
}: ButtonBakProps) {
  return (
    <button
      type="button"
      className={`min-w-[100px] rounded-md font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={variant === "disabled" || disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
