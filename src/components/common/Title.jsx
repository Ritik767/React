

const Title = ({ title, className }) => {
  return (
    <div className={`w-fit mx-auto ${className}`}>
      <h1 className="text-2xl font-semibold text-blue-500">{title}</h1>
      <div className="h-1 w-full bg-blue-500"></div>
    </div>
  );
};

export default Title;