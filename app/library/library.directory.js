/**
 * Created by edwin on 8/2/17.
 */
import LibraryController from './library.controller';
import LibraryTemplate from './library.template.html!text';
export default function libraryDirective(){
    return {
        restrict: 'EA',
        scope:{},
        replace: true,
        controller: LibraryController,
        controllerAs: 'lc',
        template: LibraryTemplate
    }
}

libraryDirective.$inject = [];
