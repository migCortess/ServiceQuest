import * as EmailServices from "../../services/emailServices/emailServices";
import { useTranslation } from "react-i18next";
import { useSwal } from "../templateHooks/useSwal";
import { useSpinLoadStore } from "../../store/useSpinLoadStore";
// import { Email } from "../../@Types/base";

export const useEmail = () => {
  const { SuccessError } = useSwal();
  const { ShowLoad, HideLoad } = useSpinLoadStore();
  const [t] = useTranslation("global");

  const SendEmail = async (filter: any, Swal: boolean = true) => {
    ShowLoad();
    const res = await EmailServices.SendEmail(filter);
    HideLoad();
    if ((res as any).status === 200) {
      //OK
      Swal
        ? SuccessError("success", t("SupplierPortal.SendEmailSuccess"))
        : null;
    } else {
      SuccessError("error", t("SupplierPortal.SendEmailError"));
    }
    return res;
  };

  return {
    SendEmail,
  };
};
