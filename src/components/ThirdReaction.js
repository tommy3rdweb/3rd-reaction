import React from 'react';

// Import Components
import ThirdReactionList from './ThirdReactionList';

var ThirdReaction = React.createClass({
  render: function() {
    return (
      <div className="ThirdReactionTitle">
      <h1>Hello from ThirdReaction</h1>
      <ThirdReactionList data={this.props.data} />
      </div>
    );
  }
});
export default ThirdReaction;