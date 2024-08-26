import { useNavMenuStore } from "../../store/NavMenu/useNaveMenu";

export const useNavMenu = () => {
    const {navMenu, setNavMenu} = useNavMenuStore();
    
    const UpdateNavMenu = async (navMenu: {
        nav1: boolean;
        nav2: boolean;
        nav3: boolean;
        nav4: boolean;
      }) => {
        setNavMenu(navMenu);
    }

    return{
        //Propiertes
        navMenu,

        //Methods
        UpdateNavMenu,
    }

}