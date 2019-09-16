import {HttpClient} from '@angular/common/http';
import {Injectable, NgModuleFactoryLoader} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../app/src/environments/environment';
import {Module} from '../models/module';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {

  constructor(readonly httpClient: HttpClient, readonly loader: NgModuleFactoryLoader) {

  }

  getAll(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(`${environment.api}/modules`);
  }
}
