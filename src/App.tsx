import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  componentDidMount() {
    this.setTheme();
  }

  setTheme() {
    const body = document.querySelector('body');
    if (body == null) {
      return;
    }
    if (
      window.matchMedia('(prefers-color-scheme: dark)').media !==
      '(prefers-color-scheme: light)'
    ) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  render() {
    return (
      <section tabIndex={0}>
        <h2>Demo React App!</h2>
      </section>
    );
  }
}
