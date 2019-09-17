import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'labs-dynamic-layout',
  template: '',
})
export class DynamicLayoutComponent implements OnInit {
  constructor(
    readonly moduleService: ModuleService,
    readonly elementRef: ElementRef,
    readonly activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    combineLatest(this.moduleService.getAll(), this.activatedRoute.params).subscribe(([modules, { id }]) => {
      const { files, url, selector } = modules.find(current => current.id === id);
      const entryComponent = document.createElement(selector);
      this.elementRef.nativeElement.appendChild(entryComponent);
      files.forEach((file) => {
          const fileUrl = `http://localhost:4201${url}/${file}`;
          const script = document.createElement('script');
          script.type = 'module';
          script.src = fileUrl;
          this.elementRef.nativeElement.appendChild(script);
        },
      );
    });
  }

}
