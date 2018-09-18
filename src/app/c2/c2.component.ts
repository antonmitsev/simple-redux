import { RdxService } from '../rdx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  providers: [RdxService]
})
export class C2Component implements OnInit {
  public counter;

  constructor(private rdxService: RdxService) {
    rdxService.publicStore.subscribe(() => this.readState());
    this.readState();
  }

  public ngOnInit() {
  }

  public readState() {
    this.counter = this.rdxService.readState().counter;
  }

  public increment() {
    this.rdxService.increment(2);
  }

  public decrement() {
    this.rdxService.decrement(2);
  }

}
