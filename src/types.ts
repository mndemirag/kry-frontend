export type Service = {
  name: string;
  status: {
    status: string;
    url: string;
  };
};

export type FormInputProps = {
  label: string;
  onChange: (value: string) => void;
};

export type ButtonProps = {
  onClick?: Function;
  type?: "button" | "submit" | "reset";
  children: string;
};

export type ServiceFormDialogProps = {
  onClose: Function;
  onSubmit: (name: string, url: string) => void;
};

export type ServiceTableProps = {
  data: Service[];
  handleDelete: (name: string) => void;
};

export type SnackbarProps = {
  onClose: Function;
  open: boolean;
};
