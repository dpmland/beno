interface ValidateMethods {
  string(): string;
  number(): number;
  boolean(): boolean;
}

export class Validate implements ValidateMethods {
  private val: unknown;

  constructor(value: unknown) {
    this.val = value;
  }

  string(): string {
    if (typeof this.val !== 'string' || this.val.length === 0) {
      throw new Error(`Beno ERROR: This is not a valid type`);
    }
    return this.val;
  }

  boolean(): boolean {
    if (typeof this.val == 'boolean') return this.val;

    // Fixes returns
    if (this.val == true) return true;
    if (this.val == false) return false;

    throw new Error(`Beno ERROR: This is not a valid type`);
  }

  number(): number {
    // Valid if is NaN
    if (typeof this.val == 'number') {
      if (isNaN(this.val)) {
        throw new Error(`Beno ERROR: This is not a valid type`);
      }
      return this.val;
    }

    // string to number conversion
    // // string to number conversion
    if (typeof this.val === 'string' && this.val.length > 0) {
      if (this.val as unknown == Number(this.val)) {
        return Number(this.val);
      }
    }

    throw new Error(`Beno ERROR: This is not a valid type `);
  }
}
