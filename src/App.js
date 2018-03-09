import React, {
    Component
} from 'react';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTime:0
    }
    this.handleFooterClick = this.handleFooterClick.bind(this)
  }
    handleFooterClick(time){
      this.setState({currentTime: time})
    }
    render() {
      let {currentTime} = this.state
        return (
          <div>
          <Header currentUsers="Varaphon" isLogin></Header><br/>
            <div> App.js</div>
            <p> currentTime = {currentTime} </p>
          <Footer onTimerClick={this.handleFooterClick}></Footer>
          </div>
        );
    }
}

export default App;
