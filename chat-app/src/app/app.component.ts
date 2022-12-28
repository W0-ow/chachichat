import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" 
        href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" 
        href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" 
        href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const kk = 22;
    console.log(kk);
    if (kk == 22) {
      console.log(kk);
    }
  }
  title = 'chachichat';
}
