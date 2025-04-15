export declare class Guid {
  static validator: RegExp;
  static empty: Guid;
  static parse(guid: string): Guid;
  static newGuid(): string;
  static isGuid(guid: any): boolean;
  static isEmpty(guid: any): boolean;
  static equals(guidA: any, guidB: any): boolean;
  private static gen;
}
