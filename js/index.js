// alert()

//  basic in js  //
//  Js its a programming language that can be used to make web pages interactive

//  Js can update and change both HTML and CSS

//  Data types in js  //
//  String: > any text or symbols between quotes "    "
//  
//  Number : > any number with or without decimals > integers or floats ,double
//  Boolean: > true or false                                   [ 0 ,1 ,2,3]
//  Array, List :  > collection of data inside square brackets [ 1,'test' , true , 2.5] > access to the data by index
//  Object : > collection of data inside curly brackets  { key:value}      {name:'test', age: 25, isStudent: true}
//  Undefined  : > variable declared but not assigned to a value
//  Null : > variable declared and assigned to null value
//  NAN : > not a number > 5/'test' > NaN


//  Variables in js  //

//  var > global scope :> can be accessed from anywhere in the code
//  var name = 'value'

//  let > block scope :> can be accessed only inside the block where it was declared
//  let name = 'value'

//  const > block scope :> can be accessed only inside the block where it was declared
//  const name = 'value'

// var nav= 'hi iam nav'; // declar var type: string 
// console.log("this var is ",typeof(nav),":",nav); // print the var type and value
// nav = 25; // reassign the value of var 
// console.log("this var is ",typeof(nav),":",nav);
// console.log('#'.repeat(30));

// let nav1= 'hi iam nav1';
// console.log("this let is ",typeof(nav1),":",nav1);
// console.log('#'.repeat(30));

// const nav2= 'hi iam nav2';
// console.log("this const is ",typeof(nav2),":",nav2);
// // nav2= 25;
// // console.log("this const is ",typeof(nav2),":",nav2);
// console.log('#'.repeat(30));
// var nav3;
// console.log("this var is ",typeof(nav3),":",nav3);  
// nav3 = 25;
// console.log("this var is ",typeof(nav3),":",nav3);

// console.log('#'.repeat(30));
// var nav4 = null;
// console.log("this var is ",typeof(nav4),":",nav4);


var h1 = document.getElementById('HJS');
//  textContact or innerHTML contain the text inside the tag
console.log(h1.innerHTML);
//  change the text inside the tag
h1.innerHTML = 'JS is awesome';
//  change the style of the tag
h1.style.color = 'red';
h1.style.backgroundColor = 'black';
//  

var img = document.getElementsByClassName('contantImg');
console.log(img);
img[0].src='https://www.w3schools.com/js/pic_bulbon.gif';
img[4].src='https://www.w3schools.com/js/pic_bulbon.gif';
img[2].src='https://www.w3schools.com/js/pic_bulbon.gif';
img[1].width= '100';

//   array 

var arr1 = [ 'test',10,true,25.5];
console.log(arr1);
console.log(arr1[0]);

//  object

var ovj1 = { name:'value', age: 25, isStudent: true};
console.log(ovj1);
console.log(ovj1.name);
console.log(ovj1.age);
console.log(ovj1.isStudent);

var body = document.getElementsByTagName('body');
console.log(body);
//  function :> block of code that can be called when needed
//  function name() { code } > declare a function
//  name() > call the function
var checkbox = document.getElementById('checkbox');

function changeBack() {
    // alert('hi iam a new alert');
    
console.log(checkbox.checked );
if (checkbox.checked) {
    body[0].style.backgroundColor = 'white';
} else {
    body[0].style.backgroundColor = 'gray';
    
}


}
var selctColor = document.getElementById('selctColor');
// alert('hi iam a new aleart');
//  if condition :>  if (condition) { code } > if the condition is true the code will be executed   


function changeColor() {
    console.log(selctColor.value);
    body[0].style.backgroundColor = selctColor.value;
}
var inputTxt = document.getElementById('inputTxt');
var searched = document.getElementById('searched');
// var searchNumer = document.getElementById('searchNumer');
function repateSearched(){
    // console.log(searched.innerHTML)
    // searched.innerHTML= ''; // clear for the div contant
    // for (var i = 0; i <searchNumer.value;i++){ // i with searchNumer
    //     //  append elemnt
    //     var pElemnt = document.createElement('p');
    //     pElemnt.innerHTML = inputTxt.value;
    //     searched.appendChild(pElemnt);
    // }
    console.log(searched.children)
    var isExisted = true;
    for (var i =0 ; i <searched.children.length;i++) {
        console.log(searched.children[i].innerHTML)
        if (searched.children[i].innerHTML ==inputTxt.value){
            searched.children[i].style.color ='red';
            searched.children[i].style.fontSize= '20px';
        searched.children[i].style.backgroundColor= 'white';

            isExisted = false;
            continue;
        }
        searched.children[i].style.color ='black';
        searched.children[i].style.fontSize= '';
        searched.children[i].style.backgroundColor= 'gray';

}
    if (isExisted){
        alert('item is not found')
    }
}


//  loops : > for 

//  while loop

