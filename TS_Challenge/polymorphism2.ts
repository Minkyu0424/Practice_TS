interface SStorage<T> {
  [key: string]: T;
}
abstract class LocalStorage<T> {
  public storage: SStorage<T> = {};
  abstract set(key: string, value: T): void 
  abstract remove(key: string): void 
  abstract get(key: string):  T | null
  abstract clear(key: string): void 
}

class LocalStorageMini  extends LocalStorage<number>{
    set(key:string, value:number){
        this.storage[key]= value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key: string): number | null {
        if(this.storage[key] !== undefined){
            return null
        }else{
            return this.storage[key]
        }
    }
    clear(key: string): void {
        this.storage={}
    }
}


export {};
