const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
