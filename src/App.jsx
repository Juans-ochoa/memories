import "./App.css";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <Posts />
        <Form />
      </main>
    </>
  );
}

export default App;
