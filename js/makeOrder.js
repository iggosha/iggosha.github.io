let text = "";

function addProducts() {
  let counter = 0;
  for (let amount of document.getElementsByClassName('amounts')) {
    let pr = document.getElementsByClassName('products')[counter++].textContent;
    let am = amount.textContent;
    if (am != 0) {
      text += pr + ": " + am + "<br>";
    }
  }
}

function openOrderWindow() {
  let win = window.open("", "", "width=720,height=480");
  win.document.open();
  win.document.write('<head> <title>Заказ</title> <link rel="stylesheet" href="css/mystyle.css"/> </head>')
  win.document.write("<h1>Ваш заказ:</h1>");
  if (text!="") {
    win.document.write(text);
  } else {
    win.document.write("Ничего не выбрано<br>");
  }
  win.document.write('<input type="button" value="Подтвердить и закрыть" onClick="window.close();" style="width: 500px; height: 75px">');
  win.document.write('<h6 style="text-align: right; font-size: 0.5em">При ошибке перезагрузите главную страницу</h6>')
  win.document.close();


}
