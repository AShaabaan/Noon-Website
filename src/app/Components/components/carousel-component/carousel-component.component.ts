import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.scss'],
})
export class CarouselComponentComponent implements OnInit {
  constructor(public translate: TranslateService,private httpClient:HttpClient, private router :Router) {}
  ngOnInit(): void { }


}
