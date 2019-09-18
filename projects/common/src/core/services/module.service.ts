import {HttpClient} from '@angular/common/http';
import {Injectable, Injector, Type} from '@angular/core';
import {createCustomElement} from '@angular/elements';
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

  static activate(components: { [selector: string]: Type<any> }, parentInjector: Injector, contextType: Type<any>): void {
    document.dispatchEvent(new CustomEvent('activate-module', {
        detail: {
          init: (context) => {
            const injector = Injector.create({ providers: [{ provide: contextType, useFactory: () => context }], parent: parentInjector });
            Object.keys(components).forEach(selector => {
              customElements.define(selector, createCustomElement(components[selector], { injector }));
            });
          },
        },
      }),
    );
  }

  public load({ files, url, selector }: Module, element: HTMLElement): void {
    const entryComponent = document.createElement(selector);
    element.appendChild(entryComponent);

    files.forEach(file => {
        const fileUrl = `http://localhost:4201${url}/${file}`; // TODO: use API URL from DI
        const script = document.createElement('script');
        script.type = 'module';
        script.src = fileUrl;
        element.appendChild(script);
      },
    );
  }
}
