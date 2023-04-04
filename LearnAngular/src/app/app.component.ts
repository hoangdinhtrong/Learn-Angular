import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';

  public citites = [
    {
      city: 'Select city',
      district: []
    },
    {
      city: 'An Giang',
      district: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân',
      'Huyện Thoại Sơn',
      'Huyện Tịnh Biên',
      'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
      'Thành phố Vũng Tàu',
      'Thị xã Bà Rịa',
      'Thị xã Phú Mỹ',
      'Huyện Châu Đức',
      'Huyện Côn Đảo',
      'Huyện Đất Đỏ',
      'Huyện Long Điền',
      'Huyện Tân Thành',
      'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
      'Thành phố Bạc Liêu',
      'Huyện Đông Hải',
      'Huyện Giá Rai',
      'Huyện Hòa Bình',
      'Huyện Hồng Dân',
      'Huyện Phước Long',
      'Huyện Vĩnh Lợi',
      ],
    },
  ];

  public districts: string[] = [];

  public changeCity(event: any): void{
    const city = event.target.value;
    if(!city){
      return;
    }

    //// Solution 1: Use filter => return list/array, then loop each element of cities, then loop district array of this city and push to districts array
    //// Note: we need clear districts array before we loop
    //// this solution is complicated
    let search = this.citites.filter(x => x.city === city);
    
    // this.districts = [];
    // if(search && search.length > 0){
    //   search.forEach(x => {
    //     if(x.district && x.district.length > 0){
    //       x.district.forEach(e => {
    //         this.districts.push(e);
    //       })
    //     }
    //     else{
    //       this.districts = [];
    //     }
    //   });
    // }

    //// Solution 2: Use filter => return list/array, then select first element of cities, then assign district array of this city to districts array
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }
    // else{
    //   this.districts = [];
    // }

    //// Solution 3: Use find to get a element of cities array, then assign district array of this city to districts array
    this.districts = this.citites.find(x => x.city === city)?.district || [];
  }
}
