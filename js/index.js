// items tatle Value
function getItemsTitle(itemsTitleId) {
    const itemsTitleFlied = document.getElementById(itemsTitleId)
    const itemsTitle = itemsTitleFlied.innerText;
    return itemsTitle
}
// items tatle price
function getItemsPrice(itemsPriceId) {
    const itemsPriceFlied = document.getElementById(itemsPriceId)
    const itemsStringPrice = itemsPriceFlied.innerText;
    const itemsPrice = parseFloat(itemsStringPrice)
    return itemsPrice
}
// Set items tatle Value
function setItemsTitle(itemsNameId, itemValue) {
    const itemsName = document.getElementById(itemsNameId)
    const newItemsName = document.createElement('p')
    const count = itemsName.childElementCount
    newItemsName.innerHTML = `${count}. ${itemValue}`
    itemsName.appendChild(newItemsName)
}

//Set items price
function setItemsPrice(itemsPriceId, itemPrice) {
    const totalPrice = document.getElementById(itemsPriceId)
    totalPrice.innerText = itemPrice
}

//total item price
function getTotalPrice(itemsName, totalPrice) {
    const itemsPriceValue = getItemsPrice(itemsName)
    const previcePriceValue = getItemsPrice(totalPrice)
    const totalPriceValue = previcePriceValue + itemsPriceValue;
    setItemsPrice('total-price', totalPriceValue)
}

//disable button create
function getDisableBtn() {
    const totalPriceValue = getItemsPrice('total-price')
    if (totalPriceValue <= 200) {
        document.getElementById("apply-btn").disabled = true;
    } else {
        document.getElementById('apply-btn').disabled = false;
    }
}

// Copon Code Apply this card
function getCoponCodeApply() {
    const inputField = document.getElementById('input-flied');
    let inputFieldValues = inputField.value;
    const couponCode = 'SELL200';
    if (inputFieldValues === couponCode) {
        const totalPriceValue = getItemsPrice('total-price')
        const discountPriceValue = getItemsPrice('discount-price');
        const discountPrice = totalPriceValue * 0.2; // 20% discount
        const totalDiscountPrices = discountPriceValue + discountPrice;
        const totalDiscountPrice = totalDiscountPrices.toFixed(2);
        setItemsPrice("discount-price", totalDiscountPrice);

        const totalPrice = totalPriceValue - totalDiscountPrices; // Subtracting discount from total
        setItemsPrice("total", totalPrice);

    } else {
        console.log("Invalid coupon code."); // Feedback for invalid coupon code
    }

    inputField.value = '';
}

// items title and price id , create discount copon
function getItems(itemsIitle, itemsPrice) {
    const itemsTitleValue = getItemsTitle(itemsIitle)
    setItemsTitle('items-name', itemsTitleValue)
    getTotalPrice(itemsPrice, "total-price")
    getDisableBtn()
    getDisable()
}

// Accessories Clicked items
function getAccessories() {
    getItems('accessories-title', 'accessories-price')
}


// Chopping Board Clicked items
function getChoppingBoard() {
    getItems('chopping-board-title', 'chopping-board-price')
}

// Home Coker Clicked items
function getHomeCoker() {
    getItems('home-coker-title', 'home-coker-price')
}


// Sports Back Cap Clicked items
function getSportsBackCap() {
    getItems('cap-title', 'cap-price')
}


// Full Jersey Set Clicked items
function getJersey() {
    getItems('jersey-title', 'jersey-price')
}

// Sports cates Clicked items
function getCates() {
    getItems('cates-title', 'cates-price')
}

// Single Relax Chair Clicked items
function getChair() {
    getItems('chair-title', 'chair-price')
}


// Children play Clicked items
function getChildrenPlay() {
    getItems('children-play-title', 'children-play-price')
}

// Flexible Sofa Clicked items
function getFlexibleSofa() {
    getItems('sofa-title', 'sofa-price')
}


// Reload This page
function getDisable() {
    const totalPriceValuess = getItemsPrice('total-price')

    if (totalPriceValuess == 0) {
        document.getElementById("btn-diable").disabled = true;
    } else {
        document.getElementById('btn-diable').disabled = false;
    }
}
getDisable()
getDisableBtn()


document.getElementById('go-home').addEventListener('click', function () {
    location.reload();
});