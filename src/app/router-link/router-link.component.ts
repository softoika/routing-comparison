import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
