$(document).ready(function() { // without this, then... JQuery will run at the same time. YOu want document to load first. When document is loaded, then run JQuery.

// $('.item-name');

$('.buttonRow').click(function(){
	calculateRow();
});

$('.buttonRowT').click(function(){
	rowQuantXPrice();
});

$('.buttonQuant').click(function(){
  getQuant();
});

$('#total-price').click(function(){
  replaceTotal();
});

$('#reset-button').click(function(){
  clearForm();
});


function getQuant() {
  var rowQuantity = $(".quantity"); // the variable "rowQuantity" references the class "quantity" (which is referenced in the html, where we will manually input the amount)
  var prices      = $(".item-price"); // the variable "prices" references the class "item-price" in the html (where the prices are listed) 
  var sum=0; //var sum is declared here (and not inside the for loop) so that when the for loop is working it won't reset sum to zero everytime.
  for (var i = 0; i < rowQuantity.length; i++) {   //initiation at zero, i less than the length of the array rowQuantity (the class "quantity" is referenced 9 times in the html (9 separate prices), so length is 9 minus 1 =8.) 
    var rowTotal;
    var price    = parseInt(prices[i].innerHTML.trim().slice(1)); //pariseInt turns string into integer. price[i], the first time, shows prices[0], equivalent to the first time the class "item-price" is referenced (in this instance, 60 dollars). innerHTML gets the content within the html codes ($60). Trim takes out the white spaces on the left and right; and slice(1) takes out the $ sign so we are left with "60" for calculations  
    var quantity = rowQuantity[i].value; 
    // the variable quantity refers to the numerical value of the input. For example, rowQuantity[0] is the first time the class "quantity" is referenced, ie. whatever is in the first "class = quantity" box.
    var rowTotal =  quantity * price; // the quantity of the particular row (input) multiplied by the price of that row.
  	// alert("Row total is "+rowTotal);
    sum = sum + rowTotal ;
    // alert("Latest sum is "+sum);
    }
  alert("The total sum for the cart is $"+sum+".");
}

function clearForm() {
  var rowQuantity = $(".quantity");
  for (var i =0; i < rowQuantity.length; i++) {
    rowQuantity[i].value="";
  }
}

function replaceTotal() {
  $('#total-price').replaceWith("Hello!");
  //codes
}

// $('.row > .item-name')[2]; --> carp
// $('.row > .item-qty')[2]; --> QTY
// $('.row > .item-price')[2]; -->$40

// var itemName = $(.item-name).text()
//var element = $('#fooList > li')[3];
//var content = $(element).text();

// $('.item-price');

$('#foo');
$('.bar');
$('#fooList');
$('#fooList2');

//indirect descendents

$('#foo article ');
// [<p>...</p>]')

//this will return the content inside. This will return you a string.
$('#foo > article >p').text();

//grab and modify the content
$('#foo > article >p').text("FOOBAR");

//grab am attribute in an html element

$('img').attr("src");
//no dot no hashtag because it's an element

$('#fooList >li')[1];
$('.row');



//.children() go to the children element
//.parent() go to the parent element

// $('#foo p')siblings() 


var elements= $('#fooList >li');

elements.each(function(index){
	console.log(elements[index]);
})

});


//****************************
// $ is the same as jQuery
// $(document) is the same as jQuery(document)

// Selectors. Same as CSS Selector Knowledge
$('#foo');
$('.bar');

// Indirect descendant
$('#foo p');
// [<p>​…​</p>​]

// Indirect descendant
$('#foo article p');
// [<p>​…​</p>​]

// Direct descendant
$('#foo > article > p');
// [<p>​…​</p>​]

// Direct descendant
$('#foo > p');
// []

// This will return the whole element
$('#foo > article > p');

// This will return the content inside. This will return you a string.
$('#foo > article > p').text();

// Grab and Modify the content
$('#foo > article > p').text("FOOBAR");

// Grab an attribute in an HTML element
$('img').attr("src");

// This will return the an array with 7 elements
$('#fooList > li');

// To access the 4th element
// <li class="bar">4</li>
$('#fooList > li')[3];

// To access the content inside 4th element
// .text() is a jQuery function
// 4
var element = $('#fooList > li')[3];
var content = $(element).text();

// Traverse
// .first() // go to the first element in the array
// .last() // go to the last element in the array
// .next() // go to the next element
// .prev() // go to the previous element

// .children()  // go to the children element
// .parent() // go to the parent element
// .siblings()

// Google: How do I add Class to Element JQUERY
// $('h1').addClass('wdi-heading');


// To modify an attribute
// // $('').attr(name, value)
// $('h1').attr('class', 'wdi-heading2'); // change value of class to wdi-heading2
// $('#foo').attr('id', 'bar'); // change value of id to bar 
// $('#foo').attr('id', ''); // change value of id to nothing 
// $('#foo').removeAttr('id'); // remove the id attribute

$('#fooList')
  // <ul id="fooList">
  //   <li class="bar">1</li>
  //   <li class="bar">2</li>
  //   <li class="bar">3</li>
  //   <li class="bar">4</li>
  //   <li class="bar">5</li>
  //   <li class="bar">6</li>
  //   <li class="bar">7</li>
  // </ul>

// for loop
var elements = $('#fooList > li');
var length = elements.length;

for (var i = 0; i < length; i++) {
  var currentElement = elements[i];
  
  var currentElementAsAJqueryElement = $(currentElement)

  currentElementAsAJqueryElement.text();

}

  //   <li class="bar">1</li>
  //   <li class="bar">2</li>
  //   <li class="bar">3</li>
  //   <li class="bar">4</li>
  //   <li class="bar">5</li>
  //   <li class="bar">6</li>
  //   <li class="bar">7</li>


// $('.buttonToArray').click(function(){
// 	toArray();
// })