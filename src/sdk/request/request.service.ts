import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class RequestService {
  private async sendRequest(method: string, url: string, data?: any): Promise<AxiosResponse> {
    try {
      const response = await axios({
        method,
        url: `${url}`,
        data,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  }

  public async get(url: string): Promise<AxiosResponse> {
    return this.sendRequest('get', url);
  }

  public async post(url: string, data: any): Promise<AxiosResponse> {
    return this.sendRequest('post', url, data);
  }

  public async put(url: string, data: any): Promise<AxiosResponse> {
    return this.sendRequest('put', url, data);
  }

  public async patch(url: string, data: any): Promise<AxiosResponse> {
    return this.sendRequest('patch', url, data);
  }

  public async delete(url: string): Promise<AxiosResponse> {
    return this.sendRequest('delete', url);
  }
}
