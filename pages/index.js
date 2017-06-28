import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  render() {
    const title = 'Nextagram';

    return (
      <div>
        <Head title={title}/>
        <h1>{title}</h1>
      </div>
    );
  }
}
