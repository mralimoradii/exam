import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 mac:{img3:string,paraf:string,price:string,cpu:string,ram:string,rom:string,grafic:string,resoulation:string,bime:string,color:{nameclo:string,cod:string}[],Insurance:{name:string,mony:string}[], waranti:{name:string,month:string,}[]}=
      {
       img3:"https://dkstatics-public.digikala.com/digikala-products/0453261f5778b624dae7dda88a414fe8fcf8d109_1671472045.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
       paraf:"لپ تاپ 13.6 اینچی اپل مدل MacBook Air-B M2 2022",
       price:"۵۳۴۸۰۰۰۰",
       cpu:"m2",
       ram:"۸گیگابایت",
       rom:"۲۵۶گیگابایت",
       grafic:"اپل",
       resoulation:"2560x1664",
       bime:"بیمه تجهیزات بیمه پارسیان",
       color:[
         {
           nameclo:"سرمه ای",
           cod:"#000000"
         },{
           nameclo:"خاکستری",
           cod:"#fbfbfb"
         },{
          nameclo:"نقره ای",
          cod:""
         }
       ],
       Insurance:[
         {
           name:"بیمه تجهیزات دیجیتال - بیمه پارسیان",
           mony:"۱,۱۸۳,۷۴۰"
         }
         
       ],
       waranti:[{
        name:"رایتاک",
        month:"گارانتی ۱۸ ماهه راسا همراه سورن"
      }
       ]
      }


 
}
