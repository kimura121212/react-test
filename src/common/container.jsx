import { connect } from "react-redux";

import { increment, decrement } from "../app/redux/count/actions";

import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);