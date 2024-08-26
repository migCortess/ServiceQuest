import * as CompanyService from "../../services/templateServices/companyServices";
export const useCompany = () => {
  const CompanyItem = async (IdCompany: number) => {
    const response = await CompanyService.GetCompanyItem(IdCompany);
    return response;
  };

  return {
    CompanyItem,
  };
};
