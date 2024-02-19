import Presentation from "./Presentation";
import Realisations from './Realisations';
import RealisationsPage from "./RealisationsPage";
import CitationA from './CitationA';
import Contact from "./Contact";

import { Link } from "react-router-dom";

// import Container from "@mui/material";

// import useFetch from "./usefetch";
// import Container from '@material-ui/core/Container';



const Home = () => {
    // const {data:blogs, isPending, error}= useFetch('http://localhost:8000/blogs');
    return (
        // <Container>
            <div className="home">
                {/* {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>} */}
                <Presentation/>
                <CitationA/>
                <Realisations/>
                <div className="to-realisations">
                    <Link to="/RealisationsPage"><button>Toutes les réalisations</button></Link> 
                </div>
                <div id="contact">
                    <Contact></Contact>
                </div>
            </div>
        // </Container>
        
    );
}
 
export default Home;