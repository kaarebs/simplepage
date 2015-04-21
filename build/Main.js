var RightContent = React.createClass({displayName: "RightContent",
  render: function() {
    return (
    React.createElement("div", {className: "container"}, 
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-6"}, 
        React.createElement("h1", null, "Programming")
        )
      )
    )
        )
  }
});
var LeftContent = React.createClass({displayName: "LeftContent",
  information: function() {
    return [
      {key: "Address", value: "Aarhus C - Denmark."},
      {key: "Education", value: "M.Sc. in Computer Science."},
      {key: "Girlfriend", value: "Yes I have."},
      {key: "Football player", value: "Yes I am."},
      {key: "Linkedin", value: React.createElement("a", {href: 'https://dk.linkedin.com/pub/k%C3%A5re-br%C3%B8gger-s%C3%B8rensen/31/38a/31a'}, React.createElement("i", {className: "fa fa-linkedin"}))},
      {key: "Twitter", value: React.createElement("a", {href: 'https://twitter.com/kaarebs'}, React.createElement("i", {className: "fa fa-twitter"}))},
      {key: "Github", value: React.createElement("a", {href: 'https://github.com/kaarebs'}, React.createElement("i", {className: "fa fa-github"}))},
      {key: "Facebook", value: React.createElement("a", {href: 'https://facebook.com/kaares'}, React.createElement("i", {className: "fa fa-facebook-official"}))},
    ];
  },
  render: function() {
    return (
    React.createElement("div", {className: "container"}, 
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-6"}, 
        React.createElement("h1", null, "About Me"), 
        React.createElement("ul", {style: {listStyle: 'none'}}, 
        this.information().map(function(item)  {
          return React.createElement("li", null, item.key, " : ", item.value)
        })
        )
        )
      )
    )
    )
  }
});
var Content = React.createClass({displayName: "Content",
  render: function() {
    headerStyle = {textAlign: 'center', borderBottom: '1px solid'};
    imageStyle = {marginRight: '30%', borderRadius: '40px', border:'2px solid'};
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {style: headerStyle, className: "col-md-12"}, 
            React.createElement("img", {style: imageStyle, src: '../pictures/mig.jpg'}), 
            React.createElement("br", null), React.createElement("br", null)
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {style: headerStyle, className: "col-md-12"}, 
          React.createElement("p", {style: {marginRight: '30%', marginTop: '12px'}}, " Kåre Brøgger Sørensen ", React.createElement("br", null), 
          React.createElement("a", {href: "mailto:kaarebs@gmail.com"}, "kaarebs@gmail.com")
          )
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-6"}, 
          React.createElement(LeftContent, null)
          ), 
          React.createElement("div", {className: "col-md-6"}, 
          React.createElement(RightContent, null)
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(Content, null), document.getElementById('mainContainer')
);
