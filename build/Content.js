let Content = React.createClass({displayName: "Content",
  render: function() {
    return (
      React.createElement("div", {className: "content"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
export { Content };
