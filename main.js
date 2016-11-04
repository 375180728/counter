  var num = 0; // 定义第一个输入的数据
  var result;//定义一个结果
  var temp = ''; //临时显示的数
  var temp_char = ''; //临时保存符号
  var init = false;
  var resetNumber = false;

  function jsq(num) {

     var v = document.getElementById(num).value;
     var _screen = document.getElementById('screen').value;

     if ("+-*/%".indexOf(v) > -1 && !_screen) {
        temp = 0;
        temp_char = v;
        result = 0;
        init = true;
        document.getElementById('screen').value = 0 + v;
        resetNumber = true;
        return;
     }

    if ("+-*/%".indexOf(v) > -1) {
      if ("+-*/%".indexOf(_screen.substr(_screen.length -1)) > -1) {
        document.getElementById('screen').value = _screen.substring(0, _screen.length - 1) + v;
        temp_char = v;
        return;
      }
    }

    document.getElementById('screen').value += document.getElementById(num).value;
   
    if ("+-*/%".indexOf(v) > -1) {
      resetNumber = true;
      if (temp_char && temp !== '') {
        var b = document.getElementById('result').value;
        if (result != undefined && result !== '') {
          temp = result
        }
        switch (temp_char){
          case '+':{
            document.getElementById('result').value = add(temp, b);
          }; break;
          case '-':{
            document.getElementById('result').value = reduce(temp, b);
          }; break;
          case '*':{
            document.getElementById('result').value = multi(temp, b);
          }; break;
          case '/':{
            document.getElementById('result').value = division(temp, b);
          }; break;
        }
        result = document.getElementById('result').value;
        temp = result;
      }
      temp_char = v;
      return;
    }

    if (resetNumber) {
      document.getElementById('result').value = v;
      resetNumber = false;
      return;
    }

    document.getElementById('result').value += v;

    if (result !== '') {
      temp = document.getElementById('result').value;
    }

    

  }


  function clearNum() {
    //清0
    document.getElementById("screen").value = "";
    document.getElementById("result").value = "";
    temp = '';
    temp_char = '';
  }

  function tuiGe() {
    //退格
    var arr = document.getElementById("result");
    var length = arr.value.length;
    arr.value = arr.value.substring(0, arr.value.length - 1);

    var screen = document.getElementById("screen");
    if (length === 0) {
      return;
    }

    document.getElementById("screen").value = screen.value.substring(0, screen.value.length - 1);

  }

  function onLoad(){
    //加载完毕后光标自动对应到输入框
    document.getElementById("screen").focus();
  }

 

  // 定义不同的方法处理不同的运算 两个参数，可以传入到方法内部的
  // 上面是输入历史，下面是结果
  // 加法
  function add(a, b){
    return Number(a)+Number(b);
  }

  // 减法
  function reduce(a, b){
    return Number(a)-Number(b);
  }

  // 乘法
  function multi(a, b) {
    // body...
    return a*b;
  }

  // 除法
  function division(a, b){
    return a/b;
  }

  // 等于方法
  function eva(){
    resetNumber = true;
      if (temp_char && temp !== '') {
        var b = document.getElementById('result').value;
        if (result != undefined && result !== '') {
          temp = result
        }
        switch (temp_char){
          case '+':{
            document.getElementById('result').value = add(temp, b);
          }; break;
          case '-':{
            document.getElementById('result').value = reduce(temp, b);
          }; break;
          case '*':{
            document.getElementById('result').value = multi(temp, b);
          }; break;
          case '/':{
            document.getElementById('result').value = division(temp, b);
          }; break;
        }
        result = document.getElementById('result').value;
        temp = result;
      }
      return;
  }