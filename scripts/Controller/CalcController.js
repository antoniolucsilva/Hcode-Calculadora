class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector('#display');
        this._dataEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.iniButtonsEvents();

    }
    initialize() {
        this.displayDateTime();
        let interval = setInterval(() => {
            this.displayDateTime();
        }, 1000);

    }
    displayDateTime() {
        this.dataEl = this.currentDate.toLocaleDateString();
        this.timeEl = this.currentDate.toLocaleTimeString();
    }
    get displayCalcEl() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalcEl(value) {
        this._displayCalcEl.innerHTML = value;
    }
    get dataEl() {
        return this._dataEl.innerHTML;
    }
    set dataEl(value) {
        this._dataEl.innerHTML = value;
    }
    get timeEl() {
        return this._timeEl.innerHTML;
    }
    set timeEl(value) {
        this._timeEl.innerHTML = value;
    }
    get currentDate() {
        return new Date();
    }

    iniButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                console.log(btn.className.baseVal.replace("btn-" , ""))
            });
            
        });
    }

}

