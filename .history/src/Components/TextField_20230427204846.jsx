import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const currencies = [
  {
    value: "USD",
    label: "% off",
  },
  {
    value: "EUR",
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
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
