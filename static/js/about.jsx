'use strict';

function About() {
  return (
  <React.Fragment>
    <p>About author!</p>
    <a href="/">Homepage</a>
    <br/>
    <img src="/static/img/shortstack-overflow.jpeg"/> 
    
  </React.Fragment>);
}

ReactDOM.render(<About />, document.querySelector('#about'));
