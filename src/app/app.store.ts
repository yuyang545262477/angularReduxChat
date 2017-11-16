import {InjectionToken} from "@angular/core";
import {compose, createStore, Store, StoreEnhancer} from "redux";
import {AppState, default as rootReducer} from "./app.reducer";

const devTools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;


export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(rootReducer, compose(devTools));
}

export const appStoreProviders = [
  {provide: AppStore, useFactory: createAppStore()}
];
