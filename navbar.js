// Currency in large device ----- Currency in large device ----- Currency in large device -----//
// ----- START ---------- START ---------- START ------------- START ----------- START ---------//

const currencyIcon = document.getElementById("currency-icon");
currencyIcon.addEventListener("click", toggleCurrencyMenu);

const currencyItems = document.querySelectorAll(".currency-item");

for (let i = 0; i < currencyItems.length; i++) {
  currencyItems[i].addEventListener("click", (event) => {
    selectCurrency(event.currentTarget.innerText);
  });
}

// Selecting the currency in large device
function selectCurrency(currency) {
  const currencyElement = document.getElementById("currency");
  currencyElement.innerHTML = currency;
  toggleCurrencyMenu();
}

// toggling the currency dropdown in large device
function toggleCurrencyMenu() {
  const currencyMenu = document.getElementById("currencyMenu");
  currencyMenu.classList.toggle("hidden");
  document.getElementById("cart-box").classList.add("hidden");
}

// Currency in large device ----- Currency in large device ----- Currency in large device -----//
// ----- END ---------- END ---------- END ------------- END ----------- END ---------END ----//

// ------------------------------------------------------------------------------------------------//

// Currency in Mobile device ----- Currency in Mobile device ----- Currency in Mobile device -----//
// ----- START ---------- START ---------- START ------------- START ----------- START --------- //

// Open currency icon
const currencyIconMobile = document.getElementById("currency-icon-mobile");
currencyIconMobile.addEventListener("click", toggleCurrencyMenuMobile);

// All the currencies
const currencyItemsMobile = document.querySelectorAll(".currency-item-mobile");

for (let i = 0; i < currencyItemsMobile.length; i++) {
  currencyItemsMobile[i].addEventListener("click", (event) => {
    selectCurrencyMobile(event.currentTarget.innerText);
  });
}

// Selecting the currency for mobile
function selectCurrencyMobile(currency) {
  const currencyElement = document.getElementById("currencyMobile");
  currencyElement.innerHTML = currency;
  toggleCurrencyMenuMobile();
}

// Toggling the currency dropdown in mobile device
function toggleCurrencyMenuMobile() {
  const currencyMenu = document.getElementById("currencyMenuMobile");
  currencyMenu.classList.toggle("hidden");
}

// Currency in Mobile device ----- Currency in Mobile device ----- Currency in Mobile device -----//
// ----- END ---------- END ---------- END ------------- END ----------- END ---------END ----//

// ------------------------------------------------------------------------------------------------//

// Cart Box in Large device ----- Cart Box in Large device ----- Cart Box in Large device -----//
// ----- START ---------- START ---------- START ------------- START ----------- START ---------//

const cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", toggleCartBoxInLargeDevice);

// Showing the cart box in large device
function toggleCartBoxInLargeDevice() {
  document.getElementById("currencyMenu").classList.add("hidden");
  const cartBox = document.getElementById("cart-box");
  cartBox.classList.toggle("hidden");
}

// Increasing cart items and calculating sub-total and total price
const cartMinusIconButtons = document.querySelectorAll(".cart-minus-icon");
const cartPlusIconButtons = document.querySelectorAll(".cart-plus-icon");
const cartItemQuantityFields = document.querySelectorAll(".cart-item-quantity");
const cartItemsPrice = document.querySelectorAll(".cart-item-price");

// For Cart Minus Button
for (let i = 0; i < cartMinusIconButtons.length; i++) {
  cartMinusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode;
    const itemPrice = parseInt(
      theItemCard.querySelector(".cart-item-price").innerText
    );
    const itemsQuantityField = buttonsParentBox.querySelector(
      ".cart-item-quantity"
    );
    const itemsQuantity = parseInt(
      buttonsParentBox.querySelector(".cart-item-quantity").innerText
    );
    if (itemsQuantity == 0) {
      alert("Can't be reduced!");
    } else if (itemsQuantity > 0) {
      itemsQuantityField.innerText = itemsQuantity - 1;
      calculateTotal();
      calculateSubTotal();
    }
  });
}

// For Cart Plus Button
for (let i = 0; i < cartPlusIconButtons.length; i++) {
  cartPlusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode;
    const itemPrice = parseInt(
      theItemCard.querySelector(".cart-item-price").innerText
    );
    const itemsQuantityField = buttonsParentBox.querySelector(
      ".cart-item-quantity"
    );
    const itemsQuantity = parseInt(
      buttonsParentBox.querySelector(".cart-item-quantity").innerText
    );
    itemsQuantityField.innerText = itemsQuantity + 1;
    calculateTotal();
    calculateSubTotal();
  });
}

// Calculating Total
function calculateTotal() {
  const cartsTotalField = document.querySelector("#carts-total");
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const itemPrice = parseInt(
      cartItems[i].querySelector(".cart-item-price").innerText
    );
    const itemQuantity = parseInt(
      cartItems[i].querySelector(".cart-item-quantity").innerText
    );
    total += itemPrice * itemQuantity;
  }
  cartsTotalField.innerText = total;
}

// Calculating SubTotal
function calculateSubTotal() {
  const cartsSubTotalField = document.querySelector("#carts-subTotal");
  const cartItems = document.querySelectorAll(".cart-item");
  let subTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const itemPrice = parseInt(
      cartItems[i].querySelector(".cart-item-price").innerText
    );
    const itemQuantity = parseInt(
      cartItems[i].querySelector(".cart-item-quantity").innerText
    );
    subTotal += itemPrice * itemQuantity;
  }
  cartsSubTotalField.innerText = subTotal;
}


// Adding promo code field in large device

const addPromoCodeBtn = document.getElementById('add-promo-code');
addPromoCodeBtn.addEventListener('click', () => {
  const promoCodeField = document.getElementById('promo-code-field');
  promoCodeField.classList.toggle('hidden');
});


// Adding promo code field in Mobile device

const addPromoCodeBtnMobile = document.getElementById('add-promo-code-mobile');
addPromoCodeBtnMobile.addEventListener('click', () => {
  const promoCodeFieldMobile = document.getElementById('promo-code-field-mobile');
  promoCodeFieldMobile.classList.toggle('hidden');
});

// Cart Box in Large device ----- Cart Box in Large device ----- Cart Box in Large device -----//
// ----- END ---------- END ---------- END ------------- END ----------- END ---------END ----//

// ---------------------------------------------------------------------------------------------//

// Cart Box in Mobile device ----- Cart Box in Mobile device ----- Cart Box in Mobile device -----//
// ----- START ---------- START ---------- START ------------- START ----------- START --------//

// Toggling cart In Mobile device
const openCartMobileButton = document.getElementById("open-cart-mobile");
openCartMobileButton.addEventListener("click", () => {
  const cartBoxMobile = document.getElementById("cart-box-mobile");
  cartBoxMobile.classList.toggle("hidden");
});

// Increasing cart items and calculating sub-total and total price In Mobile
const cartMinusIconButtonsMobile = document.querySelectorAll(
  ".cart-minus-icon-mobile"
);
const cartPlusIconButtonsMobile = document.querySelectorAll(
  ".cart-plus-icon-mobile"
);
const cartItemQuantityFieldsMobile = document.querySelectorAll(
  ".cart-item-quantity-mobile"
);
const cartItemsPriceMobile = document.querySelectorAll(
  ".cart-item-price-mobile"
);

// For Cart Minus Button In Mobile
for (let i = 0; i < cartMinusIconButtonsMobile.length; i++) {
  cartMinusIconButtonsMobile[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode;
    const itemPrice = parseInt(
      theItemCard.querySelector(".cart-item-price-mobile").innerText
    );
    const itemsQuantityField = buttonsParentBox.querySelector(
      ".cart-item-quantity-mobile"
    );
    const itemsQuantity = parseInt(
      buttonsParentBox.querySelector(".cart-item-quantity-mobile").innerText
    );
    if (itemsQuantity == 0) {
      alert("Can't be reduced!");
    } else if (itemsQuantity > 0) {
      itemsQuantityField.innerText = itemsQuantity - 1;
      calculateTotalMobile();
      calculateSubTotalMobile();
    }
  });
}

// For Cart Plus Button In Mobile
for (let i = 0; i < cartPlusIconButtonsMobile.length; i++) {
  cartPlusIconButtonsMobile[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode;
    const itemPrice = parseInt(
      theItemCard.querySelector(".cart-item-price-mobile").innerText
    );
    const itemsQuantityField = buttonsParentBox.querySelector(
      ".cart-item-quantity-mobile"
    );
    const itemsQuantity = parseInt(
      buttonsParentBox.querySelector(".cart-item-quantity-mobile").innerText
    );
    itemsQuantityField.innerText = itemsQuantity + 1;
    calculateTotalMobile();
    calculateSubTotalMobile();
  });
}

// Calculating Total In Mobile
function calculateTotalMobile() {
  const cartsTotalField = document.querySelector("#carts-total-mobile");
  const cartItemsMobile = document.querySelectorAll(".cart-item-mobile");
  let total = 0;
  for (let i = 0; i < cartItemsMobile.length; i++) {
    const itemPrice = parseInt(
      cartItemsMobile[i].querySelector(".cart-item-price-mobile").innerText
    );
    const itemQuantity = parseInt(
      cartItemsMobile[i].querySelector(".cart-item-quantity-mobile").innerText
    );
    total += itemPrice * itemQuantity;
  }
  cartsTotalField.innerText = total;
}

// Calculating SubTotal In Mobile
function calculateSubTotalMobile() {
  const cartsSubTotalFieldMobile = document.querySelector(
    "#carts-subTotal-mobile"
  );
  const cartItemsMobile = document.querySelectorAll(".cart-item-mobile");
  let subTotal = 0;
  for (let i = 0; i < cartItemsMobile.length; i++) {
    const itemPrice = parseInt(
      cartItemsMobile[i].querySelector(".cart-item-price-mobile").innerText
    );
    const itemQuantity = parseInt(
      cartItemsMobile[i].querySelector(".cart-item-quantity-mobile").innerText
    );
    subTotal += itemPrice * itemQuantity;
  }
  cartsSubTotalFieldMobile.innerText = subTotal;
}

// Cart Box in Mobile device ----- Cart Box in Mobile device ----- Cart Box in Mobile device -----//
// -------- END ----------- END ------------ END ------------- END ------------ END --------//

// ----------Navbar Menu in Mobile device ----------- Navbar Menu in Mobile device ------------//
// ----- Start ---------- Start ---------- Start ------------- Start ----------- Start ------- //

// Toggling navbar menu for mobile devices
const openMenuButton = document.getElementById("openMenu");
const menuList = document.getElementById("menuList");
openMenuButton.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// ----------Navbar Menu in Mobile device ----------- Navbar Menu in Mobile device ------------//
// ------- END ------------ END ------------ END ------------- END ----------- END ----------- //
