let menu = {
    cheese: 2,
    meat: 5,
    onion: 1,
    salad: 1,
    tomato: 2,
    cucumber: 3,
    bread: 2,
  };
  
  let orderBtn = document.getElementsByClassName("order-button")[0];
  let foodLayers = document.getElementsByClassName("food-layers")[0];
  let button = document.getElementsByClassName("button")[0];
  let totalPrice = document.getElementsByClassName("total-price")[0].innerHTML;
  console.log(totalPrice)
  
  let total = 0;
  
  for (let i in button.children) {
    let btn = button.children[i];
    btn.onclick = () => {
      if (btn !== undefined && btn.textContent !== "Bread") {
        create(btn.textContent);
      }
    };
  }
  
  function create(el) {
    console.log(el);
    let order = el.toLowerCase();
    foodLayers.innerHTML += "<img src=`./img/${order}.svg` alt=`${order}` onclick=`removeElement(this)`>";
    totalPrice.textContent = menu[order] + totalPrice;
  }
  
  function removeElement(el) {
    el.remove();
    console.log(el.alt); 
    total -= menu[el.alt];
    totalPrice.innerHTML = total;
  }
  
  orderBtn.addEventListener("click", () => {
    alert(`Your order costs you ${total} dollar(s)`);
  });