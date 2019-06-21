import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class NgxElement {
  constructor(private componentFacotryResolver: ComponentFactoryResolver) { }
  private customElement:Element;

  selector(component:any|string) {
    if(typeof(component)==='string') {
      this.customElement = document.querySelector(component);
    }
    else {
      const componentFacotry = this.componentFacotryResolver.resolveComponentFactory(component);
      if(componentFacotry.selector) {
        this.customElement = document.querySelector(componentFacotry.selector);
      }
    }
    return this;
  }

  select() {
    return this.customElement
  }

  listener(eventName:string,callback:Function) {
    this.customElement.addEventListener(eventName,(event)=>{
      callback(event);
    });
    return this;
  }

  attr(attributeName:string, newValue:any) {
    this.customElement[attributeName] = newValue;
  }
}
