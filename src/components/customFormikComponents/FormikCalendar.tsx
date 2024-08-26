import { ErrorMessage, Field, useField } from "formik";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { PiCalendarFill } from "react-icons/pi";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  strong?: boolean;
  to: boolean;
  validate?: any;
  formik?: any;
  type: string;
}

export const FormikCalendar = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label ? (
        <label >
          {}{" "}
        </label>
      ) : (
        ""
      )}

      <div
        className={`col m-0 p-0 input-group ${
          meta.touched && meta.error && "has-error"
        }`}
      >
        {props.to ? (
          <span className={`input-group-text text-xl bg-skin-primary/25 border-1 border-r-0 border-skin-primary/50 text-skin-primary ${  meta.touched && meta.error && "has-error-icon animate-pulse"}`} id="basic-addon1">
            <IoCalendarNumberSharp />
          </span>
        ) : (
          <span className="input-group-text text-2xl bg-skin-primary/25 border-1 border-r-0 border-skin-primary/50 text-skin-primary" id="basic-addon1">
            <PiCalendarFill />
          </span>
        )}
        <Field
          className="form-control peer relative border-1 border-l-0 border-skin-primary/50 font-semibold focus:z-[5]"
          placeholder=" "
          {...field}
          {...props}
        />
                <div className="absolute z-50 flex right-10 mt-2 w-auto">
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
        </div>{" "}
        <label
          className={`absolute left-14 -top-3 px-2 transition-all duration-300 ease-in-out font-bold cursor-text text-sm bg-skin-cardBody text-skin-primary/60 z-[6]
          `}
        >
          {label}
          {""}
        </label>
      </div>
    </>
  );
};
