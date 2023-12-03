import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Navigation from "./components/navigation";
import DeliverItem from "./pages/deliverItem";
import BookDelivery from "./pages/bookDelivery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deliver_product" element={<DeliverItem />} />
          <Route path="/book_delivery" element={<BookDelivery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
