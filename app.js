'use strict'
let hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7am']

function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattle ={
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCS : 6.3,
    randomCustomers: [],
    cookiesPh: [],
    total: 0,
    
    
    getCust : function(){
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomCust(this.minCust, this.maxCust)) 
        }
    }, 
    
    getCookiesPh: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPh.push(Math.floor(this.randomCustomers[i]*this.avgCS))
        }
        
    },

    displayresult: function(){
        let parent = document.getElementById('list')

        let listItemsT =document.createElement('h2')
parent.appendChild(listItemsT)
    listItemsT.textContent = this.name


let unOrdered = document.createElement('ul')
parent.appendChild(unOrdered);
for (let i = 0; i < hours.length; i++) {
   let items = document.createElement('li')
   unOrdered.appendChild(items);
   items.textContent = `${hours[i]}: ${this.cookiesPh[i]}`
   this.total= this.total+this.cookiesPh[i];
}
// this.total = this.cookiesPh[0]+this.cookiesPh[1]+this.cookiesPh[2]+this.cookiesPh[3]+this.cookiesPh[4]+this.cookiesPh[5]+this.cookiesPh[6]+this.cookiesPh[7]+this.cookiesPh[8]+this.cookiesPh[9]+this.cookiesPh[10]+this.cookiesPh[11]+this.cookiesPh[12]+this.cookiesPh[13]
let t = document.createElement('li');
unOrdered.appendChild(t)
t.textContent = `Total: ${this.total}` 

},

   
}
seattle.getCust();
seattle.getCookiesPh();
seattle.displayresult();


let tokyo ={
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCS : 1.2,
    randomCustomers: [],
    cookiesPh: [],
    total: 0,
    
    
    getCust : function(){
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomCust(this.minCust, this.maxCust)) 
        }
    }, 
    
    getCookiesPh: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPh.push(Math.floor(this.randomCustomers[i]*this.avgCS))
        }
        
    },

    displayresult: function(){
        let parent = document.getElementById('list')

        let listItemsT =document.createElement('h2')
parent.appendChild(listItemsT)
    listItemsT.textContent = this.name


let unOrdered = document.createElement('ul')
parent.appendChild(unOrdered);
for (let i = 0; i < hours.length; i++) {
   let items = document.createElement('li')
   unOrdered.appendChild(items);
   items.textContent = `${hours[i]}: ${this.cookiesPh[i]}`
   this.total= this.total+this.cookiesPh[i];
}
// this.total = this.cookiesPh[0]+this.cookiesPh[1]+this.cookiesPh[2]+this.cookiesPh[3]+this.cookiesPh[4]+this.cookiesPh[5]+this.cookiesPh[6]+this.cookiesPh[7]+this.cookiesPh[8]+this.cookiesPh[9]+this.cookiesPh[10]+this.cookiesPh[11]+this.cookiesPh[12]+this.cookiesPh[13]
let t = document.createElement('li');
unOrdered.appendChild(t)
t.textContent = `Total: ${this.total}` 

},

   
}
tokyo.getCust();
tokyo.getCookiesPh();
tokyo.displayresult();

let dubai ={
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCS : 3.7,
    randomCustomers: [],
    cookiesPh: [],
    total: 0,
    
    
    getCust : function(){
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomCust(this.minCust, this.maxCust)) 
        }
    }, 
    
    getCookiesPh: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPh.push(Math.floor(this.randomCustomers[i]*this.avgCS))
        }
        
    },

    displayresult: function(){
        let parent = document.getElementById('list')

        let listItemsT =document.createElement('h2')
parent.appendChild(listItemsT)
    listItemsT.textContent = this.name


let unOrdered = document.createElement('ul')
parent.appendChild(unOrdered);
for (let i = 0; i < hours.length; i++) {
   let items = document.createElement('li')
   unOrdered.appendChild(items);
   items.textContent = `${hours[i]}: ${this.cookiesPh[i]}`
   this.total= this.total+this.cookiesPh[i];
}
// this.total = this.cookiesPh[0]+this.cookiesPh[1]+this.cookiesPh[2]+this.cookiesPh[3]+this.cookiesPh[4]+this.cookiesPh[5]+this.cookiesPh[6]+this.cookiesPh[7]+this.cookiesPh[8]+this.cookiesPh[9]+this.cookiesPh[10]+this.cookiesPh[11]+this.cookiesPh[12]+this.cookiesPh[13]
let t = document.createElement('li');
unOrdered.appendChild(t)
t.textContent = `Total: ${this.total}` 

},


   
}


dubai.getCust();
dubai.getCookiesPh();
dubai.displayresult();


let paris ={
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCS : 2.3,
    randomCustomers: [],
    cookiesPh: [],
    total: 0,
    
    
    getCust : function(){
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomCust(this.minCust, this.maxCust)) 
        }
    }, 
    
    getCookiesPh: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPh.push(Math.floor(this.randomCustomers[i]*this.avgCS))
        }
        
    },

    displayresult: function(){
        let parent = document.getElementById('list')

        let listItemsT =document.createElement('h2')
parent.appendChild(listItemsT)
    listItemsT.textContent = this.name


let unOrdered = document.createElement('ul')
parent.appendChild(unOrdered);
for (let i = 0; i < hours.length; i++) {
   let items = document.createElement('li')
   unOrdered.appendChild(items);
   items.textContent = `${hours[i]}: ${this.cookiesPh[i]}`
   this.total= this.total+this.cookiesPh[i];
}
// this.total = this.cookiesPh[0]+this.cookiesPh[1]+this.cookiesPh[2]+this.cookiesPh[3]+this.cookiesPh[4]+this.cookiesPh[5]+this.cookiesPh[6]+this.cookiesPh[7]+this.cookiesPh[8]+this.cookiesPh[9]+this.cookiesPh[10]+this.cookiesPh[11]+this.cookiesPh[12]+this.cookiesPh[13]
let t = document.createElement('li');
unOrdered.appendChild(t)
t.textContent = `Total: ${this.total}` 

},


   
}


paris.getCust();
paris.getCookiesPh();
paris.displayresult();


let lima ={
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCS : 4.6,
    randomCustomers: [],
    cookiesPh: [],
    total: 0,
    
    
    getCust : function(){
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomCust(this.minCust, this.maxCust)) 
        }
    }, 
    
    getCookiesPh: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPh.push(Math.floor(this.randomCustomers[i]*this.avgCS))
        }
        
    },

    displayresult: function(){
        let parent = document.getElementById('list')

        let listItemsT =document.createElement('h2')
parent.appendChild(listItemsT)
    listItemsT.textContent = this.name


let unOrdered = document.createElement('ul')
parent.appendChild(unOrdered);
for (let i = 0; i < hours.length; i++) {
   let items = document.createElement('li')
   unOrdered.appendChild(items);
   items.textContent = `${hours[i]}: ${this.cookiesPh[i]}`
   this.total= this.total+this.cookiesPh[i];
}
// this.total = this.cookiesPh[0]+this.cookiesPh[1]+this.cookiesPh[2]+this.cookiesPh[3]+this.cookiesPh[4]+this.cookiesPh[5]+this.cookiesPh[6]+this.cookiesPh[7]+this.cookiesPh[8]+this.cookiesPh[9]+this.cookiesPh[10]+this.cookiesPh[11]+this.cookiesPh[12]+this.cookiesPh[13]
let t = document.createElement('li');
unOrdered.appendChild(t)
t.textContent = `Total: ${this.total}` 

},


   
}


lima.getCust();
lima.getCookiesPh();
lima.displayresult();