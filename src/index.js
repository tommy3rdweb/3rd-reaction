// Import dependencies

import React from 'react';
import ReactDOM from 'react-dom';
import ThirdReaction from './components/ThirdReaction';

// Import styles

import css from './styles/style.scss';

//Import sample data
import posts from './data/posts';

//Output

ReactDOM.render(
  <ThirdReaction data={posts} />,
  document.getElementById('content')
);