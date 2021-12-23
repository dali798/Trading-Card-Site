'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <p>Welcome! Welcome!</p>
    <a href="/cards">Cards Page</a>
    <br/>
    <img src="/static/img/balloonicorn.jpg"/> 
    
  </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
