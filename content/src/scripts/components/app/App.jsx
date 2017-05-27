import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { userClick } from '../../actions';
import Button from '../Button';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
  }

    // componentDidMount() {
    //     document.addEventListener('click', () => {
    //         //console.log(this.props.userClick);
    //        // this.props.dispatch(this.props.userClick);
    //         //actions
    //         this.props.userClick();
    //     });
    // }

    handleOnclick (event) {
      //console.log(this.props.counter);
      alert(this.props.counter);
        this.props.userClick();

    };



  render() {
    return (
        <Button title="Shopping cart" onClick={this.handleOnclick.bind(this)}/>
    );
  }
}

const mapStateToProps = ({testCount}) => {
    if (testCount) {
        return {
            counter: testCount.counter
        }
    }
    return {counter: 0};
}

export default connect(mapStateToProps, {userClick})(App);
