type iteratee = (value: any, index: number, array: any[]) => any;
type predicatee = (value: any, index: number, array: any[]) => boolean;
declare module "lodash" {
  function head<T>(arr: T[]): T | undefined;
  function hasIn(object: {}, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString<T>(value: T): string;
  function split(string: string, separator: string, limit: number): string[];
  function hasPath(object: object): boolean;
  function filter<T>(arr: T[], predicate: predicatee): T[];
  function every<T>(arr: T[], predicate: predicatee): boolean;
  function map<T>(arr: T[], iterate: iteratee): T[];
}
