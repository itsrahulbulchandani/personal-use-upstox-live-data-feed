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
    describe('TokenResponse', function() {
      beforeEach(function() {
        instance = new UpstoxClient.TokenResponse();
      });

      it('should create an instance of TokenResponse', function() {
        // TODO: update the code to test TokenResponse
        expect(instance).to.be.a(UpstoxClient.TokenResponse);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property exchanges (base name: "exchanges")', function() {
        // TODO: update the code to test the property exchanges
        expect(instance).to.have.property('exchanges');
        // expect(instance.exchanges).to.be(expectedValueLiteral);
      });

      it('should have the property products (base name: "products")', function() {
        // TODO: update the code to test the property products
        expect(instance).to.have.property('products');
        // expect(instance.products).to.be(expectedValueLiteral);
      });

      it('should have the property broker (base name: "broker")', function() {
        // TODO: update the code to test the property broker
        expect(instance).to.have.property('broker');
        // expect(instance.broker).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property userName (base name: "user_name")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property orderTypes (base name: "order_types")', function() {
        // TODO: update the code to test the property orderTypes
        expect(instance).to.have.property('orderTypes');
        // expect(instance.orderTypes).to.be(expectedValueLiteral);
      });

      it('should have the property userType (base name: "user_type")', function() {
        // TODO: update the code to test the property userType
        expect(instance).to.have.property('userType');
        // expect(instance.userType).to.be(expectedValueLiteral);
      });

      it('should have the property poa (base name: "poa")', function() {
        // TODO: update the code to test the property poa
        expect(instance).to.have.property('poa');
        // expect(instance.poa).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property accessToken (base name: "access_token")', function() {
        // TODO: update the code to test the property accessToken
        expect(instance).to.have.property('accessToken');
        // expect(instance.accessToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
