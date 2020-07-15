import axios, { AxiosInstance } from 'axios';
import { InternalServerError } from '../utils/errors';
import { EtherscanApiBlockType } from '../types';

class EtherscanApi {
  axios: AxiosInstance;

  apiKey: string;

  constructor() {
    this.apiKey = '6KTECJKXWADW5DC3TT2PXIPRB37EY91662';
    this.axios = axios.create({
      baseURL: 'https://api.etherscan.io/api',
    });

    this.axios.interceptors.response.use(
      (response) => {
        const { data } = response;

        if (data.status === '0') {
          const {
            config: { baseURL, url },
          } = response;

          throw new InternalServerError(
            `[ERROR][ETHERSCAN_API] Request to \n'${baseURL}${url}'\n failed.` +
              ` Response data: ${JSON.stringify(data, null, 2)}`,
            500,
          );
        }

        return response;
      },
      (err) => {
        throw new InternalServerError(
          `[ERROR][ETHERSCAN_API] Request failed. ${err.message}`,
          500,
        );
      },
    );
  }

  async getLastBlockNumber(): Promise<string> {
    const {
      data: { result },
    } = await this.axios.get('/', {
      params: {
        apiKey: this.apiKey,
        module: 'proxy',
        action: 'eth_blockNumber',
      },
    });

    return result;
  }

  async getBlockByNumber(blockNumber: string): Promise<EtherscanApiBlockType> {
    const {
      data: { result },
    } = await this.axios.get('/', {
      params: {
        apiKey: this.apiKey,
        module: 'proxy',
        action: 'eth_getBlockByNumber',
        tag: blockNumber,
        boolean: true,
      },
    });

    return result;
  }
}

export default new EtherscanApi();
