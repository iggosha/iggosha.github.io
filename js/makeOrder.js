let text = "";

function addProducts() {
  let counter = 0;
  for (let amount of document.getElementsByClassName('amounts')) { //Типа берём из страницы menu
    let pr = document.getElementsByClassName('products')[counter++].textContent;
    let am = amount.textContent;
    if (am != 0) {//Добавляем в текст заказа продукт
      text += pr + ": " + am + "<br>";
    }
  }
}

function openOrderWindow() {
  let win = window.open("", "", "width=720,height=480");
  win.document.open();
  win.document.write('<head> <title>Заказ</title> <link rel="stylesheet" href="css/mystyle.css"/> <script src="js/makeOrder.js"></script> </head>');
  win.document.write("<h1>Ваш заказ:</h1>");
  if (text != "") {
    win.document.write(text);
  } else {
    win.document.write("Ничего не выбрано<br>");
  }
  win.document.write("<br> Введите адрес для доставки: <br> ");
  win.document.write("<label>\n" +
    "    <input type=\"email\" placeholder=\"ул. Уличная, дом 1, кв 1\"/>\n" +
    "  </label> <br>");
  win.document.write('<input type="button" value="Заказать" onClick="window.close();" style="width: 200px; height: 75px">');
  win.document.close();
  text = "";
}
