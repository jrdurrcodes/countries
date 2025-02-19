class Countries {

    //constructor
    constructor() {

        this.countries = []
    
        this.country = {
            id: '', 
            countryName: '',
            capital: '',
            population:'0',
            cuisine: '',
            govtType: '',
            yrEstablished: 0
        }

        this.row = document.getElementById('cardRow')

        this.form = document.getElementById('countryForm')

        this.btn = document.getElementById('submitBtn')

        this.isValid = true
    }   

    init() {
        //test.isValid...

        this.isValid = true

        this.collectData()
    
        if (this.isValid) {
            this.buildCard(this.row, this.country)
        }   

    }
    /** 
    *Collect data
    *validate data
    *store data 
    *Display data*/

    buildCard(el, obj) {
        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')
        card.setAttribute('id', `${obj.id}`)
        
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const countryName = document.createElement('h2')
        countryName.classList.add('card-title', 'text-capitalize')
        countryName.innerText = obj.countryName

        const capital = document.createElement('p')
        capital.classList.add('card-text', 'text-capitalize')
        capital.innerText = `Capital City: ${obj.capital}`

        const stats = document.createElement('p')
        stats.classList.add('card-text', 'text-capitalize')   
        stats.innerText = `Population $obj.population} | For of Govt: ${obj.govtType}
            Famous Dish: ${obj.cuisine}`

        const cardFooter = document.createElement('footer')
        cardFooter.classList.add('card-footer')

        const yrEstablished = document.createElement('card-text')
        yrEstablished.classList.add('card-text')
        yrEstablished.innerText = `Year esatblished: ${obj.yrEsablished}`

        cardFooter.appendChild(yrEstablished)
        cardBody.appendChild(countryName)
        cardBody.appendChild(capital)
        cardBody.appendChild(stats)
        card.appendChild(cardBody)
        card.appendChild(cardFooter)
        column.appendChild(card)
        el.appendChild(column)

    }

    collectData () {
        //const form = this.form
        const countryName = document.getElementById('countryName').value
        const capital = document.getElementById('capital').value
        const population = parseInt(document.getElementById('population').value)
        const govtType = document.getElementById('govtType').value
        const cuisine = document.getElementById('cuisine').value
        const yrEstablished = parseInt(document.getElementById('yrEstablished').value)


        let obj = {
            countryName,
            capital,
            population, 
            govtType,
            cuisine,
            yrEstablished
        }
        this.validateData(obj)
        
    }
    storeData(obj) {
        this.country = {
            id:`${obj.countryName.slice(0, 3)}${obj.yrEstablished}`,
            countryName: obj.countryName,
            capital: obj.capital,
            population: obj.population.toLocaleString(),
            govtType: obj.govtType,
            cuisine: obj.cuisine,
            yrEstablished: obj.yrEstablished

        }

        this.countries = [...this.countries, this.country]

        console.log(this.countries)
    }
    
    validateData(obj) {
        if (isNaN(obj.population) || isNaN(obj.yrEstablished)) {
            alert('Error: population and year must be numberical values')
            this.isValid = false
        } else {
            this.storeData(obj)
        }  
    }
}





const action = new Countries()

action.init()

action.btn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()
})



