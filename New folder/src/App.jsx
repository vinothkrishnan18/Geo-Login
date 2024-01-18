import React from 'react'
import './style.css'

function App() {
  return (
    <>
    <main>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="index.html" autocomplete="off" className="sign-in-form">
           
            <div className="logo">
              <img src="./img/gmt.png" alt="easyclass"/>
              <h2>Geo Mitraa</h2>
            </div>

            <div className="heading">
              <h2>Welcome Back</h2>
              <h6>Not registred yet?</h6>
              <a href="#" className="toggle">Sign up</a>
            </div>

            <div className="actual-form">
              <div className="input-wrap">
                <input
                  type="text"
                  minlength="4"
                  className="input-field"
                  autocomplete="off"
                  required
                />
                <label>Username</label>
              </div>

              <div className="input-wrap">
                <input
                  type="password"
                  minlength="4"
                  className="input-field"
                  autocomplete="off"
                  required
                />
                <label>Password</label>
              </div>

              <input type="submit" value="Sign In" className="sign-btn" />

              <p className="text">
                Forgotten your password or you login datails?
                <a href="#">Get help</a> signing in
              </p>
            </div>
          </form>

          <form action="index.html" autocomplete="off" className="sign-up-form">
            <div className="logo">
              <img src="/gmt.png" alt="easyclass" />
              <h2>Geo Mitraa</h2>
            </div>

            <div className="heading">
              <h2>Get Started</h2>
              <h6>Already have an account?</h6>
              <a href="#" className="toggle">Sign in</a>
            </div>

            <div className="actual-form">
              <div className="input-wrap">
                <input
                  type="text"
                  minlength="4"
                  className="input-field"
                  autocomplete="off"
                  required
                />
                <label>Name</label>
              </div>

              <div className="input-wrap">
                <input
                  type="email"
                  className="input-field"
                  autocomplete="off"
                  required
                />
                <label>Email</label>
              </div>

              <div className="input-wrap">
                <input
                  type="password"
                  minlength="4"
                  className="input-field"
                  autocomplete="off"
                  required
                />
                <label>Password</label>
              </div>

              <input type="submit" value="Sign Up" className="sign-btn" />

              <p className="text">
                By signing up, I agree to the
                <a href="#">Terms of Services</a> and
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>

        <div className="carousel">
          <div className="images-wrapper">
            <img src="/image1.jpg" className="image img-1 show" alt="" />
            <img src="/image2.jpg" className="image img-2" alt="" />
            <img src="/image3.jpg" className="image img-3" alt="" />
          </div>

          <div className="text-slider">
            <div className="text-wrap">
              <div className="text-group">
                <h2>IT Consulting</h2>
                <h2> Project Management Service</h2>
                <h2>Web & Mobile application development</h2>
              </div>
            </div>

            <div className="bullets">
              <span className="active" data-value="1"></span>
              <span data-value="2"></span>
              <span data-value="3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </>
  )
}

export default App
