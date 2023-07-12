import { useAuth } from "../Hooks/useAuth";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";

import { UserMenu } from "../../components/userMenu/UserMenu";
import css from "./AppContainer.module.css";

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
     
       <Navigation /> 
      {  isLoggedIn ?  
        <div>
          <UserMenu/>
        </div>
       : 
        <div>
         
       <AuthNav/>
        </div>
      } 
    </header>
  );
};
