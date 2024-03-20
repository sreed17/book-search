import { IBooksLayoutType, BOOKS_LAYOUTS } from "../types/General-Types";

export function isRecord(arg: any): arg is Record<string, any> {
  if (!(typeof arg === "object")) return false;
  return true;
}

// Type checking for IBooksLayoutType
export function isIBooksLayoutType(obj: unknown): obj is IBooksLayoutType {
  if (typeof obj !== "string") return false;
  return BOOKS_LAYOUTS.includes(obj as IBooksLayoutType);
}
