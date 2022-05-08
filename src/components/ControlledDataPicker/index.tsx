import { Control, Controller, FieldError } from "react-hook-form";
import { string } from "yup";
import { DataPicker } from "../DataPicker";
import { Error } from "./styles";

type ControllerProps = {
  control: Control<any>;
  name: string;
  error?: FieldError;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
};

export const ControlledDataPicker = ({
  control,
  name,
  error,
  ...rest
}: ControllerProps) => {
  return (
    <>
      <Controller
        defaultValue=""
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DataPicker value={value} {...rest} onChange={onChange} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
};