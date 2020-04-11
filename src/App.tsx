import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
 componentDidMount(){
   this.setTheme();
 }
  setTheme() {
      if (window.matchMedia('(prefers-color-scheme: dark)').media === '(prefers-color-scheme: dark)') {
        document.querySelector('body')?.classList.add('dark-theme');
      }
      else  {
          document.querySelector('body')?.classList.remove('dark-theme');
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
