type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button 
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={40} height={40} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button;
