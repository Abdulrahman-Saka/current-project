import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-500">
          Hello, Tailwind CSS with React!
        </h1>
      </div>
    </div>
  );
}

export default App;
