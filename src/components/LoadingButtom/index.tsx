import LoadingButton from "@mui/lab/LoadingButton";
import { SxProps } from '@mui/system';

interface Props {
  children: React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  sx?: SxProps | undefined;
}

const LoadingButtonMui: React.FC<Props> = (props: Props) => {
  const { children, loading, type, variant, sx } = props;

  const inputProps = {
    loading,
    type,
    variant,
    sx,
  };
  return <LoadingButton {...inputProps}>{children}</LoadingButton>;
};

export default LoadingButtonMui;
