describe("Number", function() {
  var input1 = 1;
  var input2 = 2;

  it('兩個輸入為數字時，正常相加', function() {
  	output =  add(input1 + input2);

  	expect(output).toEqual(3);
  });

  it('輸入當中有字串，自動轉為數字', function() {
  	var input1 = "1";
  	var input2 = "2";

  	output = add(input1,input2);

  	expect(output).toEqual(3);
  });

  it('忽略參數時，用0取代', function() {
  	var input1 = 1;
  	var output = add(input1);

  	expect(output).toEqual(input1);
  });
 
});

describe('Dictionary', function() {

  it('回傳輸入的字串', function() {
	  var dic = new Dictionary("kalan");
	  var translate = dic.translate("kalan");

	  expect(translate).toEqual("kalan");	
  });

  it('非字串時拋出例外', function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };
    
    var translate = function() { // 要用一個變數接例外，不然程式本身就會因為例外而跳掉了
      var dic = new Dictionary(1523);
      dic.translate(1523);  
    }
    
    expect(translate).toThrowError("輸入非字串");
    expect(translate).toThrowError(TypeError);
  })
  
});


