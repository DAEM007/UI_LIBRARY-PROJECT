class Snackbar{
    constructor(){
        // Note that we do not need to pass an argument for the constructor because we are not getting a reference from the html
        this.snackbar = document.createElement('div');
    }
    init(){
        this.snackbar.classList.add('snackbar');
        // get reference to the body of the html
        const body = document.querySelector('body');
        body.appendChild(this.snackbar);
    }
    show(message){
        this.snackbar.textContent = message;
        // Adding the class of active
        this.snackbar.classList.add('active');
        // Removing the class of active after 4 secs
        setTimeout(() => {
            this.snackbar.classList.remove('active');
        }, 4000)
    }
}

export { Snackbar as default };