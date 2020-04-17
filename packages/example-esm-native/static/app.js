import React from './esm/react.js';
import ReactDOM from './esm/react-dom.js';
import { Button } from './esm/dnb-ui-lib.min.mjs';

function onLoad() {
  const MyButton = React.createElement(Button, {
    text: 'My Button',
    icon: 'chevron_right',
    on_click: params => {
      console.log('on_click', params);
    },
  });
  ReactDOM.render(MyButton, document.getElementById('app'));
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoad);
} else {
  onLoad();
}
