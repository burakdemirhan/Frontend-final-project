import { FormGroup, Input, Label } from "reactstrap";
import useDark from "../hooks/useDark";

export default function Button() {
  const { darkMode, toggleDarkMode } = useDark();
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <>
      <FormGroup switch>
        <Input type="switch" checked={darkMode} onClick={handleClick} />
        <Label className="text-[#777777]" check>
          {" "}
          {darkMode ? "Light Mode" : "Dark Mode"}{" "}
        </Label>
      </FormGroup>
    </>
  );
}
