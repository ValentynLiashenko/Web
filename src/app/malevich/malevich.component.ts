import { Component, OnInit } from '@angular/core';

const arr=[
  {name:"Alex Smith",occupation:"Owner,partner",srcq:"assets\\img\\41.jpg"},
  {name:"Susan Tylor",occupation:"CEO",srcq:"assets\\img\\42.jpg"},
  {name:"George Smith",occupation:"Partner",srcq:"assets\\img\\43.jpg"},
  {name:"Lexi Tylor",occupation:"Partner",srcq:"assets\\img\\44.jpg"}
];

@Component({
  selector: 'app-malevich',
  templateUrl: './malevich.component.html',
  styleUrls: ['./malevich.component.scss'],
  template:`
    <div>Meet Our Attorneys</div>
    <span>___</span>
    <div class="at">
    <div class="bibi" *ngFor="let ar of arrs">
      <img src={{ar.srcq}} class="abc"/>
      <span>{{ar.name}}</span>
      <span>___</span>
      <span>{{ar.occupation}}</span>
    </div>
    </div>
    <div class = "block5">
    <p id="text_block50">Law firm devoted to our clients</p>
    <p id="text_block51">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed</p>
    <p id="text_block52">Deiusmod tempor incididunt ut labore.</p>
    <span><a href="#" id="block51" >Read More</a></span>
  </div>
   <div class = "block6">	   
    <span id="block61"><img src="eeee.png"></span>
    <p id="zag">How it works</p>
    <p id="zag10">Man bun hashtag microdosing meggings, art party vegan messenger bag waistcoat cred shoreditch fap.</p>	
    <p id="number1">1</p>
    <p id="number11">Free Consultation</p>
    <p id="number111">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore</p>
    
    <p id="number2">2</p>
    <p id="number22">Quality Representation</p>
    <p id="number222">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore</p>
    
    <p id="number3">3</p>
    <p id="number33">Quality Representation</p>
    <p id="number333">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore</p>
    
    <p id="number4">4</p>
    <p id="number44">Quality Representation</p>
    <p id="number444">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore</p>
   </div>
  <div class="h1">
  <span id="logo2"><img src="z001.png"></span>	
  <span id="logo21">But nothing the copy said could convince her and so it didn’t take long until a few insidious.</span>
  <div class="z0"></div>
    <table >
      <caption class="misce_h1">LASTEST POST</caption>
    <tbody class="misce_h1">
      <tr id="misc1"><td>Dissuade Ecstatic</td></tr>
      <tr id="misc2"><td>Dissuade Ecstatic</td></tr>
      <tr id="misc3"><td>Dissuade Ecstatic</td></tr>
      <tr id="misc4"><td>Dissuade Ecstatic</td></tr>
      <tr id="misc5"><td id="super_h1">Dissuade Ecstatic</td></tr>
    </tbody>
    </table>
    <p id="zag01">BUSINESS HOURS</p>
    <p id="zag02">Our support Hotline is available 24
      Monday-Friday: 9am to 5pm
      Saturday: 10am to 2pm
      Sunday: Closed</p>
    <p id="zag03">PORTFOLIO</p>
    </div>
    <div id="block00011">
    <p id="block0011"><a href="#">Homepage</a></p>
    <p class="block0012"><a href="#">About Us</a></p>
    <p class="block0012"><a href="#">Lawyers</a></p>
    <p class="block0012"><a href="#">Services</a></p>
    <p class="block0012"><a href="#">Blog</a></p>
    <p class="block0012"><a href="#">Contact</a></p>
   </div>
  `
})
export class MalevichComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  arrs=arr;

}
