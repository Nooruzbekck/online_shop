import { forwardRef } from "react";
import { styled, TextField } from "@mui/material";

export const Input = forwardRef(
  ({ value, onChange, placeholder, ...props }, ref) => {
    return (
      <StyledInput
        value={value}
        fullWidth
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

const StyledInput = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "4px",
  },
  "& .MuiInputBase-input": {
    padding: "12px 16px",
  },
});
