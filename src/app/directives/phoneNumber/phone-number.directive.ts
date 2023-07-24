import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective {
  constructor(private el:ElementRef) { }

phoneNumberExp:RegExp = new RegExp ("09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}");

  @HostListener ('keyup') onKeyPress(){
    if(this.el.nativeElement.value!=""){
      if(this.phoneNumberExp.test(this.el.nativeElement.value)==true){
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-success");
      this.el.nativeElement.nextSibling.innerHTML="correct";
      }else if(this.phoneNumberExp.test(this.el.nativeElement.value)==false){
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-danger");
      this.el.nativeElement.nextSibling.innerHTML="wrong";
      }
    }else{
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-primary");
      this.el.nativeElement.nextSibling.innerHTML="enter Phone number";
      };
    
  }
}
