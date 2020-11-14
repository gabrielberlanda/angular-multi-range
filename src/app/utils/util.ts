export function convertToBoolean(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return val === 'true' || val === 'on' || val === '';
  }

  if (typeof val === 'number') {
    return val === 1;
  }

  return !!val;
}

export function convertToInt(value: any, valueDefault?: any): number {
  const validNumber = parseInt(value, 10);
  const validDefaultValue = parseInt(valueDefault, 10);
  const defaultValue = validDefaultValue || validDefaultValue === 0 ? validDefaultValue : undefined;

  return validNumber || validNumber === 0 ? validNumber : defaultValue;
}