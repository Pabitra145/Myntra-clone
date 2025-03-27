const Bag = () => {
    return(
<div class="bag-page">
        <div class="bag-items-container"></div>
        <div class="bag-summary">
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (0 Items) </div>


    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹0</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>


      <span class="price-item-value priceDetail-base-discount">-₹0</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹99</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>


  </button>
  </div>
      </div>    
      )
}
export default Bag