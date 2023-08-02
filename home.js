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
// Toggling Category menus under Enjoy Dragonflight Season 2!
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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
const featuredImages = [
  "https://i.ibb.co/q13ysfy/Rectangle-11.png",
  "https://i.ibb.co/CJTZvsd/featured-iamge-2.webp",
  "https://i.ibb.co/q13ysfy/Rectangle-11.png",
];

const featuredImageElement = document.getElementById("featured-image");
const featureBoxes = document.querySelectorAll(".feature-box");
let elementIndex = 0;

// Selecting active featured box based on user clicked;
for (let i = 0; i < featureBoxes.length; i++) {
  featureBoxes[i].addEventListener("click", () => {
    elementIndex = i;
    activeFeatureBox(featureBoxes[i], elementIndex);
  });
}

function selectActiveFeatureBox() {
  if (elementIndex > 2) {
    elementIndex = 0;
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  } else {
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  }
}

selectActiveFeatureBox();
setInterval(() => selectActiveFeatureBox(), 3200);

function activeFeatureBox(featureBox, elementIndex) {
  clearClasses();
  featuredImageElement.setAttribute("src", featuredImages[elementIndex]);
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
