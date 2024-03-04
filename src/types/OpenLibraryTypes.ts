/**
 * q	The solr query. See Search HowTo for sample queries
fields	The fields to get back from solr. Use the special value * to get all fields (although be prepared for a very large response!).
To fetch availability data from archive.org, add the special value, availability. Example: /search.json?q=harry%20potter&fields=*,availability&limit=1. This will fetch the availability data of the first item in the `ia` field.

sort	You can sort the results by various facets such as new, old, random, or key (which sorts as a string, not as the number stored in the string). For a complete list of sorts facets look here (this link goes to a specific commit, be sure to look at the latest one for changes). The default is to sort by relevance.

lang	The users language as a two letter (ISO 639-1) language code. This influences but doesn't exclude search results. For example setting this to fr will prefer/display the French edition of a given work, but will still match works that don't have French editions. Adding language:fre on the other hand to the search query will exclude results that don't have a French edition.

offset / limit	Use for pagination.

page / limit	Use for pagination, with limit corresponding to the page size. Note page starts at 1.
 */
export const languageCodes = ["en"] as const;
export type ILanguageCode = (typeof languageCodes)[number];

export const sortBy = ["new", "old", "random", "key"] as const;
export type ISortBy = (typeof sortBy)[number];

export interface IUrlParametersCommon {
  q: string;
  fields: string;
  sort: ISortBy;
  lang: ILanguageCode;
}

export type IUrlParameters = IUrlParametersCommon &
  (
    | {
        offset: number;
        page: number;
      }
    | { limit: number }
  );

export interface IDocCommon {
  cover_i?: string;
  has_fulltext?: boolean;
  edition_count?: number;
  title: string;
  author_name?: string[];
  first_pusblish_year?: string;
  key: string;
  ia?: string[];
  author_key?: string[];
  public_scan_b?: boolean;
  editions?: IDocCommon;
}

export type IDoc = IDocCommon;

export interface ISearchResponse {
  start: number;
  num_found: number;
  numFoundExact?: boolean;
  docs: IDoc[];
}
