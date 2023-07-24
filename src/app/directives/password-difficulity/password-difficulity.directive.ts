import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordDifficulity]'
})
export class PasswordDifficulityDirective {

  constructor(private el:ElementRef) { }

PasswordExp:RegExp = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

  @HostListener ('keyup') onKeyPress(){
    if(this.el.nativeElement.value!=""){
      if(this.PasswordExp.test(this.el.nativeElement.value)==true){
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-success");
      this.el.nativeElement.nextSibling.innerHTML="strong";
      }else if(this.PasswordExp.test(this.el.nativeElement.value)==false){
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-danger");
      this.el.nativeElement.nextSibling.innerHTML="weak";
      }
    }else{
        this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
        this.el.nativeElement.nextSibling.classList.add("alert","alert-primary");
      this.el.nativeElement.nextSibling.innerHTML="enter password";
      };
    
  }
}
