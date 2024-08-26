import { create } from "zustand";
import { GeneralList } from "../../@Types/base";

export interface GeneralOptions {
  ArrayModality: GeneralList[];
  ArrayCity: GeneralList[];
  ArrayUserByWorkGroup: GeneralList[];
  ArrayCompanyByUser: GeneralList[];
  ArrayCustomerByCompany: GeneralList[];
  ArrayLeafletByModality: GeneralList[];
  onFillModality: (state: GeneralList[]) => void;
  onFillCity: (state: GeneralList[]) => void;
  onFillUserByWorkGroup: (state: GeneralList[]) => void;
  onFillCompanyByUser: (state: GeneralList[]) => void;
  onFillCustomerByCompany: (state: GeneralList[]) => void;
  onFillLeafletByModality: (state: GeneralList[]) => void;
}

export const useGeneralOptionStore = create<GeneralOptions>((set) => ({
  ArrayModality: [],
  ArrayCity: [],
  ArrayUserByWorkGroup: [],
  ArrayCompanyByUser: [],
  ArrayCustomerByCompany: [],
  ArrayLeafletByModality: [],
  onFillModality: (state: GeneralList[]) =>
    set({
      ArrayModality: state,
    }),
  onFillCity: (state: GeneralList[]) =>
    set({
      ArrayCity: state,
    }),
  onFillUserByWorkGroup: (state: GeneralList[]) =>
    set({
      ArrayUserByWorkGroup: state,
    }),
  onFillCompanyByUser: (state: GeneralList[]) =>
    set({
      ArrayCompanyByUser: state,
    }),
  onFillCustomerByCompany: (state: GeneralList[]) =>
    set({
      ArrayCustomerByCompany: state,
    }),
  onFillLeafletByModality: (state: GeneralList[]) =>
    set({
      ArrayLeafletByModality: state,
    }),
}));
