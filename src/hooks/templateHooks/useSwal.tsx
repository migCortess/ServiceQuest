import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "animate.css";
import { isBefore, isEqual, startOfDay } from "date-fns";
import { isMobile } from "../../Constants";

export const useSwal = () => {
  const [t] = useTranslation("global");
  type SwialIcons = "success" | "error" | "warning" | "info" | "question";
  
  const Confirm = async (
    icon: SwialIcons,
    title: string,
    text: string,
    functionConfirm: () => void
  ) => {
    Swal.fire({
      title: title,
      heightAuto: false,
      text: text,
      icon: icon,
      showCancelButton: true,
      cancelButtonText: t("Cancel"),
      confirmButtonColor: "#AE0F65",
      cancelButtonColor: "#d33",
      confirmButtonText: t("ProNumber.Yes"),
    }).then(async (result) => {
      if (result.isConfirmed) {
        await functionConfirm();
      }
    });
  };

  const CustomConfirmCancel = async (
    title: string,
    text: string,
    confirmButton: string,
    cancelButton: string
  ) => {
    let Result;
    await Swal.fire({
      title: title,
      html: text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
      confirmButtonText: confirmButton,
      cancelButtonText: cancelButton,
    }).then((result) => {
      if (result.isConfirmed) {
        Result = true;
      } else {
        if (result.dismiss?.toString() === "backdrop") {
          Result = null;
        } else {
          Result = false;
        }
      }
    });
    return Result;
  };

  const SuccessError = (
    icon: "success" | "error" | "warning" | "info",
    text: string,
    timer = 2000
  ) => {
    Swal.fire({
      position: isMobile ? "center" : "top-end",
      width: 300,
      icon: icon,
      text: text,
      html: `<div style="white-space: pre-line;">${text}</div>`,
      showConfirmButton: false,
      timer: timer,
      backdrop: isMobile
        ? ``
        : `
       rgba(0, 0, 0, 0.4)
         url("https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp")
         center
         no-repeat
        `,
    });
  };

  const ConfirmTextArea = async () => {
    let Result = false;
    let Comment = null;
    const { value: text } = await Swal.fire({
      title: `<strong>${t("ReasonRejection")}</strong>`,
      icon: "warning",
      input: "textarea",
      inputPlaceholder: t("UBill.WriteCommentHere"),
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
      confirmButtonText: t("Accept"),
      cancelButtonText: t("Cancel"),
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return t("PleaseWriteComment");
        }
      },
    });

    if (text) {
      Result = true;
      Comment = text.trim();
    }

    return { Comment: Comment, Button: Result };
  };

  const CustomConfirmTextArea = async (
    title: string,
    textModal: string,
    confirmButton: string,
    cancelButton: string,
    inputValue: string,
    readonly?: boolean,
    PlaceholderTextArea?: string
  ) => {
    let Result: boolean | null = false;
    let Comment = inputValue;
    const inputAttributes: Record<string, string> = readonly
      ? { readonly: "true" }
      : {};
    const { value: text, dismiss: dismiss } = await Swal.fire({
      title: title,
      html: textModal,
      icon: "warning",
      input: "textarea",
      showCancelButton: true,
      inputPlaceholder: PlaceholderTextArea ? PlaceholderTextArea : t(""),
      inputValue: inputValue,
      inputAttributes: inputAttributes,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
      confirmButtonText: confirmButton,
      cancelButtonText: cancelButton,
      inputValidator: (value) => {
        if (!value) {
          return t("UBill.PleaseWriteComment");
        }
      },
    });
    if (text) {
      Result = true;
      Comment = text.trim();
    }
    if (dismiss?.toString() === "backdrop") {
      Result = null;
    }

    return { Comment: Comment, Button: Result };
  };

  const CustomConfirmDatetime = async (
    title: string,
    textModal: string,
    confirmButton: string,
    cancelButton: string,
    inputValue: string,
    readonly: boolean,
    DateValid: any
  ) => {
    let Result: boolean | null = false;
    let Date = inputValue;
    const inputAttributes: Record<string, string> = readonly
      ? { readonly: "true" }
      : {};
    const { value: text, dismiss: dismiss } = await Swal.fire({
      title: title,
      html: textModal,
      icon: "warning",
      input: "date",
      showCancelButton: true,
      inputValue: inputValue,
      inputAttributes: inputAttributes,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
      confirmButtonText: confirmButton,
      cancelButtonText: cancelButton,
      inputValidator: (value) => {
        if (!value) {
          return t("PleaseWriteComment");
        } else {
          const Message = ValidateDate(value, DateValid);
          if (Message) {
            return Message;
          }
        }
      },
    });
    if (text) {
      Result = true;
      Date = text.trim();
    }
    if (dismiss?.toString() === "backdrop") {
      Result = null;
    }
    return { Date: Date, Button: Result };
  };

  const ValidateDate = (value: string, DateValid: any) => {
    let DateValue: any = value.split("-");
    DateValue = new Date(
      parseInt(DateValue[0]),
      parseInt(DateValue[1]) - 1,
      parseInt(DateValue[2])
    );
    DateValue = startOfDay(DateValue);
    if (isBefore(DateValue, DateValid)) {
      if (isEqual(DateValue, DateValid)) {
        return undefined;
      } else {
        return t("UBill.InvalidCheckDate");
      }
    }
    return undefined;
  };

  const SelectSwal = async (
    inputOptions: Record<string, string>,
    EventCallback: (value: string) => void
  ) => {
    await Swal.fire({
      title: t("SelectCompany"),
      input: "select",
      inputOptions: inputOptions,
      allowOutsideClick: false,
      inputValidator: async (value) => {
        await EventCallback(value);
      },
    });
  };

  const MessageWarningConfirm = async (
    icon: "success" | "error" | "warning" | "info",
    title: string,
    HTML: any
  ) => {
    Swal.fire({
      title: title,
      //   heightAuto: false,
      html: HTML,
      icon: icon,
      iconColor: "#510C76",
      confirmButtonColor: "#510C76",
      confirmButtonText: t("SupplierPortal.Confirm"),
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
      width: 800,
    }).then(async (result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return {
    Confirm,
    CustomConfirmCancel,
    SuccessError,
    ConfirmTextArea,
    CustomConfirmTextArea,
    CustomConfirmDatetime,
    SelectSwal,
    MessageWarningConfirm,
  };
};
