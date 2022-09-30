import "../src/scss/App.scss";
import Header from "./partials/Header";
import Content from "./partials/Content";
import Subcontent from "./partials/Subcontent";
import Footer from "./partials/Footer";

function App() {
    return (
        <div className='App '>
            <Header />
            <Content />
            <Subcontent />
            <Footer />
        </div>
    );
}

export default App;
