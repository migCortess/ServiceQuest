import { useCompanyTheme } from "../../store";

export const useTheme = () => {
  const { companyTheme, setCompanyTheme} = useCompanyTheme();

  const UpdateCompanyTheme = async (theme: string) => {
    setCompanyTheme(theme);
  };

  return {
    //Properties
    companyTheme,
    //Methods
    UpdateCompanyTheme,
  };
};
