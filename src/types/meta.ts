
export interface IMetaResponse {
  title: string,
  description: string,
  published_time: string,
  modified_time: string,
  image: {
    url: string;
    width: number;
    height: number;
    alt?: string;
  }
}