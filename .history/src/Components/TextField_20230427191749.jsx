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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "8ch", height: "2ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
