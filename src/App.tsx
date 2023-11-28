//f4c752
import { Box, Container } from "@mui/material";
import InfoCard from "./components/InfoCard";

const App = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                bgcolor: "background.paper"
            }}
        >
            <Container maxWidth='sm' sx={{ display: "flex", height: "80vh" }}>
                <InfoCard />
            </Container>
        </Box>
    );
};

export default App;
