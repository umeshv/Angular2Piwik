/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/core/src/di/injector';
class Angular2PiwikModuleInjector extends import0.NgModuleInjector<import1.Angular2PiwikModule> {
  _Angular2PiwikModule_0:import1.Angular2PiwikModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.Angular2PiwikModule {
    this._Angular2PiwikModule_0 = new import1.Angular2PiwikModule();
    return this._Angular2PiwikModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.Angular2PiwikModule)) { return this._Angular2PiwikModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Angular2PiwikModuleNgFactory:import0.NgModuleFactory<import1.Angular2PiwikModule> = new import0.NgModuleFactory(Angular2PiwikModuleInjector,import1.Angular2PiwikModule);