import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
