export enum AlertType {
  Primary = "alert-primary",
  Secondary = "alert-secondary",
  Success = "alert-success",
  Danger = "alert-danger",
  Warning = "alert-warning",
  Info = "alert-info",
  Light = "alert-light",
  Dark = "alert-dark",
}

interface AlertProps {
  children: React.ReactNode;
  type?: AlertType;
  onClose?: () => void;
  [key: string]: any;
}

function SimpleAlert({ children, type = AlertType.Primary, onClose, ...rest }: AlertProps) {
  return (
    <div className={`alert ${type} alert-dismissible fade show`} role="alert">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default SimpleAlert;
