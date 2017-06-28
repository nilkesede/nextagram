import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  title = 'Nextagram';

  render() {
    return (
      <div>
        <Head title={this.title}/>
        <h1>{this.title}</h1>
      </div>
    );
  }
}
