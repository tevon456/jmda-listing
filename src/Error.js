import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/error.css"

// Returns 404 when route doesnt match url.
class Error extends React.Component{


render() {
  return <div className="error">
    <h1>404!</h1>
    <h4>We're sorry we could'nt find that page: </h4>
    
    <p>You may have mistyped the address: <b>https://zx501qml5x.codesandbox.io</b><span className="location">{window.location.pathname}</span><br /> or the page may have been moved. In any event you can always visit our homepage.</p>
     <Link to="/">Go to Homepage</Link>
  </div>
}
}

export default Error
