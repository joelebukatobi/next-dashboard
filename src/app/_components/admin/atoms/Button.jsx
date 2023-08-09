//
export const Button = ({
  className,
  icon,
  children,
  disabled,
  type,
  onClick,
  ariaHasPopUp,
  dataState,
  ariaExpanded,
  id,
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-haspopup={ariaHasPopUp}
      data-state={dataState}
      aria-expanded={ariaExpanded}
      id={id}
    >
      {children}
      {icon}
    </button>
  );
};
