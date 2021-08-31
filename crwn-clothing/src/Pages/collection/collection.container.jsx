import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { selectisCollectionLoaded } from "../../redux/shop/shop.selectors";

import CollectionPage from './collection.component';
import withSpinner from "../../Components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectisCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;