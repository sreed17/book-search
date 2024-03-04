export function isRecord(arg: any): arg is Record<string, any> {
  if (!(typeof arg === "object")) return false;
  return true;
}
