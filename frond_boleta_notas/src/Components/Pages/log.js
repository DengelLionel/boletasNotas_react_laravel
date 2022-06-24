// Login.js
import { useRef, useState, useEffect } from "react";
import axios from "axios"
const SignIn = () => {
  

  

  let LOGIN_URL ="http://localhost:8000/account"

 
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>{/* <a href="#">Go to Home</a> */}</p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form className="p-12 md:p-24 " onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default SignIn;