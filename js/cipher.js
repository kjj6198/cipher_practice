var aesjs = require("aes-js");

function setKey(cipherKey) {
	var key = aesjs.util.convertStringToBytes(cipherKey);
	return key;
}

function cipher(key, text) {
	var textBytes = aesjs.util.convertStringToBytes(text);

	var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
	var encryptedBytes = aesCtr.encrypt(textBytes);

	return encryptedBytes.toString("ascii");
}

function decipher (key, cipherText) {
	var cipherTextBytes = aesjs.util.convertStringToBytes(cipherText);
	var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
	var decryptedBytes = aesCtr.decrypt(cipherTextBytes);

	return decryptedBytes.toString("ascii");
}

$(".cipher").on("click", function(e) {
	e.preventDefault();

	var $keyInput = $("#key");
	var $plainText = $("#plainText");
	var $cipher = $("#cipher");
	var key;
	
	if(!($keyInput.val().length === 16 || $keyInput.val().length === 32)) {
		$keyInput.val("key 的長度應為 16 或 32");
	} else {
		key = setKey($keyInput.val());
		var encrypted = cipher(key, $plainText.val());

		$("#cipher").val(encrypted);
	}
  
});

$(".decipher").on("click", function(e) {
  e.preventDefault();

  var $keyInput = $("#cipherkey");
  var $cipherInput = $("#cipherText");
  var $plain = $("#plain");
  var key;

  if(!($keyInput.val().length === 16 || $keyInput.val().length === 32)) {
		$keyInput.val("key 的長度應為 16 或 32");
	} else {
		key = setKey($keyInput.val());
		var decrypted = decipher(key, $cipherInput.val());

		$plain.val(decrypted);
	}
});

// Convert text to bytes
