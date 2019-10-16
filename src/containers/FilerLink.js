import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setVisibilityFilter: dispatch(setVisibilityFilter(ownProps.filter))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
