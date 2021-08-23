import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div >
)

// const mapStateToProps = (state) => {
//   return {
//     hidden: state.cart.hidden
//   }
// }

// export default connect(mapStateToProps)(CartDropdown);

export default CartDropdown;