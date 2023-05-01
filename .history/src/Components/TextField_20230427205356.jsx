import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const discountType = [
  {
    value: "% off",
    label: "% off",
  },
  {
    value: "flat off",
    label: "flat off",
  },
];

export default function SelectTextFields() {
  return (
    <TextField
      id="filled-select-currency"
      select
      defaultValue="% off"
      variant="filled"
    >
      {discountType.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
