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
import {ApiClient} from '../ApiClient';

/**
 * The TradeWiseMetaData model module.
 * @module model/TradeWiseMetaData
 * @version v2
 */
export class TradeWiseMetaData {
  /**
   * Constructs a new <code>TradeWiseMetaData</code>.
   * Response data for brokerage
   * @alias module:model/TradeWiseMetaData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TradeWiseMetaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeWiseMetaData} obj Optional instance to populate.
   * @return {module:model/TradeWiseMetaData} The populated <code>TradeWiseMetaData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TradeWiseMetaData();
      if (data.hasOwnProperty('trades_count'))
        obj.tradesCount = ApiClient.convertToType(data['trades_count'], 'Number');
      if (data.hasOwnProperty('page_size_limit'))
        obj.pageSizeLimit = ApiClient.convertToType(data['page_size_limit'], 'Number');
    }
    return obj;
  }
}

/**
 * Total count of trades in the trade wise P and L report
 * @member {Number} tradesCount
 */
TradeWiseMetaData.prototype.tradesCount = undefined;

/**
 * Maximum number of trades in a page of the trade wise P and L report API
 * @member {Number} pageSizeLimit
 */
TradeWiseMetaData.prototype.pageSizeLimit = undefined;

