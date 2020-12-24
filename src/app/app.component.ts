import {Component, OnInit} from '@angular/core';
import { GridStack, GridStackWidget } from 'gridstack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gridstak';

  options = {
    disableOneColumnMode: true,
    float: false
  };
  grid: GridStack;
  count = 1
  ngOnInit(): void {
    const items: GridStackWidget[] = [
      {x: 0, y: 0, w: 1, h:2, content: "0"},
      {x: 1, y: 0, w: 1, h:1, content: "1"},
    ];
    this.grid = GridStack.init(this.options);
    this.grid.load(items);
  }

  addNewWidget() {
    this.count++
    const node =  {
      x: Math.round(12 * Math.random()),
      y: Math.round(5 * Math.random()),
      w: Math.round(1 + 3 * Math.random()),
      h: Math.round(1 + 3 * Math.random()),
      content: this.count.toString(),
    };
    this.grid.addWidget(node);
  };

}
