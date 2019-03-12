const productList = document.querySelector('#product-list');
const form = document.querySelector('#add-product-form')

// create element and render product
function renderProduct(doc){
    let li = document.createElement('li');
    let productname = document.createElement('span');
    let discount = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    productname.textContent = doc.data().productname;
    discount.textContent = doc.data().discount;

    li.appendChild(productname);
    li.appendChild(discount);

    productList.appendChild(li);
}

//Getting data
db.collection('Products').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        console.log(data)
        renderProduct(doc);
    })
})

//Saving data
form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('Products').add({
        productname: form.productname.value,
        discount: form.discount.value 
    })
})