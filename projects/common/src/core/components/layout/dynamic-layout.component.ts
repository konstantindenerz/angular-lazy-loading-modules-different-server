import {Component, ElementRef, HostListener, Injector, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Subscription} from 'rxjs';
import {Context} from '../../services/context';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'labs-dynamic-layout',
  template: '',
  styleUrls: ['./dynamic-layout.component.scss'],
})
export class DynamicLayoutComponent implements OnInit, OnDestroy {
  private subscription = Subscription.EMPTY;

  constructor(
    readonly moduleService: ModuleService,
    readonly elementRef: ElementRef,
    readonly activatedRoute: ActivatedRoute,
    readonly injector: Injector,
    readonly context: Context,
    readonly viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = combineLatest(this.moduleService.modules, this.activatedRoute.params).subscribe(([modules, { id }]) => {
      this.viewContainerRef.clear();
      this.moduleService.load(modules.find(current => current.id === id), this.elementRef.nativeElement);
    });
  }

  @HostListener('document:activate-module', ['$event.detail'])
  public bootstrap(module: { init: (parentContext: any) => void }) {
    module.init(this.context);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
