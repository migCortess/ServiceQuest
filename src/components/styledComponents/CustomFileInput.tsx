import styled from "styled-components";

// const FileInputContainer = styled.label`
//   display: inline-block;
//   padding: 8px 12px;
//   background-color: #f0f0f0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: inherit;
//   cursor: pointer;
// `;

const FileInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  accept: string | undefined;
  multiple: boolean | undefined;
  id: string | undefined;
}

const CustomFileInput = ({ onChange, accept, multiple, label, id }: Props) => {
  return (
    <label className="btn btn-tw-primary flex w-full justify-center">
      <span>
        {" "}
        <i className="i-upload">{label}</i>
      </span>
      <FileInput
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        id={id}
      />
    </label>
  );
};

export default CustomFileInput;
