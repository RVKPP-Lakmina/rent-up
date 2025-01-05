import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./component/nav-bar/NavBar";
import Footer from "./component/footer/Footer";
import { Outlet } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;
