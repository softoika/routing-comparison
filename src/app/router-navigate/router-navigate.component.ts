import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-router-navigate',
  templateUrl: './router-navigate.component.html',
  styleUrls: ['./router-navigate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterNavigateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
