const cars = [
    "BMW", "Mercedes", "TOYOTA", "TESLA", "Porsche", "FERRARI", "LAMBORGHINI"
]

const ul = document.getElementById('myUL')

const inputStr = document.getElementById('search-input');

// console.log(searchStr);


const func = (index) => {
    ul.innerHTML = index.map(x => {

        console.log(x.toUpperCase());
        return `<li> ${x.toUpperCase()} </li>`
    }).join('')
}

inputStr.addEventListener('keyup', (e) => {
    const searchStr = (inputStr.value).toUpperCase();
    let searchArr = [];
    if(searchStr) {
        for (let i = 0; i < cars.length; i++) {
            searchArr.push(cars[i])
            if (
                searchStr.slice(0, 3) ===
                cars[i].toUpperCase().slice(0, 3)
            ) {
                func(searchArr);
                break;
            }
           
        }
    }
    else {
        func(cars);
    }
    
})

func(cars);