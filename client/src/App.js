import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBookFormPage from "./pages/AddBookFormPage";
import BookListPage from "./pages/BookListPage";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AddBookFormPage />} />
          <Route path="/bookList" element={<BookListPage />} />
          <Route path="*" element={<ErrorPage />}/>
          </Routes>
    </Router>
  )
}

export default App;
