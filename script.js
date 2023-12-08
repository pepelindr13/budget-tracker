function calc() {
  window.scrollTo(0, 4);
  let expense = Number(phone.value) + Number(food.value) + Number(coffee.value) + Number(health.value) + Number(trans.value) + Number(oth.value)
  if (expense > 10000) {
    err.innerHTML = "You can't spend more than #10,000 in a day!"
  }else if (phone.value == '' || food.value == '' || coffee.value == '' || health.value == '' || trans.value == '' || oth.value == '') {
    err.innerHTML = "Fill in all fields!"
    // exp.innerHTML = "-#0"
  }else {
    exp.innerHTML = "-#" + expense
    bal.innerHTML = "#" + (10000 - expense)
    err.innerHTML = ""
  }

  phone.value = ''
  coffee.value = ''
  food.value = ''
  health.value = ''
  oth.value = ''
  trans.value = ''

}