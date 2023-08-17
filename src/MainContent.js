import React from 'react'

const MainContent = () => {
  return (
    <div>
              {/* Masthead*/}
        <header className="masthead" style={{height: "100vh"}}>
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Studio!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="/services">Tell Me More</a>
            </div>
        </header>
    </div>
  )
}

export default MainContent
