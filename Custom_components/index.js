

function Header(){

  return(
  <header> 
  <nav className="nav">
    <img src="./images/Real-Madrid-Symbol.png"  className="nav-logo"></img>
    <h2 className="name">Hala Madrid</h2>
    <ul className="nav-items">
      <li>Team</li>
      <li>Legacy</li>
      <li>Shop</li>
    </ul>
    </nav>
  </header>
  )
}

function Footer(){
  return(
    <footer className="footer">
      <small>&#169; 20xx Luchitha development. All rights reserved</small>
    </footer>

  )
}
//function name must use Pascal case to be returned as react elements
function MainContent(){  
  return(
    <div className="main-content">
        <h1 className="topic">Why Real Madrid are the Kings of Europe</h1>
        {/*
        <ul className="reasons">
          <li>  Most Laligas</li>
          <li>15 UCLs
            </li>
          <li>Most club world cups</li>
        </ul>
        */}
    </div>


  )
}

function CustomComp(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      
    </div>
  )
}

ReactDOM.render(<CustomComp/>, document.getElementById("root"))