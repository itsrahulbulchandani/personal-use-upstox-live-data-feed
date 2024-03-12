/*
 * Upstox Developer API
 * Build your App on the Upstox platform  ![Banner](https://api-v2.upstox.com/api-docs/images/banner.jpg \"banner\")  # Introduction  Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more, with the easy to understand API collection.  All requests are over HTTPS and the requests are sent with the content-type ‘application/json’. Developers have the option of choosing the response type as JSON or CSV for a few API calls.  To be able to use these APIs you need to create an App in the Developer Console and generate your **apiKey** and **apiSecret**. You can use a redirect URL which will be called after the login flow.  If you are a **trader**, you can directly create apps from Upstox mobile app or the desktop platform itself from **Apps** sections inside the **Account** Tab. Head over to <a href=\"http://account.upstox.com/developer/apps\" target=\"_blank\">account.upstox.com/developer/apps</a>.</br> If you are a **business** looking to integrate Upstox APIs, reach out to us and we will get a custom app created for you in no time.  It is highly recommended that you do not embed the **apiSecret** in your frontend app. Create a remote backend which does the handshake on behalf of the frontend app. Marking the apiSecret in the frontend app will make your app vulnerable to threats and potential issues. 
 *
 * OpenAPI spec version: v2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ApiGatewayErrorResponse} from '../model/ApiGatewayErrorResponse';
import {GetProfitAndLossChargesResponse} from '../model/GetProfitAndLossChargesResponse';
import {GetTradeWiseProfitAndLossDataResponse} from '../model/GetTradeWiseProfitAndLossDataResponse';
import {GetTradeWiseProfitAndLossMetaDataResponse} from '../model/GetTradeWiseProfitAndLossMetaDataResponse';

/**
* TradeProfitAndLoss service.
* @module api/TradeProfitAndLossApi
* @version v2
*/
export class TradeProfitAndLossApi {

    /**
    * Constructs a new TradeProfitAndLossApi. 
    * @alias module:api/TradeProfitAndLossApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getProfitAndLossCharges operation.
     * @callback moduleapi/TradeProfitAndLossApi~getProfitAndLossChargesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProfitAndLossChargesResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get profit and loss on trades
     * This API gives the charges incurred by users for their trades
     * @param {String} segment Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
     * @param {String} financialYear Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromDate Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {String} opts.toDate Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {module:api/TradeProfitAndLossApi~getProfitAndLossChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProfitAndLossCharges(segment, financialYear, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'segment' is set
      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling getProfitAndLossCharges");
      }
      // verify the required parameter 'financialYear' is set
      if (financialYear === undefined || financialYear === null) {
        throw new Error("Missing the required parameter 'financialYear' when calling getProfitAndLossCharges");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getProfitAndLossCharges");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'from_date': opts['fromDate'],'to_date': opts['toDate'],'segment': segment,'financial_year': financialYear
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetProfitAndLossChargesResponse;

      return this.apiClient.callApi(
        '/trade/profit-loss/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTradeWiseProfitAndLossData operation.
     * @callback moduleapi/TradeProfitAndLossApi~getTradeWiseProfitAndLossDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTradeWiseProfitAndLossDataResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Trade-wise Profit and Loss Report Data
     * This API gives the data of the realised Profit and Loss report requested by a user
     * @param {String} segment Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
     * @param {String} financialYear Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
     * @param {Number} pageNumber Page Number, the pages are starting from 1
     * @param {Number} pageSize Page size for pagination. The maximum page size value is obtained from P and L report metadata API.
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromDate Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {String} opts.toDate Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {module:api/TradeProfitAndLossApi~getTradeWiseProfitAndLossDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTradeWiseProfitAndLossData(segment, financialYear, pageNumber, pageSize, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'segment' is set
      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling getTradeWiseProfitAndLossData");
      }
      // verify the required parameter 'financialYear' is set
      if (financialYear === undefined || financialYear === null) {
        throw new Error("Missing the required parameter 'financialYear' when calling getTradeWiseProfitAndLossData");
      }
      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getTradeWiseProfitAndLossData");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getTradeWiseProfitAndLossData");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getTradeWiseProfitAndLossData");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'from_date': opts['fromDate'],'to_date': opts['toDate'],'segment': segment,'financial_year': financialYear,'page_number': pageNumber,'page_size': pageSize
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetTradeWiseProfitAndLossDataResponse;

      return this.apiClient.callApi(
        '/trade/profit-loss/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTradeWiseProfitAndLossMetaData operation.
     * @callback moduleapi/TradeProfitAndLossApi~getTradeWiseProfitAndLossMetaDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTradeWiseProfitAndLossMetaDataResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get profit and loss meta data on trades
     * This API gives the data of the realised Profit and Loss report requested by a user
     * @param {String} segment Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
     * @param {String} financialYear Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromDate Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {String} opts.toDate Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     * @param {module:api/TradeProfitAndLossApi~getTradeWiseProfitAndLossMetaDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'segment' is set
      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling getTradeWiseProfitAndLossMetaData");
      }
      // verify the required parameter 'financialYear' is set
      if (financialYear === undefined || financialYear === null) {
        throw new Error("Missing the required parameter 'financialYear' when calling getTradeWiseProfitAndLossMetaData");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getTradeWiseProfitAndLossMetaData");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'from_date': opts['fromDate'],'to_date': opts['toDate'],'segment': segment,'financial_year': financialYear
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetTradeWiseProfitAndLossMetaDataResponse;

      return this.apiClient.callApi(
        '/trade/profit-loss/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}