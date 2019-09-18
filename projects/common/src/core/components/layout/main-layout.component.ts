import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Module} from '../../models/module';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'labs-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public modules$: Observable<Module[]>;

  constructor(readonly moduleService: ModuleService) {
  }

  public ngOnInit(): void {
    this.modules$ = this.moduleService.modules;
  }
}
