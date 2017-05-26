import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userClick } from '../../actions';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
        document.addEventListener('click', () => {
            //console.log(this.props.userClick);
           // this.props.dispatch(this.props.userClick);
            //actions
            this.props.userClick();
        });
    }

  render() {
    return (
            <div>
              Count: {this.props.count}
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.testCount
  }
}


export default connect(mapStateToProps, {userClick})(App);


