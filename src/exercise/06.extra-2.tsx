// Styling
// http://localhost:3000/isolated/exercise/06.tsx

import * as React from 'react';
import '../box-styles.css';

function Box(props: React.HTMLAttributes<HTMLDivElement>
  & {
    size?: 'small' | 'medium' | 'large'
  }
) {
  const {
    className = '',
    style = {},
    size,
    children,
  } = props;

  const sizeClassName = size ? `box--${size}` : '';
  const newClassName = `box ${className} ${sizeClassName}`;
  const newStyle = {
    ...style,
    fontStyle: 'italic',
  };

  return (
    <div className={newClassName} style={newStyle}>{children}</div>
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless colorless box</Box>
    </div>
  )
}

export {App}
