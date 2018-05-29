import { connect } from 'react-redux';
import Event from './component.js';

const mapStateToProps = state => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps)(Event);
