import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectisFetching } from "../../redux/shop/shop.selectors";

import withSpinner from "../with-spinner/with-spinner.component";
import collectionOverviewComponent from "./collection-overview.component";

import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectisFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionOverviewComponent);


export default CollectionOverviewContainer;