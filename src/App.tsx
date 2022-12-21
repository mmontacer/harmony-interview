import "./index.css";

import ErrorComponent from "./components/ErrorComponent";
import AuthForm from "./components/AuthForm";
import Head from "./components/Head";

function App() {
  return (
    <body className="app">
      <Head/>
      <div className="form-wrapper">
        <h1>
          Welcome to the <span>Harmony</span> technical interview !
        </h1>
        <AuthForm />
        <h2>The correct password is : password</h2>
      </div>
      
    </body>
  );
}

export default App;
