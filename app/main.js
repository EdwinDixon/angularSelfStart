import './vendor';
import LibraryModule from './library/library.module';
import MainRoute from './main.route';

export default angular.module("MyApplication",[LibraryModule.name,'ngRoute'])
    .config(MainRoute);