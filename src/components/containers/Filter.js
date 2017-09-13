// container component
import { connect } from 'react-redux';
import ToggleVisibilityFilter from '../ToggleVisibilityFilter';
import { bindActionCreators } from 'redux';
import { setVisibilityFilter } from '../../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setVisibilityFilter}, dispatch)
}


// null for first arg - do not want to subscrbe to state - only has access to dispatch
const Filter = connect(null, mapDispatchToProps)(ToggleVisibilityFilter);
export default Filter;