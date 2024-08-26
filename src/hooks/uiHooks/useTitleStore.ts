import { useTitleStore } from "../../store";

export const useTitle = () => {
  const { titleName, setTitle } = useTitleStore();

  const UpdateTitle = async (title: string) => {
    setTitle(title);
  };

  return {
    //Properties
    titleName,
    //Methods
    UpdateTitle,
  };
};
