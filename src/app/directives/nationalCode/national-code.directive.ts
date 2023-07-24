import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[nationalCode]'
})
export class NationalCodeDirective {

  constructor(private el:ElementRef) { }
  @Input() code='';
nationalIdLiveCheck() {
  let nationalId = this.code;
  let validity;
  if(nationalId.length == 10){
 
  let idArray = Array.from(nationalId);
  var idSum = 0;
  let idArrayNum = idArray.map((v:any, i:number) => {
      if (i < 9) {

          return v * (10 - i);
      } else if (i == 9) {
          return +v;
      }else{
        return 0;
      }
  })
  idArrayNum.forEach((v, i) => {
      if (i < 9) {
          idSum = (idSum + v) % 11;
      }
  });
  if (idSum < 2 && idSum == idArrayNum[9]) {

      validity=true;
  } else if (idSum >= 2 && idArrayNum[9] == 11 - idSum) {
      validity=true;
  } else {
      validity=false;
  }
  return(validity);  
}else{
  return false;
}

}
@HostListener ('keyup') onKeyup(){
  if(this.code!=''){
    if(this.nationalIdLiveCheck()==true){
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-success");
    this.el.nativeElement.nextSibling.innerHTML="correct";
    }else if(this.nationalIdLiveCheck()==false){
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-danger");
    this.el.nativeElement.nextSibling.innerHTML="false";
    }
  }else{
      this.el.nativeElement.nextSibling.classList.remove("alert","alert-success","alert-danger");
      this.el.nativeElement.nextSibling.classList.add("alert","alert-primary");
    this.el.nativeElement.nextSibling.innerHTML="please fill in the blanks";
    };
  
}
 
}
