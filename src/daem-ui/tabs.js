class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
        this.content = container.querySelectorAll('.content');
    }
    init(){
        this.tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        // Remove current active class
        this.tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        // Add new active class for the clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        // Remove current active class
        this.content.forEach((item) => {
            item.classList.remove('active');
        })
        // Add new active class to the clicked tab
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export { Tabs as default };
