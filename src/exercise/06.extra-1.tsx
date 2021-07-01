// Styling
// http://localhost:3000/isolated/exercise/06.tsx

import * as React from 'react';
import '../box-styles.css';

function Box(props: React.HTMLAttributes<HTMLDivElement>) {
  const {
    className = '',
    style = {},
    children,
  } = props;

  const newClassName = `box ${className}`;
  const newStyle = {
    ...style,
    fontStyle: 'italic',
  }

  return (
    <div className={newClassName} style={newStyle}>{children}</div>
  );
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>
        sizeless colorless box
      </Box>
    </div>
  )
}

export {App}
