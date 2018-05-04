import React from 'react';

// const Nav = () => (
//   <header className='App-header'>
//     <h1 className='App-title'>Hello Lerna React</h1>
//   </header>
// )

const Nav = React.createElement('div', null,
  React.createElement('h1', null, 'Hello Lerna')
)

export default Nav
