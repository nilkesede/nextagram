import React from 'react';
import NextHead from 'next/head';
import {string} from 'prop-types';

const Head = props => {
  const {title, description, url, image} = props;

  return (
    <NextHead>
      <meta charSet="UTF-8"/>
      <title>{title}</title>

      <meta name="description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
      <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>
      <link rel="icon" href="/static/favicon.ico"/>

      <meta property="og:url" content={url}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>

      <meta name="twitter:site" content={url}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content={image}/>

      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
    </NextHead>
  );
};

Head.defaultProps = {
  title: '',
  description: '',
  url: '',
  image: ''
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  image: string
};

export default Head;
