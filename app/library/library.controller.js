/**
 * Created by edwin on 8/2/17.
 */
export default class LibraryController{
    constructor(){
        this._name='';
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}
LibraryController.$inject = [];