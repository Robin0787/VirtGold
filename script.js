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

// Toggling Category menus under Enjoy Dragonflight Season 2!
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ----------Navbar Menu in Mobile device ----------- Navbar Menu in Mobile device ------------//
// ------- END ------------ END ------------ END ------------- END ----------- END ----------- //

// ------------------------------------------------------------------------------------------- //

// --------- Category Menu in large device ----------- Category Menu in large device -----------//
// ----- Start ---------- Start ---------- Start ------------- Start ----------- Start ------- //

// ---------------------- Selecting category when clicked for large devices  ------------------ //
const categoryItems = document.querySelectorAll(".category-item");
categoryItems[0].classList.add("selected-category");
categoryItems[0].parentNode.classList.add("border-opacity-0");

for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener("click", (event) => {
    // removing selected class from other elements
    categoryItems.forEach((item) => {
      item.parentNode.classList.remove("border-opacity-0");
      item.parentNode.classList.add("border-opacity-10");
      item.classList.remove("selected-category");
    });

    // Add the "selected-category" class to the clicked element
    event.currentTarget.classList.add("selected-category");
    event.currentTarget.parentNode.classList.remove("border-opacity-10");
    event.currentTarget.parentNode.classList.add("border-opacity-0");

    // Adding cards to the cards section
    const text = `${event.target.innerText.split(" ")[0]}`;
    addCards(text);
  });
}

// ---------------------- Selecting category when clicked for mobile devices  ------------------ //
const categoryItemsMobile = document.querySelectorAll(".category-item-mobile");
categoryItemsMobile[0].classList.add("selected-category-mobile");
categoryItemsMobile[0].parentNode.classList.add("border-opacity-0");

for (let i = 0; i < categoryItemsMobile.length; i++) {
  categoryItemsMobile[i].addEventListener("click", (event) => {
    // removing selected class from other elements
    categoryItemsMobile.forEach((item) => {
      item.parentNode.classList.remove("border-opacity-0");
      item.parentNode.classList.add("border-opacity-10");
      item.classList.remove("selected-category-mobile");
    });

    // Add the "selected-category" class to the clicked element
    event.currentTarget.classList.add("selected-category-mobile");
    event.currentTarget.parentNode.classList.remove("border-opacity-10");
    event.currentTarget.parentNode.classList.add("border-opacity-0");

    // Hiding the menu when clicked
    mobileMenu.classList.toggle("hidden");

    // Adding cards to the cards section
    const text = `${event.target.innerText.split(" ")[0]}`;
    addCards(text);
  });
}
// --------- Category Menu in large device ----------- Category Menu in large device -----------//
// ----- END ---------- END ---------- END ------------- END ----------- END ------- //

// ------------------------------------------------------------------------------------------- //

// --------- Filter Menu in large device ----------- Filter Menu in large device -----------//
// ----- Start ---------- Start ---------- Start ------------- Start ----------- Start ------- //

const cardsSection = document.getElementById("cards-section");
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons[0].classList.add("selected");
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", (event) => {
    // Remove the "selected" class from all elements with class "filter-btn"
    filterButtons.forEach((btn) => btn.classList.remove("selected"));

    // Add the "selected" class to the clicked element
    event.currentTarget.classList.add("selected");
    const text = event.target.innerText.toString();
    addCards(text);
  });
}

function addCards(value) {
  cardsSection.innerHTML = `
  <div
    class="absolute top-0 left-1/2 mb-20 mx-auto h-[400px] w-full">
        <i class="fa-solid fa-spinner animate-spin text-[#FCAB00]"></i>
  </div>`;

  if (value.toLowerCase() == "all") {
    setTimeout(() => {
      addAll();
    }, 300);
  } else if (value.toLowerCase() == "wow gold") {
    setTimeout(() => {
      addWowGold();
    }, 300);
  } else if (value.toLowerCase() == "hot offers") {
    setTimeout(() => {
      addHotOffers();
    }, 300);
  } else if (value.toLowerCase() == "dragonflight 10.1.5") {
    setTimeout(() => {
      addDragonFlight();
    }, 300);
  } else if (value.toLowerCase() == "radis") {
    setTimeout(() => {
      addRadis();
    }, 300);
  } else if (value.toLowerCase() == "mythic + dungeons") {
    setTimeout(() => {
      addMythicDungeons();
    }, 300);
  } else if (value.toLowerCase() == "leveling") {
    setTimeout(() => {
      addLeveling();
    }, 300);
  } else if (value.toLowerCase() == "gearing") {
    setTimeout(() => {
      addGearing();
    }, 300);
  } else if (value.toLowerCase() == "world") {
    setTimeout(() => {
      addDragonFlight();
    }, 300);
  } else if (value.toLowerCase() == "wotlk") {
    setTimeout(() => {
      addRadis();
    }, 300);
  } else if (value.toLowerCase() == "dibalo") {
    setTimeout(() => {
      addMythicDungeons();
    }, 300);
  } else if (value.toLowerCase() == "wow") {
    setTimeout(() => {
      addWowGold();
    }, 300);
  } else if (value.toLowerCase() == "destiny") {
    setTimeout(() => {
      addWowGold();
    }, 300);
  } else if (value.toLowerCase() == "final") {
    setTimeout(() => {
      addAll();
    }, 300);
  } else if (value.toLowerCase() == "fifa") {
    setTimeout(() => {
      addLeveling();
    }, 300);
  } else if (value.toLowerCase() == "path") {
    setTimeout(() => {
      addHotOffers();
    }, 300);
  } else if (value.toLowerCase() == "escape") {
    setTimeout(() => {
      addRadis();
    }, 300);
  } else if (value.toLowerCase() == "world") {
    setTimeout(() => {
      addDragonFlight();
    }, 300);
  } else if (value.toLowerCase() == "call") {
    setTimeout(() => {
      addGearing();
    }, 300);
  } else if (value.toLowerCase() == "apex") {
    setTimeout(() => {
      addLeveling();
    }, 300);
  } else if (value.toLowerCase() == "overwatch") {
    setTimeout(() => {
      addMythicDungeons();
    }, 300);
  } else if (value.toLowerCase() == "new") {
    setTimeout(() => {
      addRadis();
    }, 300);
  } else if (value.toLowerCase() == "dibalo") {
    setTimeout(() => {
      addAll();
    }, 300);
  } else if (value.toLowerCase() == "valorant") {
    setTimeout(() => {
      addHotOffers();
    }, 300);
  } else if (value.toLowerCase() == "lost") {
    setTimeout(() => {
      addRadis();
    }, 300);
  } else if (value.toLowerCase() == "runescape") {
    setTimeout(() => {
      addAll();
    }, 300);
  } else {
    setTimeout(() => {
      addAll();
    }, 300);
  }
}

function addAll() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
    <img
      src="https://i.ibb.co/sHL7Nq2/Rectangle-2.png"
      class="h-full w-full"
      alt="item-image"
    />
    <img
      src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
      class="absolute top-0 h-full w-full"
      alt="overlaped image"
    />
    <div
      class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
    >
      <div>
        <button
          class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
        >
          Hot Offer!
        </button>
      </div>
      <div class="text-[#ffffff]">
        <h1 class="text-[17px] leading-[24px] font-[600]">
          WoW Gold
        </h1>
        <p
          class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
        >
          Buy WoW Gold, any amount of gold on Each Realm in Stock.
          Cheap WoW Gold with daily prices update. More than
          100,000 positive reviews. Delivery time in most cases is
          less than 15 minutes, depending on Realm.
        </p>
        <div class="flex items-center gap-3">
          <p class="text-[13px] leading-[22px] font-[400]">
            From
          </p>
          <p class="text-[20px] leading-[24px] font-[600]">
            $ 0.39
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/19srv3v/Rectangle-3.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/9H0XZty/Rectangle-4.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <button
                        class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                      >
                        Save up to 20%
                      </button>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/R0c9np5/Rectangle-5.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/7RX0RtJ/Rectangle-6.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/6Xw1XXL/Rectangle-7.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/sbYDFyn/Rectangle-8.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <button
                        class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                      >
                        Save up to 20%
                      </button>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/tcdB1LS/Rectangle-9.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/wpT8PQv/Rectangle-10.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    `;
}

function addWowGold() {
  cardsSection.innerHTML = `
  <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/sHL7Nq2/Rectangle-2.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  <div class="relative group cursor-pointer overflow-hidden">
  <img
    src="https://i.ibb.co/19srv3v/Rectangle-3.png"
    class="h-full w-full"
    alt="item-image"
  />
  <img
    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
    class="absolute top-0 h-full w-full"
    alt="Overlap image"
  />
  <div
    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
  >
    <div></div>
    <div class="text-[#ffffff]">
      <h1 class="text-[17px] leading-[24px] font-[600]">
        WoW Gold
      </h1>
      <p
        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
      >
        Buy WoW Gold, any amount of gold on Each Realm in Stock.
        Cheap WoW Gold with daily prices update. More than
        100,000 positive reviews. Delivery time in most cases is
        less than 15 minutes, depending on Realm.
      </p>
      <div class="flex items-center gap-3">
        <p class="text-[13px] leading-[22px] font-[400]">
          From
        </p>
        <p class="text-[20px] leading-[24px] font-[600]">
          $ 0.39
        </p>
      </div>
    </div>
  </div>
</div>
<div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/R0c9np5/Rectangle-5.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/tcdB1LS/Rectangle-9.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/wpT8PQv/Rectangle-10.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  `;
}

function addHotOffers() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/sHL7Nq2/Rectangle-2.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/7RX0RtJ/Rectangle-6.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/6Xw1XXL/Rectangle-7.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    `;
}

function addDragonFlight() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
    <img
      src="https://i.ibb.co/9H0XZty/Rectangle-4.png"
      class="h-full w-full"
      alt="item-image"
    />
    <img
      src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
      class="absolute top-0 h-full w-full"
      alt="Overlap image"
    />
    <div
      class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
    >
      <div></div>
      <div class="text-[#ffffff]">
        <h1 class="text-[17px] leading-[24px] font-[600]">
          WoW Gold
        </h1>
        <p
          class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
        >
          Buy WoW Gold, any amount of gold on Each Realm in Stock.
          Cheap WoW Gold with daily prices update. More than
          100,000 positive reviews. Delivery time in most cases is
          less than 15 minutes, depending on Realm.
        </p>
        <button
          class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
        >
          Save up to 20%
        </button>
        <div class="flex items-center gap-3">
          <p class="text-[13px] leading-[22px] font-[400]">
            From
          </p>
          <p class="text-[20px] leading-[24px] font-[600]">
            $ 0.39
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/6Xw1XXL/Rectangle-7.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                <img
                  src="https://i.ibb.co/sbYDFyn/Rectangle-8.png"
                  class="h-full w-full"
                  alt="item-image"
                />
                <img
                  src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                  class="absolute top-0 h-full w-full"
                  alt="Overlap image"
                />
                <div
                  class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                >
                  <div></div>
                  <div class="text-[#ffffff]">
                    <h1 class="text-[17px] leading-[24px] font-[600]">
                      WoW Gold
                    </h1>
                    <p
                      class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                    >
                      Buy WoW Gold, any amount of gold on Each Realm in Stock.
                      Cheap WoW Gold with daily prices update. More than
                      100,000 positive reviews. Delivery time in most cases is
                      less than 15 minutes, depending on Realm.
                    </p>
                    <button
                      class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                    >
                      Save up to 20%
                    </button>
                    <div class="flex items-center gap-3">
                      <p class="text-[13px] leading-[22px] font-[400]">
                        From
                      </p>
                      <p class="text-[20px] leading-[24px] font-[600]">
                        $ 0.39
                      </p>
                    </div>
                  </div>
                </div>
              </div>

    `;
}

function addRadis() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
    <img
      src="https://i.ibb.co/19srv3v/Rectangle-3.png"
      class="h-full w-full"
      alt="item-image"
    />
    <img
      src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
      class="absolute top-0 h-full w-full"
      alt="Overlap image"
    />
    <div
      class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
    >
      <div></div>
      <div class="text-[#ffffff]">
        <h1 class="text-[17px] leading-[24px] font-[600]">
          WoW Gold
        </h1>
        <p
          class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
        >
          Buy WoW Gold, any amount of gold on Each Realm in Stock.
          Cheap WoW Gold with daily prices update. More than
          100,000 positive reviews. Delivery time in most cases is
          less than 15 minutes, depending on Realm.
        </p>
        <div class="flex items-center gap-3">
          <p class="text-[13px] leading-[22px] font-[400]">
            From
          </p>
          <p class="text-[20px] leading-[24px] font-[600]">
            $ 0.39
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/R0c9np5/Rectangle-5.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/tcdB1LS/Rectangle-9.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    `;
}

function addMythicDungeons() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
    <img
      src="https://i.ibb.co/9H0XZty/Rectangle-4.png"
      class="h-full w-full"
      alt="item-image"
    />
    <img
      src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
      class="absolute top-0 h-full w-full"
      alt="Overlap image"
    />
    <div
      class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
    >
      <div></div>
      <div class="text-[#ffffff]">
        <h1 class="text-[17px] leading-[24px] font-[600]">
          WoW Gold
        </h1>
        <p
          class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
        >
          Buy WoW Gold, any amount of gold on Each Realm in Stock.
          Cheap WoW Gold with daily prices update. More than
          100,000 positive reviews. Delivery time in most cases is
          less than 15 minutes, depending on Realm.
        </p>
        <button
          class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
        >
          Save up to 20%
        </button>
        <div class="flex items-center gap-3">
          <p class="text-[13px] leading-[22px] font-[400]">
            From
          </p>
          <p class="text-[20px] leading-[24px] font-[600]">
            $ 0.39
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/6Xw1XXL/Rectangle-7.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="overlaped image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div>
                      <button
                        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                      >
                        Hot Offer!
                      </button>
                    </div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/sbYDFyn/Rectangle-8.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <button
                        class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                      >
                        Save up to 20%
                      </button>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    `;
}

function addLeveling() {
  cardsSection.innerHTML = `
  <div class="relative group cursor-pointer overflow-hidden">
  <img
    src="https://i.ibb.co/sHL7Nq2/Rectangle-2.png"
    class="h-full w-full"
    alt="item-image"
  />
  <img
    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
    class="absolute top-0 h-full w-full"
    alt="overlaped image"
  />
  <div
    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
  >
    <div>
      <button
        class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
      >
        Hot Offer!
      </button>
    </div>
    <div class="text-[#ffffff]">
      <h1 class="text-[17px] leading-[24px] font-[600]">
        WoW Gold
      </h1>
      <p
        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
      >
        Buy WoW Gold, any amount of gold on Each Realm in Stock.
        Cheap WoW Gold with daily prices update. More than
        100,000 positive reviews. Delivery time in most cases is
        less than 15 minutes, depending on Realm.
      </p>
      <div class="flex items-center gap-3">
        <p class="text-[13px] leading-[22px] font-[400]">
          From
        </p>
        <p class="text-[20px] leading-[24px] font-[600]">
          $ 0.39
        </p>
      </div>
    </div>
  </div>
</div>
<div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/9H0XZty/Rectangle-4.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <button
                        class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                      >
                        Save up to 20%
                      </button>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer overflow-hidden">
                <img
                  src="https://i.ibb.co/7RX0RtJ/Rectangle-6.png"
                  class="h-full w-full"
                  alt="item-image"
                />
                <img
                  src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                  class="absolute top-0 h-full w-full"
                  alt="overlaped image"
                />
                <div
                  class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                >
                  <div>
                    <button
                      class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                    >
                      Hot Offer!
                    </button>
                  </div>
                  <div class="text-[#ffffff]">
                    <h1 class="text-[17px] leading-[24px] font-[600]">
                      WoW Gold
                    </h1>
                    <p
                      class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                    >
                      Buy WoW Gold, any amount of gold on Each Realm in Stock.
                      Cheap WoW Gold with daily prices update. More than
                      100,000 positive reviews. Delivery time in most cases is
                      less than 15 minutes, depending on Realm.
                    </p>
                    <div class="flex items-center gap-3">
                      <p class="text-[13px] leading-[22px] font-[400]">
                        From
                      </p>
                      <p class="text-[20px] leading-[24px] font-[600]">
                        $ 0.39
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative group cursor-pointer overflow-hidden">
              <img
                src="https://i.ibb.co/6Xw1XXL/Rectangle-7.png"
                class="h-full w-full"
                alt="item-image"
              />
              <img
                src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                class="absolute top-0 h-full w-full"
                alt="overlaped image"
              />
              <div
                class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
              >
                <div>
                  <button
                    class="p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#FCAB00] bg-[#FCAB00] rounded-[5px] text-center"
                  >
                    Hot Offer!
                  </button>
                </div>
                <div class="text-[#ffffff]">
                  <h1 class="text-[17px] leading-[24px] font-[600]">
                    WoW Gold
                  </h1>
                  <p
                    class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                  >
                    Buy WoW Gold, any amount of gold on Each Realm in Stock.
                    Cheap WoW Gold with daily prices update. More than
                    100,000 positive reviews. Delivery time in most cases is
                    less than 15 minutes, depending on Realm.
                  </p>
                  <div class="flex items-center gap-3">
                    <p class="text-[13px] leading-[22px] font-[400]">
                      From
                    </p>
                    <p class="text-[20px] leading-[24px] font-[600]">
                      $ 0.39
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group cursor-pointer overflow-hidden">
                  <img
                    src="https://i.ibb.co/sbYDFyn/Rectangle-8.png"
                    class="h-full w-full"
                    alt="item-image"
                  />
                  <img
                    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
                    class="absolute top-0 h-full w-full"
                    alt="Overlap image"
                  />
                  <div
                    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
                  >
                    <div></div>
                    <div class="text-[#ffffff]">
                      <h1 class="text-[17px] leading-[24px] font-[600]">
                        WoW Gold
                      </h1>
                      <p
                        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
                      >
                        Buy WoW Gold, any amount of gold on Each Realm in Stock.
                        Cheap WoW Gold with daily prices update. More than
                        100,000 positive reviews. Delivery time in most cases is
                        less than 15 minutes, depending on Realm.
                      </p>
                      <button
                        class="mb-[18px] p-[7px_9px_7px_9px] lg:p-[10px_20px_10px_20px] text-[13px] text-[#000000] leading-[15px] font-[700] border border-[#0CE83C] bg-[#0CE83C] text-center rounded-[5px]"
                      >
                        Save up to 20%
                      </button>
                      <div class="flex items-center gap-3">
                        <p class="text-[13px] leading-[22px] font-[400]">
                          From
                        </p>
                        <p class="text-[20px] leading-[24px] font-[600]">
                          $ 0.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  `;
}

function addGearing() {
  cardsSection.innerHTML = `
    <div class="relative group cursor-pointer overflow-hidden">
    <img
      src="https://i.ibb.co/tcdB1LS/Rectangle-9.png"
      class="h-full w-full"
      alt="item-image"
    />
    <img
      src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
      class="absolute top-0 h-full w-full"
      alt="Overlap image"
    />
    <div
      class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
    >
      <div></div>
      <div class="text-[#ffffff]">
        <h1 class="text-[17px] leading-[24px] font-[600]">
          WoW Gold
        </h1>
        <p
          class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
        >
          Buy WoW Gold, any amount of gold on Each Realm in Stock.
          Cheap WoW Gold with daily prices update. More than
          100,000 positive reviews. Delivery time in most cases is
          less than 15 minutes, depending on Realm.
        </p>
        <div class="flex items-center gap-3">
          <p class="text-[13px] leading-[22px] font-[400]">
            From
          </p>
          <p class="text-[20px] leading-[24px] font-[600]">
            $ 0.39
          </p>
        </div>
      </div>
    </div>
  </div><div class="relative group cursor-pointer overflow-hidden">
  <img
    src="https://i.ibb.co/wpT8PQv/Rectangle-10.png"
    class="h-full w-full"
    alt="item-image"
  />
  <img
    src="https://i.ibb.co/QdpNpyR/Overlapping-Rectangle.png"
    class="absolute top-0 h-full w-full"
    alt="Overlap image"
  />
  <div
    class="absolute top-0 h-full w-full flex flex-col justify-between p-[24px_21px]"
  >
    <div></div>
    <div class="text-[#ffffff]">
      <h1 class="text-[17px] leading-[24px] font-[600]">
        WoW Gold
      </h1>
      <p
        class="text-[13px] leading-[22px] font-[500] mt-[15px] mb-[18px] text-justify"
      >
        Buy WoW Gold, any amount of gold on Each Realm in Stock.
        Cheap WoW Gold with daily prices update. More than
        100,000 positive reviews. Delivery time in most cases is
        less than 15 minutes, depending on Realm.
      </p>
      <div class="flex items-center gap-3">
        <p class="text-[13px] leading-[22px] font-[400]">
          From
        </p>
        <p class="text-[20px] leading-[24px] font-[600]">
          $ 0.39
        </p>
      </div>
    </div>
  </div>
</div>
    `;
}

// --------- Filter Menu in large device ----------- Filter Menu in large device -----------//
// ----- END ---------- END ---------- END ------------- END ----------- END ------- //

// Settings for Reviews Slider
$(document).on("ready", function () {
  $(".regular").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    responsive: [
      {
        breakpoint: 1900, // Large devices breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400, // Large devices breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Medium devices breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Settings for Blogs Slider
$(document).on("ready", function () {
  $(".blogs").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1900, // Large devices breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400, // Large devices breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Medium devices breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Reviews Sections arrow icons functionality

const arrows = document.querySelectorAll(".arrows");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (event) => {
    arrows.forEach((item) => item.classList.add("opacity-40"));
    event.currentTarget.classList.toggle("opacity-40");
  });
}

// Featured boxes Slider and Image changes Functionality
const featuredImages = ['https://i.ibb.co/q13ysfy/Rectangle-11.png', 'https://i.ibb.co/CJTZvsd/featured-iamge-2.webp', 'https://i.ibb.co/q13ysfy/Rectangle-11.png'];

const featuredImageElement = document.getElementById('featured-image');
const featureBoxes = document.querySelectorAll(".feature-box");
let elementIndex = 0;

// Selecting active featured box based on user clicked;
for(let i=0; i<featureBoxes.length; i++){
  featureBoxes[i].addEventListener('click', () => {
    elementIndex = i;
    activeFeatureBox(featureBoxes[i], elementIndex);
  });
}

function selectActiveFeatureBox(){
  if(elementIndex > 2){
    elementIndex = 0;
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  }else {
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  }
}

selectActiveFeatureBox();
setInterval(() => selectActiveFeatureBox(), 3200);

function activeFeatureBox(featureBox, elementIndex) {
  clearClasses();
  featuredImageElement.setAttribute('src', featuredImages[elementIndex]);
  featureBox.classList.remove("feature-box-bg-not-active");
  featureBox.classList.add("feature-box-bg-active");
  const innerBox = featureBox.querySelector("#feature-inner-box");
  innerBox.classList.remove("feature-box-border");
  innerBox.classList.add("feature-box-loader");
}

function clearClasses() {
  featureBoxes.forEach((box) => {
    box.classList.remove("feature-box-bg-active");
    box.classList.add("feature-box-bg-not-active");
    const innerBox = box.querySelector("#feature-inner-box");
    innerBox.classList.remove("feature-box-loader");
    innerBox.classList.add("feature-box-border");
  });
}


