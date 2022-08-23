class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
}
