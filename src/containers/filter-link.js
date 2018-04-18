import { connect } from 'react-redux'
import Link from '../components/link'
import { setVisibilityFilter } from '../actions'

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)