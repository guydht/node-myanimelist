import Recommendation from "../common/recommendation";

export interface Recommendations {
  recommendations: Recommendation[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
