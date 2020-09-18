
/* var regex=/^[A-Z][a-z]{3,8}$/
var productName="toshiba";
if(regex.test(productName)==true)
{
console.log("valid")
}
else
{
console.log("invaild")
}
 */


var productNameInput = document.getElementById("productNameInput");//Input klo
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");


var productNameAlert = document.getElementById("productNameAlert");
var productPriceAlert = document.getElementById("productPriceAlert");

var productList;

if (localStorage.getItem("ourProducts") == null)//client gdid//maloo4 7aga
{
    productList = [];
}
else//leh data mawgoda abl kdaaa
{
    productList = JSON.parse(localStorage.getItem("ourProducts"));
    displayProducts(productList);
}

//2M

function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    productList.push(product);//1
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProducts(productList);
    clearForm();
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productDescInput.value = "";
    productCategoryInput.value = "";

}
function displayProducts(anyArray) {
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++)//2
    {
        cartoona += `<tr>
                                <td>${i}</td>
                                <td>${anyArray[i].name}</td>
                                <td>${anyArray[i].price}</td>
                                <td>${anyArray[i].category}</td>
                                <td>${anyArray[i].desc}</td>
                                <td><button class="btn btn-warning">update</button></td>
                                <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">delete</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}



function deleteProduct(index) {

    productList.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProducts(productList);
}


var searchInput = document.getElementById("searchInput");

function searchProducts() {
    var searchTerm = searchInput.value;
    var wantedProducts = [];
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            wantedProducts.push(productList[i]);
        }
    }
    displayProducts(wantedProducts);
}
///DRY code  dont repeat your code
/* 
function validateProductName()
{
var regex=/^[A-z][a-z]{3,8}$/;
if(regex.test(productNameInput.value)==true)
{
productNameAlert.classList.replace("d-block","d-none");
productNameInput.classList.add("is-valid");
productNameInput.classList.remove("is-invaild");
}
else
{
    productNameAlert.classList.replace("d-none","d-block");
    productNameInput.classList.add("is-invalid");
    productNameInput.classList.remove("is-valid");

}
}
productNameInput.addEventListener("keyup",validateProductName);

 */

/* function validProductName () {
    var regax = /^[A-Z][a-z]{3,8}$/
    if (regax.test(productNameInput.value) == true) {
      productNameInput.classList.replace('d-block', 'd-none')
      productNameInput.classList.add('is-valid')
      productNameInput.classList.remove('is-invalid')
    } else {
      productNameInput.classList.replace('d-none', 'd-block')
      productNameInput.classList.add('is-invalid')
      productNameInput.classList.remove('is-valid')
    }
  }
  
  productNameInput.addEventListener('keyup', validProductName) */
/* 
  function welcome (userName=`system user`,age=`25`,salary=3000)
  {
      console.log(`welcome${userName}your age is ${age} your salary is${salary}`);
  }
  welcome(`ahmed`,`25`,9000) */


/* let employee=
{
name:'amer',
gender:'male',
salary:'8000',
age:'25',
welcome:function(){},
calcSalary:function()
{
  calcTaxes=()=>
  {
      return (this.salary*10)/100;
  }
  return this.salary-calcTaxes();
}
}
console.log(employee.calcSalary());
*/

function validateProductName(productName) {
    var regex = /^[A-Z][a-z]{3,6}$/;
    if (regex.test(productName) == true) {
        productNameInput.classList.remove("is-invalid")
        productNameInput.classList.add("is-valid");
        productNameAlert.classList.replace("d-block","d-none")
    }
    else
    {
        productNameInput.classList.remove("is-valid")
        productNameInput.classList.add("is-invalid");
        productNameAlert.classList.replace("d-none","d-block")
    }
}

productNameInput.addEventListener("keyup",function(){
    validateProductName(productNameInput.value);
})
