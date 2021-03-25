import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  courses=[
    {name: '資訊系統實務', credit: 2, subject: '選修', desc: 'Packet Tracer', icon:'analytics'},
    {name: '企業資料通訊', credit: 3, subject: '必修', desc: '介紹基本的網路概念和技術並透過實際操作來認識網路和網際網路', icon:'basketball'},
    {name: '網路消費者行為', credit: 2, subject: '選修', desc: '建立消費者行為的基本知識，並了解消費者的購買行為的決策過程。', icon:'beer'}
  ];

  constructor() {}

}
