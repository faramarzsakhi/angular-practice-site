import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailValidation]'
})
export class EmailValidationDirective {

  constructor(private el:ElementRef) { }

  validateEmail(){
   return String(this.el.nativeElement.value)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
@HostListener ('keyup') onKeyup(){
  if(this.el.nativeElement.value!=''){
    if(this.validateEmail() != null){
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-success");
    this.el.nativeElement.nextSibling.innerHTML="correct";
    }else if(this.validateEmail() == null){
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-danger");
    this.el.nativeElement.nextSibling.innerHTML="Enter correct email";
    }
  }else{
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-primary");
    this.el.nativeElement.nextSibling.innerHTML="please fill in the blanks";
    };
  // console.log(this.validateEmail());
  
}
}
