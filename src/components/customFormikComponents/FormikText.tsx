import { ErrorMessage, useField } from "formik";
import { useRef } from "react";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  reactIcon?: string;
  strong?: boolean;
  margin?: boolean;
  [x: string]: any;
}

export const FormikText = ({
  label,
  reactIcon,
  margin = true,
  notIcon= false,
  ...props
}: Props) => {
  const [field, meta] = useField(props);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      {label && margin ? (
        <label
          htmlFor={props.id || props.name}
          className={`${props.strong ? "font-bold absolute" : ""}`}
        >
          {/* {label}{" "} */}
        </label>
      ) : (
        ""
      )}
      <div
        className={`col m-0 p-0 input-group relative ${
          meta.touched && meta.error && ""
        }`}
      >
        {notIcon ? (
          <></>
        ) : (
          <>
            {" "}
            <span
              className="input-group-text border-1 border-skin-primary/50 bg-skin-primary/25 text-skin-primary font-bold"
              id="basic-addon1"
            >
              {reactIcon ? (
                <></>
              ) : (
                <>
                  <i
                    className={`${
                      meta.touched &&
                      meta.error &&
                      "has-error-icon animate-pulse"
                    } ${props.icon}`}
                  ></i>{" "}
                </>
              )}
            </span>
          </>
        )}
        <input
          className={`${
            props.isLarge && "largeField input-no-arrows"
          } peer form-control font-semibold z-auto ${
            meta.touched && meta.error && "bg-skin-cardBody"
          }  border-1 border-skin-primary/50 ${notIcon ? '!rounded-[5px]' : '!rounded-r-[5px]  border-l-0'}  appearance-none`}
          autoComplete="off"
          id={props.name}
          placeholder={" "}
          ref={inputRef}
          {...field}
          {...props}
        />{" "}
        <div className="absolute z-50 flex right-3 mt-2 w-auto">
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
        <div
          className={`absolute left-14 -top-3 px-2 transition-all duration-300 ease-in-out font-bold cursor-text bg-skin-cardBody text-skin-primary/60 z-[5] peer/label w-fit text-xs md:text-sm
          peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:truncate peer-placeholder-shown:w-[70%] peer-placeholder-shown:bg-skin-cardBody peer-placeholder-shown:text-skin-primary/75
          peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-skin-primary/60 `}
          onClick={handleClick}
        >
          {label}
          {""}
        </div>
      </div>
    </>
  );
};
