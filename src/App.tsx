import React, { useState } from "react";
import "./css/login.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ userName: boolean; password: boolean }>({
    userName: false,
    password: false,
  });

  const handleUsernameChange = (event: any) => {
    const value = event.target.value;
    setUsername(value);
    if (value.length < 6 || value.length > 20) {
      setError((val) => {
        return { ...val, userName: true };
      });
    } else {
      setError((val) => {
        return { ...val, userName: false };
      });
    }
  };

  const handlePasswordChange = (event: any) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 8 || value.length > 12) {
      setError((val) => {
        return { ...val, password: true };
      });
    } else {
      setError((val) => {
        return { ...val, password: false };
      });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (error.userName || error.password) {
      alert("Validation Error");
      return;
    }
    alert("Login Success");
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Welcome to Rize</h2>
      </div>
      <div className="right-panel">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            {error.userName && (
              <p className="error">
                {"Username should be less than 6 or greater than 20 character"}
              </p>
            )}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {error.password && (
              <p className="error">
                {"Password should be more than 5 and less than 12 character "}
              </p>
            )}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
