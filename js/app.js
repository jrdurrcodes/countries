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
    }   

    init() {
        console.log('init')
    }
    /** 
    *Collect data
    *validate data
    *store data 
    *Display data*/

    collectData () {
        //const form = this.form
        const countryName = document.getElementById('countryName').value
        const capital = document.getElementById('capital').value
        const population = document.parseInt(document.getElementById('population').value)
        const govtType = document.getElementById('govtType').value
        const cuisine = document.getElementById('cuisine').value
        const yrEstablished = parseInt(document.getElementById('yrEstablised').value)


        obj = {
            countryName,
            capital,
            population, 
            govtType,
            cuisine,
            yrEstablished
        }
        this.validateData(population, yrEstablished)
        this.storeData(obj)
    }
    storeData(obj) {
        this.country = {
            id:`${countryName}
            countryName: obj.countryName,
            capital: obj.capital,
            population: obj.govtType,
            cuisine: obj.cuisine,
            yrEstablished: obj.yrEstablished

        }

        this.countries = [...this.countries, this.country]

        console.log(this.countries)
    }
    
    validateData(pop,yr) {
        if (isNaN(pop) || isNaN(yr)) {
            alert('Error: population and year must be numberical values')
        } else {
            return
        }
    }
}





const action = new Countries()

action.init()

action.btn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()
})



