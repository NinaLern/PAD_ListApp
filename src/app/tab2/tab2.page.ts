import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  courses=[
    {name: '資訊系統實務', img:'https://img.stickers.cloud/packs/6a7361f8-1280-4cad-9e5d-6e879600f1f4/webp/84696289-6d30-41dd-ba07-a71d62c2dbeb.webp', credit: 2, subject: '選修', desc: 'Packet Tracer', icon:'analytics'},
    {name: '企業資料通訊', img:'https://www.bomb01.com/upload/news/original/584985332f9f30dc0358deb1d86c2a5d.jpg', credit: 3, subject: '必修', desc: '介紹基本的網路概念和技術並透過實際操作來認識網路和網際網路', icon:'basketball'},
    {name: '網路消費者行為', img:'https://images2.gamme.com.tw/news2/2017/52/41/qZqZo6SVk6ecq6Q.jpg', credit: 2, subject: '選修', desc: '建立消費者行為的基本知識，並了解消費者的購買行為的決策過程。', icon:'beer'}
  ];
  constructor() {}

}
