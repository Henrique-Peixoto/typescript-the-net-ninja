export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, itemHeading, itemPositionOnTheList) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = itemHeading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (itemPositionOnTheList === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
