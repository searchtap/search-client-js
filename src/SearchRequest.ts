import {GeoType, ObjOfStringArray} from "./TypeDefs";

export class SearchRequest {

  query: string = '';
  fields: string[] = ["*"];
  textFacets: string[] = [];
  highlightFields: string[] = [];
  searchFields: string[] = ["*"];
  filter: string = '';
  sort: string[] = [];
  skip: number = 0;
  count: number = 30;
  collection: string = '';
  facetCount: number = 100;
  groupBy?: string;
  groupCount: number = -1;
  typoTolerance: number = 1;
  textFacetFilters: ObjOfStringArray = {};
  numericFacets: ObjOfStringArray = {};
  numericFacetFilters: ObjOfStringArray = {};
  textFacetQuery: TextFacetQuery | null = null;

  geo: GeoType = {};

  toJson(): {} {
    return Object.assign({}, this);
  }
}

export class TextFacetQuery {
  query: string ;
  count: number;

  constructor(query: string, count: number) {
    this.query = query;
    this.count = count || 100;
  }
}