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

  select(component:any|string):Element {
    return this.selector(component).customElement
  }

  on(eventName:string,callback:Function) {
    this.customElement.addEventListener(eventName,(event)=>{
      callback(event);
    });
    return this;
  }

  attr<T>(attributeName:string, newValue?:any, exposeJson?:boolean):T {
    if(newValue){
      this.customElement[attributeName] = newValue;
      if(exposeJson) {
        this.customElement.setAttribute(attributeName+"-ngx-element-data",JSON.stringify(newValue));
      }   
      else {
        let value = {'info':'exposeJson is set as false, set it to true to get data'};
        this.customElement.setAttribute(attributeName+"-ngx-element-data",JSON.stringify(value));
      }   
    }
    return JSON.parse(this.customElement.getAttribute(attributeName+"-ngx-element-data"));
  }
}