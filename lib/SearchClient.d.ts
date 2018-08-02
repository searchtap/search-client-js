import { GeoAround, Point, Range } from "./TypeDefs";
import { SearchRequest } from "./SearchRequest";
import { AxiosInstance } from "axios";
declare const _default: {
    new (appId: string, searchToken: string): {
        searchRequest: SearchRequest;
        restClient: AxiosInstance;
        appId: string;
        searchToken: string;
        searchFields(...searchFields: string[]): any;
        fields(...fields: string[]): any;
        textFacets(...textFacets: string[]): any;
        textFacetFilters(name: string, filters: string[]): any;
        numericFacets(name: string, ranges: Range[]): any;
        numericFacetFilters(name: string, min: number, max: number): any;
        filter(filter: string): any;
        sort(...sortFields: string[]): any;
        typoTolerance(typo: number): any;
        geo(val: GeoAround | Point[]): any;
        skip(skip: number): any;
        count(count: number): any;
        facetCount(facetCount: number): any;
        clear(): void;
        search(query: string, collectionId: string): Promise<{}>;
    };
};
export = _default;