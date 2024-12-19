import {NgModule} from '@angular/core';
@NgModule({
  // Metadata goes here
})
export class CustomMenuModule { }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password:string="";

  lettersCheck:boolean=false;
  symbolsCheck:boolean=false;
  numbersCheck:boolean=false;
  length:number=0;

  constructor ()
  {
  }
  getPassword():string
  {
    return this.password;
  }
  OnButtonClick()
  {
    let numbers ="1234567890"; 
    let letters ="asdfghjklqwertyuio"; 
    let symbols ="!@#$%^&*()"; 

    let validChar="";
    if(this.numbersCheck)
      validChar += numbers;

    if(this.lettersCheck)
      validChar += letters;

    if(this.symbolsCheck)
      validChar += symbols;

    let generatedPass= "";
    for(let i:number=0; i<this.length;i++)
    {
      let index=Math.floor(Math.random()*validChar.length);
      generatedPass+=validChar[index];
    }

    this.password=generatedPass;
 

  }
  OnChangeLetters(){
    this.lettersCheck=!this.lettersCheck;
  }
  OnChangeNumbers(){
    this.numbersCheck=!this.numbersCheck;
  }
  OnChangeSymbols(){
    this.symbolsCheck=!this.symbolsCheck;
  }
  onChangeInput(value:string){
    const changedLength=parseInt(value)
    if(!isNaN(changedLength))
      this.length=changedLength;
    else
    this.length=0;
  }
}
