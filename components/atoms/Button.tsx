import React from 'react';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  disabled = false,
  isLoading = false,
  onClick,
  style = {},
}) => {
  const baseClasses = "focus:outline-none rounded text-white font-bold focus:ring-2 focus:ring-opacity-50";
  const sizeClasses = {
    small: "text-xs px-3 py-2",
    medium: "text-sm px-3 py-2",
    large: "text-md px-3 py-2",
  };
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-blue-300 hover:bg-gray-400 text-gray-800 focus:ring-gray-300",
    tertiary: "bg-transparent hover:bg-gray-900 hover:text-grey-300 text-blue-500 border border-blue-500 hover:border-blue-600",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      onClick={onClick}
      style={style}
    >
      {isLoading ? 'Loading...' : children}

    </button>
  );
};

export default Button;
