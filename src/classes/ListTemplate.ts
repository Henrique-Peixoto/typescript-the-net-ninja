import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(
    private container: HTMLUListElement
  ){}

  render(item: HasFormatter, itemHeading: string, itemPositionOnTheList: 'start' | 'end'){
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = itemHeading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(itemPositionOnTheList === 'start'){
      this.container.prepend(li);
    }else{
      this.container.append(li);
    }
  }
}