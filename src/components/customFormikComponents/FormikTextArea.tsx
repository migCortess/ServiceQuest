import { ErrorMessage, useField } from "formik";
import { useRef } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  name: string;
  rows: number;
  placeholder?: string;
  strong?: boolean;
  notLabel?: boolean;
  [x: string]: any;
}

export const FormikTextArea = ({
  label,
  notLabel = false,
  ...props
}: Props) => {
  const [field, meta] = useField(props);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      {notLabel && (
        <label
          htmlFor={props.id || props.name}
          className={`${props.strong ? "font-bold" : ""}`}
        >
          {}{" "}
          <ErrorMessage
            name={props.name}
            component="i"
            className="i-warning text-danger"
          />
        </label>
      )}

      <Container
        className={`col m-0 p-0 input-group ${
          meta.touched && meta.error && "has-error"
        }`}
      >
        <span
          className="input-group-text bg-skin-primary/25 border-1 border-r-0 border-skin-primary/75"
          id="basic-addon1"
        >
          <i
            className={`text-skin-primary text-lg ${
              meta.touched && meta.error && "has-error-icon"
            } ${props.icon}`}
          ></i>
        </span>
        <textarea
          className={`relative border-1 border-l-0 border-skin-primary/75 rounded-lg peer ${
            meta.touched && meta.error && "has-error"
          } form-control`}
          placeholder=""
          id={props.name}
          ref={inputRef}
          {...field}
          {...props}
        />
        <div
          className={`absolute left-14 -top-3 px-2 transition-all duration-300 ease-in-out font-bold cursor-text text-sm bg-skin-cardBody text-skin-primary/60 z-[5]
          peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-skin-cardBody peer-placeholder-shown:text-skin-primary/75 peer-placeholder-shown:left-14
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-skin-primary/60`}
          onClick={handleClick}
        >
          {label}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div``;
