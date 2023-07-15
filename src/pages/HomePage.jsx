import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import "@fontsource/roboto/300.css";
import { NavLink } from "react-router-dom";

export const HomePage = () => {

    return (
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Phonebook
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your all contacts in one place ! LogIn or Register if you
                haven't your account else.. Keep your friends close
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    );
    }
    //   <div className={css.container}>
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //     <h2>Contacts</h2>
    //     <Filter />
    //     <ContactList />
    //   </div>