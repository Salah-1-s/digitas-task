import Select, { SingleValue } from "react-select";
import { OptionValue } from "../../interfaces/select";

import "./styles.css";

interface SelectProps {
  name?: string;
  id?: string;
  options?: OptionValue[];
  placeholder: string;
  onChange: (newValue: SingleValue<OptionValue>) => void;
  disabled?: boolean;
  className?: string;
  keyValue?: number | string;
  selectedOption?: OptionValue | null;
  defaultValue?: OptionValue;
  isClearable?: boolean;
  isSearchable?: boolean;
  defaultOptions?: OptionValue[] | boolean;
  isLoading?: boolean;
}

export default function SelectDropdown({
  disabled = false,
  ...props
}: SelectProps) {
  return (
    <div className={`${props.className} select-input`}>
      <Select
        options={props.options}
        className="select"
        placeholder={props.placeholder}
        onChange={(value) => props.onChange(value)}
        classNamePrefix="select"
        isDisabled={disabled}
        key={props.keyValue}
        value={props.selectedOption}
        isClearable={props.isClearable}
        isSearchable={props.isSearchable ?? true}
        isLoading={props.isLoading}
      />
    </div>
  );
}
