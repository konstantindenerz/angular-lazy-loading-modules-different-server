import {Component, ElementRef, HostListener, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {Context} from '../../services/context';
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
    readonly injector: Injector,
    readonly context: Context,
    readonly viewContainerRef: ViewContainerRef
  ) {
  }

  public ngOnInit(): void {
    combineLatest(this.moduleService.modules, this.activatedRoute.params).subscribe(([modules, { id }]) => {
      this.viewContainerRef.clear();
      this.moduleService.load(modules.find(current => current.id === id), this.elementRef.nativeElement);
    });
  }

  @HostListener('document:activate-module', ['$event.detail'])
  public bootstrap(module: { bootstrap: (parentContext: any) => void }) {
    module.bootstrap(this.context);
  }
}
