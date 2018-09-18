import { RdxService } from '../rdx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  providers: [RdxService]
})
export class C1Component implements OnInit {
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
    this.rdxService.increment();
  }

  public decrement() {
    this.rdxService.decrement();
  }

}
