const Icon = ({
  id,
  width = "28px",
  height = "28px",
  color = "text-current",
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={`${color} fill-current ${className}`}
      onClick={onClick}>
      <use href={`/cyprus-sprate.svg#${id}`} />
    </svg>
  );
};

export default Icon;
