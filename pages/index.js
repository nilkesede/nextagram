import React from 'react';
import Head from '../components/head';

export default () => {
  const title = 'Nextagram';

  return (
    <div>
      <Head title={title}/>
      <h1>{title}</h1>
    </div>
  );
};
