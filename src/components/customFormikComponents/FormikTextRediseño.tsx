import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  storng?: boolean;
  [x: string]: any;
}

export const FormikTextRediseño = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}
        className={`${props.strong ? "font-bold" : ""}`}
      >{label} </label>
      <div className="row relative shadow-input rounded-[0.325em]">
        <div
          className={`col m-0 p-0 input-group relative ${
            meta.touched && meta.error && ""
          }`}
        >
          <span className="input-group-text" id="basic-addon1">
            <i
              className={`${meta.touched && meta.error && "has-error-icon animate-pulse"} ${
                props.icon
              }`}
            ></i>
          </span>
          <input
            className={` form-control placeholder:text-[#000]/40 font-semibold ${meta.touched && meta.error && "bg-[#fffbfb]"}`}
            autoComplete="current-pasword"
            id="current-pasword"
            {...field}
            {...props}
          />{" "}
        </div>
        <div
          className="absolute z-50 flex right-0 mt-1 w-auto "
        >
          <ErrorMessage
            name={props.name}
            render={(msg) => (
              <div className="tooltip-container ">
                <i className="i-warning text-danger animate-ping"></i>
                <div className="tooltip">{msg}</div>
              </div>
            )}
            className="i-warning text-danger "
          />
        </div>
        <span className="absolute left-3" ></span>
      </div>
    </>
  );
};
