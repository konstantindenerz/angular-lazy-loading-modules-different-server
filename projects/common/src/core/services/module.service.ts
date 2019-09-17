import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {environment} from '../../../../app/src/environments/environment';
import {Module} from '../models/module';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  public readonly modules: Observable<Module[]>;

  constructor(readonly httpClient: HttpClient) {
    this.modules = this.httpClient.get<Module[]>(`${environment.api}/modules`).pipe(shareReplay(1));
  }
}
