export class LocalStorage<T> {
  /**
   * Modified when running in test mode or dev-with-mock-server mode (`dev:mock-server` command in package.json)
   */
  static DEFAULT_LS_PREFIX = "";

  constructor(private _prefix?: string) {}

  get prefix() {
    return this._prefix || LocalStorage.DEFAULT_LS_PREFIX;
  }

  protected get<KeyType extends keyof T>(
    key: KeyType
  ): T[KeyType] | null | undefined {
    return localStorage.getItem(
      this.prefix + (key as string)
    ) as unknown as T[KeyType];
  }

  protected set<KeyType extends keyof T>(
    key: KeyType,
    value: T[KeyType]
  ): void {
    localStorage.setItem(
      this.prefix + (key as string),
      value as unknown as string
    );
  }

  protected remove<KeyType extends keyof T>(key: KeyType): void {
    return localStorage.removeItem(this.prefix + (key as string));
  }
}
