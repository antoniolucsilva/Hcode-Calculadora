class CalcController {

    constructor() {
        this._operation = [];
        this._displayCalcEl = document.querySelector('#display');
        this._dataEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

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

    addEventListenerAll(element, events, fn) {
        
        events.split(' ').forEach(event=>{
            element.addEventListener(event , fn);
        })

    }
    clearAll(){

    }
    setError(){
        this.displayCalcEl = "ERROR"
    }
    clearentry(){}

    execBtn(value){
        switch(value){

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearentry();
                break;
            case 'soma':
                break;
            case 'subtracao':
                break;
            case 'divisao':
                break;
            case 'mutiplicacao':
                break;
            case 'porcento':
                break;
            case 'igual':
                break;
            case 'ponto':
                break;
            case 'ac':
                break;
            case 'ac':
                break;
            case 'ac':
                break;

                default:
                    this.setError()
        }
    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(btn => {
            this.addEventListenerAll(btn , 'click drag' , ()=>{
                let textBtn = btn.className.baseVal.replace('btn-' , '');
                this.execBtn(textBtn);
            } );
        });

        buttons.forEach(btn => {
            this.addEventListenerAll(btn , 'mouseover mousedown mouseup' , ()=>{
                btn.style.cursor = "pointer";
            } );
        });

        
    } //fim initbuttons

}

