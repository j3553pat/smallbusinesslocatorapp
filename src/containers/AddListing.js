import { connect } from 'react-redux'
import { addListing } from '../redux/action'
import AddListing from '../components/Addlisting'

const mapStatetoProps = (state) => {
    return {
        listing: state.listing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => 
            dispatch(addListing(listing)),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddListing)