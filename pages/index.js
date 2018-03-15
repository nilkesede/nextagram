import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  render() {
    const title = '▲ Nextagram';
    const description = 'A next app!';

    return (
      <div>
        <Head title={title} description={description}/>

        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
