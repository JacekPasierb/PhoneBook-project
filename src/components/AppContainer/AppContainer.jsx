import { useAuth } from "../Hooks/useAuth";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";

import { UserMenu } from "../../components/userMenu/UserMenu";
import css from "./AppContainer.module.css";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,  }}>
              <Navigation />
            </Typography>

            {isLoggedIn ? (
              <div>
                <UserMenu />
              </div>
            ) : (
              <div>
                  <AuthNav  />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>

    // <header className={css.header}>

    //    <Navigation />
    //   {  isLoggedIn ?
    //     <div>
    //       <UserMenu/>
    //     </div>
    //    :
    //     <div>

    //    <AuthNav/>
    //     </div>
    //   }
    // </header>
  );
};
