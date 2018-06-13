import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarActive: false };
  }

  componentDidMount() {
    window.addEventListener('resize', this.hideSidebar);
  }

  toggleSidebar = () => this.setState({ sidebarActive: !this.state.sidebarActive });
  hideSidebar = () => this.setState({ sidebarActive: false });

  render() {
    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar active={this.state.sidebarActive} />
      </div>
    );
  }
}

export default App;
