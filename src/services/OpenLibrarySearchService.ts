import axios, { AxiosInstance, CancelToken } from "axios";
import {
  OLS_API_BASE,
  OLS_API_ROUTES,
  OLS_RES_BASE,
} from "../constants/apiEndpoints";
import { ISearchResponse, IUrlParameters } from "../types/OpenLibraryTypes";
import { blobToDataUrl } from "../utils/blob-utils";

class OpenLibrarySearchService {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: OLS_API_BASE,
    });
  }

  async searchBooks(params: IUrlParameters, cancelToken?: CancelToken) {
    try {
      const response = await this.api.get<ISearchResponse>(
        OLS_API_ROUTES["search"],
        {
          params,
          cancelToken,
        }
      );
      return response.data;
    } catch (e) {
      if (axios.isCancel(e)) return [];
      else {
        throw e;
      }
    }
  }

  private getResUrl(olid: string) {
    return `${OLS_RES_BASE}/${olid}.jpg`;
  }

  async getRes(olid: string, cancelToken?: CancelToken) {
    try {
      const response = await axios.get(this.getResUrl(olid), {
        responseType: "blob",
        cancelToken,
      });
      const contentType = response.headers["Content-Type"] as string;
      if (!contentType) throw new Error("Bad Response: No content type");
      const blob = new Blob([response.data], {
        type: contentType,
      });
      const dataUrl = await blobToDataUrl(blob);
      return dataUrl;
    } catch (e) {
      if (axios.isCancel(e)) return [];
      else {
        throw e;
      }
    }
  }
}

export default OpenLibrarySearchService;
