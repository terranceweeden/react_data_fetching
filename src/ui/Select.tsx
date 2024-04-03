import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SelectContext {
  activeOption: string;
  setActiveOption: (key: string) => void;
}

const SelectContext = createContext<SelectContext | undefined>(undefined);

interface SelectProps extends PropsWithChildren {}

// const Select = ({ children, className }: SelectProps) => {
const Select = ({ children }: SelectProps) => {
  const [activeOption, setActiveOption] = useState<string>("");

  return (
    <SelectContext.Provider value={{ activeOption, setActiveOption }}>
      {/* <select className={cn(className)}>{children}</select> */}
      <select>{children}</select>
    </SelectContext.Provider>
  );
};

interface OptionProps extends PropsWithChildren {
  key: string;
  value: string;
}

const Option = ({ key, children }: OptionProps) => {
  const { activeOption, setActiveOption } = useSelectContext();

  const isActive = activeOption === key;
  const classname = `p-2 ${isActive ? "bg-gray-500" : "bg-white"}`;

  return (
    <option
      //   className={className}
      value={key}
      onClick={() => setActiveOption(key)}
    >
      {children}
    </option>
  );
};
Select.Option = Option;

export default Select;

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelectContext should be used within the scope of the Select component"
    );
  }
  return context;
};
