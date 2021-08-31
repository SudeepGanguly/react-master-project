import React, { useState } from 'react';
import './shop.styles.scss';

import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { Route } from 'react-router-dom';
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateShop } from '../../redux/shop/shop.actions';

import withSpinner from '../../Components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;
  state = {
    loading: true
  };

  componentDidMount() {
    const { updateShop } = this.props;
    const collectionRef = firestore.collection('collections');

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crwn-db-3025d/databases/(default)/documents/collections'
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionSnapShotToMap(snapShot);
      updateShop(collectionsMap);
      this.setState({ loading: false });
    });

    // //Async method , returns object , whenever collectionRef updfates or the code is run first time
    // collectionRef.onSnapshot(async snapShot => {
    //   const collectionsMap = convertCollectionSnapShotToMap(snapShot);
    //   updateShop(collectionsMap);
    //   this.setState({ loading: false });

    // });
  };

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page' >
        <Route exact path={`${match.path}`}
          render={
            (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  updateShop: collectionsMap => dispatch(updateShop(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);