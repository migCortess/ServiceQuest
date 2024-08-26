export const ChangeSupplierPortal = {
  ChangeToNumber: (value: any) =>
    value ? value.toString().replace(/[^0-9.]/g, "") : "",
};

//Quita letras y caracteres deja solo numeros
export const ChangeToNumber = (value: any) =>
  value ? value.toString().replace(/[^0-9\.]/g, "") : "0";
export const ChangeToNumberComma = (value: any) =>
  value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
export const ChangeToNumberCurrencyComma = (value: any) =>
  value
    ? parseFloat(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    : "";

export const ChangeToOnlyNumber = (value: any) =>
  value
    ? (value
        .toString()
        .replace(/[^0-9,.]/g, "")
        .match(/^[0-9]{1,3}([,.][0-9]{1,2})?/) || [])[0] || ""
    : "";
