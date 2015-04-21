var RightContent = React.createClass({
  render: function() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h1>Programming</h1>
        </div>
      </div>
    </div>
        )
  }
});
var LeftContent = React.createClass({
  information: function() {
    return [
      {key: "Address", value: "Aarhus C - Denmark."},
      {key: "Education", value: "M.Sc. in Computer Science."},
      {key: "Girlfriend", value: "Yes I have."},
      {key: "Football player", value: "Yes I am."},
      {key: "Linkedin", value: <a href={'https://dk.linkedin.com/pub/k%C3%A5re-br%C3%B8gger-s%C3%B8rensen/31/38a/31a'}><i className="fa fa-linkedin"></i></a>},
      {key: "Twitter", value: <a href={'https://twitter.com/kaarebs'}><i className="fa fa-twitter"></i></a>},
      {key: "Github", value: <a href={'https://github.com/kaarebs'}><i className="fa fa-github"></i></a>},
      {key: "Facebook", value: <a href={'https://facebook.com/kaares'}><i className="fa fa-facebook-official"></i></a>},
    ];
  },
  render: function() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h1>About Me</h1>
        <ul style={{listStyle: 'none'}}>
        {this.information().map((item) => {
          return <li>{item.key} : {item.value}</li>
        })}
        </ul>
        </div>
      </div>
    </div>
    )
  }
});
var Content = React.createClass({
  render: function() {
    headerStyle = {textAlign: 'center', borderBottom: '1px solid'};
    imageStyle = {marginRight: '30%', borderRadius: '40px', border:'2px solid'};
    return (
      <div className="container">
        <div className="row">
          <div style={headerStyle} className="col-md-12">
            <img style={imageStyle} src={'../pictures/mig.jpg'} />
            <br /><br />
          </div>
        </div>
        <div className="row">
          <div style={headerStyle} className="col-md-12">
          <p style={{marginRight: '30%', marginTop: '12px'}}> K&aring;re Brøgger Sørensen <br/>
          <a href={"mailto:kaarebs@gmail.com"}>kaarebs@gmail.com</a>
          </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <LeftContent />
          </div>
          <div className="col-md-6">
          <RightContent />
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Content />, document.getElementById('mainContainer')
);
