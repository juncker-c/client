import './App.css'
import {useLocation} from "react-router-dom";
import {Layout as Admin} from "./components/admin/Layout.jsx";
import {Layout as Front} from "./components/front/Layout.jsx";

function App() {
    document.documentElement.lang = "fr";
    const {pathname} = useLocation();

    return (
        <>
            {pathname.includes("administration") ? <Admin/> : <Front/>}
        </>
    );
}

export default App;
