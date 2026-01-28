class _IF<T> {
  private value: T | null = null;

  constructor(cond: any, val: T) {
    if (!!cond) {
      if (typeof val == "function") {
        this.value = val();
      } else {
        this.value = val;
      }
    }
  }

  elseIf(cond: any, val: T) {
    if (!this.value && !!cond) {
      if (typeof val == "function") {
        this.value = val();
      } else {
        this.value = val;
      }
    }
    return this;
  }

  else(val: T) {
    if (!this.value) {
      if (typeof val == "function") {
        this.value = val();
      } else {
        this.value = val;
      }
    }
    return this;
  }

  end() {
    return this.value;
  }
}

export const If = <T>(cond: any, value: T | (() => T)) => {
  return new _IF(cond, value);
};
