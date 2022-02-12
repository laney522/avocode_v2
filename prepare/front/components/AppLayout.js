import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/"><a>avocode</a></Link>
        <Link href="/profile"><a>profile</a></Link>
        <Link href="/signup"><a>signup</a></Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;