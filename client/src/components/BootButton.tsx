export enum ButtonType {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
  Success = "btn-success",
  Danger = "btn-danger",
  Warning = "btn-warning",
  Info = "btn-info",
  Light = "btn-light",
  Dark = "btn-dark",
  Link = "btn-link",
}

interface BootButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
  [key: string]: any;
}

function BootButton({ type = ButtonType.Primary, children, ...rest }: BootButtonProps) {
  return (
    <button type="button" className={`btn ${type}`} {...rest}>
      {children}
    </button>
  );
}

export default BootButton;
