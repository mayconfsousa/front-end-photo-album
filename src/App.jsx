import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox';
import AlbumGrid from './components/AlbumGrid';
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
        <div id="wrapper">
          <Sidebar active={this.state.sidebarActive} />
          <section id="content">
            <SearchBox />
            <AlbumGrid />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
