'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let shopLocations = []
function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Locations(name, minCust, maxCust, avgCS,) {
    this.name = name,
        this.minCust = minCust,
        this.maxCust = maxCust,
        this.avgCS = avgCS

        shopLocations.push(this)
}
let seattle = new Locations('Seattle', 23, 65, 6.3);
let tokyo = new Locations('Tokyo', 3, 24, 1.2);
let dubai = new Locations('dubai', 11, 38, 3.7);
let paris = new Locations('paris', 20, 38, 2.3);
let lima = new Locations('lima', 2, 16, 4.6);

let newLocation = document.getElementById('addLocation');
newLocation.addEventListener('submit', reactionToS);

function reactionToS(event){
event.preventDefault();

let newName = event.target.name.value; 

let minC = parseInt(event.target.min.value);

let maxC =parseInt( event.target.max.value);

let avgCS02 = parseFloat(event.target.avg.value);


let newL = new Locations(newName, minC, maxC, avgCS02);
tableAll.textContent= '';
headerRow();
for (let i = 0; i < shopLocations.length; i++) {
    shopLocations[i].getRandomCustomers();
    shopLocations[i].displayResults();
}
footerRow();
}



Locations.prototype.getRandomCustomers = function () {
    this.randomCustomers = [];
    this.cookiesPh = [];
    this.total = 0;
    for (let i = 0; i < hours.length; i++) {
        this.randomCustomers.push(randomCust(this.minCust, this.maxCust));
        this.cookiesPh.push(Math.floor(this.randomCustomers[i] * this.avgCS));
        this.total = this.total + this.cookiesPh[i]
    }
}
for (let i = 0; i < shopLocations.length; i++) {
    
    shopLocations[i].getRandomCustomers();
}
// seattle.getRandomCustomers();
// tokyo.getRandomCustomers();
// dubai.getRandomCustomers();
// paris.getRandomCustomers();
// lima.getRandomCustomers();
let parent = document.getElementById('list')
let tableAll = document.createElement('table')
parent.appendChild(tableAll)
//......................[HEADER ROW & FOOTER ROW]...............................
function headerRow() {
    let row00 = document.createElement('tr')
    tableAll.appendChild(row00)
    let emtHR = document.createElement('th')
    row00.appendChild(emtHR)
    emtHR.textContent = 'Location'
    for (let i = 0; i < hours.length; i++) {
        let tHeader = document.createElement('th')
        row00.appendChild(tHeader)
        tHeader.textContent = hours[i]
    }

    let total = document.createElement('th')
    row00.appendChild(total)
    total.textContent = "Daily Location Total"
}
function footerRow() {
    let footerRow = document.createElement('tr')
    tableAll.appendChild(footerRow)
    let fTotal = document.createElement('th')
    footerRow.appendChild(fTotal)
    fTotal.textContent = 'Total'
    
    for (let i = 0; i < hours.length; i++) {
        let emt = document.createElement('th');
        footerRow.appendChild(emt);
        let sum = 0;
        for (let j = 0; j < shopLocations.length; j++) {
            
            sum += shopLocations[j].cookiesPh[i];
            emt.textContent = sum
        }

        // emt.textContent = +tokyo.cookiesPh[i]+dubai.cookiesPh[i]+paris.cookiesPh[i]+lima.cookiesPh[i]
    }
    let total1 = document.createElement('th')
    footerRow.appendChild(total1)
    let sum1 = 0;
    for (let i = 0; i < shopLocations.length; i++) {
        sum1+= shopLocations[i].total
        total1.textContent = sum1 
        
        
    }
    
}                                         
//..................................................
headerRow();
Locations.prototype.displayResults = function () {


    let row01 = document.createElement('tr')
    tableAll.appendChild(row01)
    let locationRow = document.createElement('td')
    row01.appendChild(locationRow)
    locationRow.textContent = this.name

    for (let i = 0; i < hours.length; i++) {
        let cookiesPhRow = document.createElement('td')
        row01.appendChild(cookiesPhRow)
        cookiesPhRow.textContent = this.cookiesPh[i]
    }

    let totalR = document.createElement('td')
    row01.appendChild(totalR)
    totalR.textContent = this.total



}

for (let i = 0; i < shopLocations.length; i++) {
    
    shopLocations[i].displayResults();
}
// seattle.displayResults();
// tokyo.displayResults();
// dubai.displayResults();
// paris.displayResults();
// lima.displayResults();

footerRow();


/*
console.log(seattle.randomCustomers);
console.log(seattle.cookiesPh);
console.log(seattle.total);
console.log(tokyo.cookiesPh);*/


/*
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
*/