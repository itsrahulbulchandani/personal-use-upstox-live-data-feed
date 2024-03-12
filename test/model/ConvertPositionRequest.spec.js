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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpstoxClient);
  }
}(this, function(expect, UpstoxClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ConvertPositionRequest', function() {
      beforeEach(function() {
        instance = new UpstoxClient.ConvertPositionRequest();
      });

      it('should create an instance of ConvertPositionRequest', function() {
        // TODO: update the code to test ConvertPositionRequest
        expect(instance).to.be.a(UpstoxClient.ConvertPositionRequest);
      });

      it('should have the property instrumentToken (base name: "instrument_token")', function() {
        // TODO: update the code to test the property instrumentToken
        expect(instance).to.have.property('instrumentToken');
        // expect(instance.instrumentToken).to.be(expectedValueLiteral);
      });

      it('should have the property newProduct (base name: "new_product")', function() {
        // TODO: update the code to test the property newProduct
        expect(instance).to.have.property('newProduct');
        // expect(instance.newProduct).to.be(expectedValueLiteral);
      });

      it('should have the property oldProduct (base name: "old_product")', function() {
        // TODO: update the code to test the property oldProduct
        expect(instance).to.have.property('oldProduct');
        // expect(instance.oldProduct).to.be(expectedValueLiteral);
      });

      it('should have the property transactionType (base name: "transaction_type")', function() {
        // TODO: update the code to test the property transactionType
        expect(instance).to.have.property('transactionType');
        // expect(instance.transactionType).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

    });
  });

}));