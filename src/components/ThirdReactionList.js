import React from 'react';

// Import Components
import ThirdReactionPost from './ThirdReactionPost';

var ThirdReactionList = React.createClass({
  render: function() {
      var postNodes = this.props.data.map(function(post) {
      return (
        <ThirdReactionPost data={post} key={post.id} />
      );
    });
    return (
      <div className="row ThirdReactionList">
      <h2>Hello from ThirdReactionList</h2>
      {postNodes}
      </div>
    );
  }
});
export default ThirdReactionList;