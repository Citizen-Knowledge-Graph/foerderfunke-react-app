import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ViewportUpdater from "./components/ViewportUpdater";

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Slab, Arial, sans-serif',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ViewportUpdater/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/onboarding" element={<Onboarding/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
