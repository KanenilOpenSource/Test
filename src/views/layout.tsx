import React from 'react';

const Layout = () => {
  return (
    <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <title>Title</title>
    </head>
    <body>
      <div id='root'></div>
      <script src='./bundle.js'></script>
    </body>
    </html>
  );
};
export default Layout;