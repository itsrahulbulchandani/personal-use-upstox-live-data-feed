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
import {OAuthClientExceptionCauseStackTrace} from './OAuthClientExceptionCauseStackTrace';
import {OAuthClientExceptionCauseSuppressed} from './OAuthClientExceptionCauseSuppressed';

/**
 * The OAuthClientExceptionCause model module.
 * @module model/OAuthClientExceptionCause
 * @version v2
 */
export class OAuthClientExceptionCause {
  /**
   * Constructs a new <code>OAuthClientExceptionCause</code>.
   * @alias module:model/OAuthClientExceptionCause
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OAuthClientExceptionCause</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthClientExceptionCause} obj Optional instance to populate.
   * @return {module:model/OAuthClientExceptionCause} The populated <code>OAuthClientExceptionCause</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OAuthClientExceptionCause();
      if (data.hasOwnProperty('stackTrace'))
        obj.stackTrace = ApiClient.convertToType(data['stackTrace'], [OAuthClientExceptionCauseStackTrace]);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('suppressed'))
        obj.suppressed = ApiClient.convertToType(data['suppressed'], [OAuthClientExceptionCauseSuppressed]);
      if (data.hasOwnProperty('localizedMessage'))
        obj.localizedMessage = ApiClient.convertToType(data['localizedMessage'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OAuthClientExceptionCauseStackTrace>} stackTrace
 */
OAuthClientExceptionCause.prototype.stackTrace = undefined;

/**
 * @member {String} message
 */
OAuthClientExceptionCause.prototype.message = undefined;

/**
 * @member {Array.<module:model/OAuthClientExceptionCauseSuppressed>} suppressed
 */
OAuthClientExceptionCause.prototype.suppressed = undefined;

/**
 * @member {String} localizedMessage
 */
OAuthClientExceptionCause.prototype.localizedMessage = undefined;

