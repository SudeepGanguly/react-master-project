import React, { useState } from 'react';
import './shop.styles.scss';

import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStartsAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartsAsync } = this.props;
    fetchCollectionsStartsAsync();
  };

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page' >
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartsAsync: () => dispatch(fetchCollectionsStartsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);