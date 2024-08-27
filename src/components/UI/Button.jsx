import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({
  children,
  onClick,
  width,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      width={width}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)({
  width: "344px",
  padding: "15px",
  backgroundColor: "#121314",

  "&:hover": {
    backgroundColor: "#33383d",
  },
});
