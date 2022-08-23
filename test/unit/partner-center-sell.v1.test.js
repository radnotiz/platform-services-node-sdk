/**
 * (C) Copyright IBM Corp. 2022.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator, unitTestUtils } = core;

const PartnerCenterSellV1 = require('../../dist/partner-center-sell/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkForSuccessfulExecution,
} = unitTestUtils;

const partnerCenterSellServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://product-lifecycle.api.cloud.ibm.com/openapi/v1',
};

const partnerCenterSellService = new PartnerCenterSellV1(partnerCenterSellServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(partnerCenterSellService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('PartnerCenterSellV1', () => {

  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });
  
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = PartnerCenterSellV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(PartnerCenterSellV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(PartnerCenterSellV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(PartnerCenterSellV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = PartnerCenterSellV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(PartnerCenterSellV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new PartnerCenterSellV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new PartnerCenterSellV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(PartnerCenterSellV1.DEFAULT_SERVICE_URL);
    });
  });

  describe('listProducts', () => {
    describe('positive tests', () => {
      function __listProductsTest() {
        // Construct the params object for operation listProducts
        const listProductsParams = {};

        const listProductsResult = partnerCenterSellService.listProducts(listProductsParams);

        // all methods should return a Promise
        expectToBePromise(listProductsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listProductsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listProductsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listProductsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listProductsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listProducts(listProductsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        partnerCenterSellService.listProducts({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createProduct', () => {
    describe('positive tests', () => {
      function __createProductTest() {
        // Construct the params object for operation createProduct
        const productName = 'testString';
        const taxAssessment = 'SOFTWARE';
        const productType = 'SOFTWARE';
        const materialAgreement = true;
        const createProductParams = {
          productName: productName,
          taxAssessment: taxAssessment,
          productType: productType,
          materialAgreement: materialAgreement,
        };

        const createProductResult = partnerCenterSellService.createProduct(createProductParams);

        // all methods should return a Promise
        expectToBePromise(createProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.productName).toEqual(productName);
        expect(mockRequestOptions.body.taxAssessment).toEqual(taxAssessment);
        expect(mockRequestOptions.body.productType).toEqual(productType);
        expect(mockRequestOptions.body.materialAgreement).toEqual(materialAgreement);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __createProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __createProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productName = 'testString';
        const taxAssessment = 'SOFTWARE';
        const productType = 'SOFTWARE';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createProductParams = {
          productName,
          taxAssessment,
          productType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.createProduct(createProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.createProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.createProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getProduct', () => {
    describe('positive tests', () => {
      function __getProductTest() {
        // Construct the params object for operation getProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const getProductParams = {
          productId: productId,
        };

        const getProductResult = partnerCenterSellService.getProduct(getProductParams);

        // all methods should return a Promise
        expectToBePromise(getProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getProductParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getProduct(getProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateProduct', () => {
    describe('positive tests', () => {
      function __updateProductTest() {
        // Construct the params object for operation updateProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const materialAgreement = true;
        const productName = 'testString';
        const taxAssessment = 'SOFTWARE';
        const updateProductParams = {
          productId: productId,
          materialAgreement: materialAgreement,
          productName: productName,
          taxAssessment: taxAssessment,
        };

        const updateProductResult = partnerCenterSellService.updateProduct(updateProductParams);

        // all methods should return a Promise
        expectToBePromise(updateProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.materialAgreement).toEqual(materialAgreement);
        expect(mockRequestOptions.body.productName).toEqual(productName);
        expect(mockRequestOptions.body.taxAssessment).toEqual(taxAssessment);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __updateProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __updateProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateProductParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.updateProduct(updateProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.updateProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.updateProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteProduct', () => {
    describe('positive tests', () => {
      function __deleteProductTest() {
        // Construct the params object for operation deleteProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const deleteProductParams = {
          productId: productId,
        };

        const deleteProductResult = partnerCenterSellService.deleteProduct(deleteProductParams);

        // all methods should return a Promise
        expectToBePromise(deleteProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __deleteProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __deleteProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteProductParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.deleteProduct(deleteProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.deleteProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.deleteProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('publishProduct', () => {
    describe('positive tests', () => {
      function __publishProductTest() {
        // Construct the params object for operation publishProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const publishProductParams = {
          productId: productId,
        };

        const publishProductResult = partnerCenterSellService.publishProduct(publishProductParams);

        // all methods should return a Promise
        expectToBePromise(publishProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/publish', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __publishProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __publishProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __publishProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const publishProductParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.publishProduct(publishProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.publishProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.publishProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('suspendProduct', () => {
    describe('positive tests', () => {
      function __suspendProductTest() {
        // Construct the params object for operation suspendProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const suspendProductParams = {
          productId: productId,
          reason: reason,
        };

        const suspendProductResult = partnerCenterSellService.suspendProduct(suspendProductParams);

        // all methods should return a Promise
        expectToBePromise(suspendProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/suspend', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.reason).toEqual(reason);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __suspendProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __suspendProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __suspendProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const suspendProductParams = {
          productId,
          reason,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.suspendProduct(suspendProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.suspendProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.suspendProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deprecateProduct', () => {
    describe('positive tests', () => {
      function __deprecateProductTest() {
        // Construct the params object for operation deprecateProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const deprecateProductParams = {
          productId: productId,
          reason: reason,
        };

        const deprecateProductResult = partnerCenterSellService.deprecateProduct(deprecateProductParams);

        // all methods should return a Promise
        expectToBePromise(deprecateProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/deprecate', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.reason).toEqual(reason);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deprecateProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __deprecateProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __deprecateProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deprecateProductParams = {
          productId,
          reason,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.deprecateProduct(deprecateProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.deprecateProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.deprecateProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('restoreProduct', () => {
    describe('positive tests', () => {
      function __restoreProductTest() {
        // Construct the params object for operation restoreProduct
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const restoreProductParams = {
          productId: productId,
          reason: reason,
        };

        const restoreProductResult = partnerCenterSellService.restoreProduct(restoreProductParams);

        // all methods should return a Promise
        expectToBePromise(restoreProductResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/restore', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.reason).toEqual(reason);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __restoreProductTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __restoreProductTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __restoreProductTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const reason = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const restoreProductParams = {
          productId,
          reason,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.restoreProduct(restoreProductParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.restoreProduct({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.restoreProduct();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listBadges', () => {
    describe('positive tests', () => {
      function __listBadgesTest() {
        // Construct the params object for operation listBadges
        const listBadgesParams = {};

        const listBadgesResult = partnerCenterSellService.listBadges(listBadgesParams);

        // all methods should return a Promise
        expectToBePromise(listBadgesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/badges', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listBadgesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listBadgesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listBadgesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listBadgesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listBadges(listBadgesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        partnerCenterSellService.listBadges({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getBadge', () => {
    describe('positive tests', () => {
      function __getBadgeTest() {
        // Construct the params object for operation getBadge
        const badgeId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const getBadgeParams = {
          badgeId: badgeId,
        };

        const getBadgeResult = partnerCenterSellService.getBadge(getBadgeParams);

        // all methods should return a Promise
        expectToBePromise(getBadgeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/badges/{badgeId}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.badgeId).toEqual(badgeId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBadgeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getBadgeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getBadgeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const badgeId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBadgeParams = {
          badgeId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getBadge(getBadgeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getBadge({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getBadge();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getCatalog', () => {
    describe('positive tests', () => {
      function __getCatalogTest() {
        // Construct the params object for operation getCatalog
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const getCatalogParams = {
          productId: productId,
        };

        const getCatalogResult = partnerCenterSellService.getCatalog(getCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/catalog', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCatalogParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getCatalog(getCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateCatalog', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // HighlightSectionInput
      const highlightSectionInputModel = {
        description: 'testString',
        title: 'testString',
      };

      // MediaSectionInput
      const mediaSectionInputModel = {
        caption: 'testString',
        thumbnail: 'testString',
        type: 'image',
        url: 'testString',
      };

      function __updateCatalogTest() {
        // Construct the params object for operation updateCatalog
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const catalogId = 'testString';
        const description = 'testString';
        const iconUrl = 'testString';
        const keywords = ['testString'];
        const pricingModel = 'free';
        const category = 'testString';
        const providerType = ['ibm_community'];
        const label = 'testString';
        const name = 'testString';
        const provider = 'testString';
        const tags = ['testString'];
        const documentationUrl = 'testString';
        const highlights = [highlightSectionInputModel];
        const longDescription = 'testString';
        const media = [mediaSectionInputModel];
        const updateCatalogParams = {
          productId: productId,
          catalogId: catalogId,
          description: description,
          iconUrl: iconUrl,
          keywords: keywords,
          pricingModel: pricingModel,
          category: category,
          providerType: providerType,
          label: label,
          name: name,
          provider: provider,
          tags: tags,
          documentationUrl: documentationUrl,
          highlights: highlights,
          longDescription: longDescription,
          media: media,
        };

        const updateCatalogResult = partnerCenterSellService.updateCatalog(updateCatalogParams);

        // all methods should return a Promise
        expectToBePromise(updateCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/catalog', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.catalogId).toEqual(catalogId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.iconUrl).toEqual(iconUrl);
        expect(mockRequestOptions.body.keywords).toEqual(keywords);
        expect(mockRequestOptions.body.pricingModel).toEqual(pricingModel);
        expect(mockRequestOptions.body.category).toEqual(category);
        expect(mockRequestOptions.body.providerType).toEqual(providerType);
        expect(mockRequestOptions.body.label).toEqual(label);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.provider).toEqual(provider);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.documentationUrl).toEqual(documentationUrl);
        expect(mockRequestOptions.body.highlights).toEqual(highlights);
        expect(mockRequestOptions.body.longDescription).toEqual(longDescription);
        expect(mockRequestOptions.body.media).toEqual(media);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __updateCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __updateCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateCatalogParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.updateCatalog(updateCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.updateCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.updateCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('requestCatalogApproval', () => {
    describe('positive tests', () => {
      function __requestCatalogApprovalTest() {
        // Construct the params object for operation requestCatalogApproval
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const requestCatalogApprovalParams = {
          productId: productId,
        };

        const requestCatalogApprovalResult = partnerCenterSellService.requestCatalogApproval(requestCatalogApprovalParams);

        // all methods should return a Promise
        expectToBePromise(requestCatalogApprovalResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/catalog/approvals', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __requestCatalogApprovalTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __requestCatalogApprovalTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __requestCatalogApprovalTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const requestCatalogApprovalParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.requestCatalogApproval(requestCatalogApprovalParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.requestCatalogApproval({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.requestCatalogApproval();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPlans', () => {
    describe('positive tests', () => {
      function __listPlansTest() {
        // Construct the params object for operation listPlans
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const listPlansParams = {
          productId: productId,
        };

        const listPlansResult = partnerCenterSellService.listPlans(listPlansParams);

        // all methods should return a Promise
        expectToBePromise(listPlansResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/plans', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPlansTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listPlansTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listPlansTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPlansParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listPlans(listPlansParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.listPlans({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.listPlans();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createPlan', () => {
    describe('positive tests', () => {
      function __createPlanTest() {
        // Construct the params object for operation createPlan
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const description = 'testString';
        const label = 'testString';
        const type = 'byol';
        const url = 'testString';
        const createPlanParams = {
          productId: productId,
          description: description,
          label: label,
          type: type,
          url: url,
        };

        const createPlanResult = partnerCenterSellService.createPlan(createPlanParams);

        // all methods should return a Promise
        expectToBePromise(createPlanResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/plans', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.label).toEqual(label);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPlanTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __createPlanTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __createPlanTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const description = 'testString';
        const label = 'testString';
        const type = 'byol';
        const url = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPlanParams = {
          productId,
          description,
          label,
          type,
          url,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.createPlan(createPlanParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.createPlan({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.createPlan();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPlan', () => {
    describe('positive tests', () => {
      function __getPlanTest() {
        // Construct the params object for operation getPlan
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const getPlanParams = {
          productId: productId,
          pricingPlanId: pricingPlanId,
        };

        const getPlanResult = partnerCenterSellService.getPlan(getPlanParams);

        // all methods should return a Promise
        expectToBePromise(getPlanResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/plans/{pricingPlanId}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.pricingPlanId).toEqual(pricingPlanId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPlanTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getPlanTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getPlanTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPlanParams = {
          productId,
          pricingPlanId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getPlan(getPlanParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getPlan({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getPlan();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePlan', () => {
    describe('positive tests', () => {
      function __updatePlanTest() {
        // Construct the params object for operation updatePlan
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const description = 'testString';
        const label = 'testString';
        const type = 'byol';
        const url = 'testString';
        const updatePlanParams = {
          productId: productId,
          pricingPlanId: pricingPlanId,
          description: description,
          label: label,
          type: type,
          url: url,
        };

        const updatePlanResult = partnerCenterSellService.updatePlan(updatePlanParams);

        // all methods should return a Promise
        expectToBePromise(updatePlanResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/plans/{pricingPlanId}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.label).toEqual(label);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.pricingPlanId).toEqual(pricingPlanId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePlanTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __updatePlanTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __updatePlanTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const description = 'testString';
        const label = 'testString';
        const type = 'byol';
        const url = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePlanParams = {
          productId,
          pricingPlanId,
          description,
          label,
          type,
          url,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.updatePlan(updatePlanParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.updatePlan({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.updatePlan();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deletePlan', () => {
    describe('positive tests', () => {
      function __deletePlanTest() {
        // Construct the params object for operation deletePlan
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const deletePlanParams = {
          productId: productId,
          pricingPlanId: pricingPlanId,
        };

        const deletePlanResult = partnerCenterSellService.deletePlan(deletePlanParams);

        // all methods should return a Promise
        expectToBePromise(deletePlanResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/plans/{pricingPlanId}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.pricingPlanId).toEqual(pricingPlanId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deletePlanTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __deletePlanTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __deletePlanTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const pricingPlanId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePlanParams = {
          productId,
          pricingPlanId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.deletePlan(deletePlanParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.deletePlan({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.deletePlan();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSupport', () => {
    describe('positive tests', () => {
      function __getSupportTest() {
        // Construct the params object for operation getSupport
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const getSupportParams = {
          productId: productId,
        };

        const getSupportResult = partnerCenterSellService.getSupport(getSupportParams);

        // all methods should return a Promise
        expectToBePromise(getSupportResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSupportTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getSupportTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getSupportTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSupportParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getSupport(getSupportParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getSupport({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getSupport();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateSupport', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // EscalationContactsUpdate
      const escalationContactsUpdateModel = {
        email: 'testString',
        name: 'testString',
      };

      // SupportDetailsAvailabilityTimes
      const supportDetailsAvailabilityTimesModel = {
        day: 1,
        end_time: '19:30',
        start_time: '10:30',
      };

      // SupportDetailsAvailability
      const supportDetailsAvailabilityModel = {
        always_available: true,
        times: [supportDetailsAvailabilityTimesModel],
        timezone: 'America/Los_Angeles',
      };

      // SupportResponseTimes
      const supportResponseTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportDetails
      const supportDetailsModel = {
        availability: supportDetailsAvailabilityModel,
        contact: 'testString',
        response_wait_time: supportResponseTimesModel,
        type: 'email',
      };

      // SupportEscalationTimes
      const supportEscalationTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportEscalation
      const supportEscalationModel = {
        contact: 'testString',
        escalation_wait_time: supportEscalationTimesModel,
        response_wait_time: supportResponseTimesModel,
      };

      function __updateSupportTest() {
        // Construct the params object for operation updateSupport
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const escalationContacts = [escalationContactsUpdateModel];
        const locations = ['US'];
        const supportDetails = [supportDetailsModel];
        const supportEscalation = supportEscalationModel;
        const supportType = 'third-party';
        const url = 'https://my-company.com/support';
        const updateSupportParams = {
          productId: productId,
          escalationContacts: escalationContacts,
          locations: locations,
          supportDetails: supportDetails,
          supportEscalation: supportEscalation,
          supportType: supportType,
          url: url,
        };

        const updateSupportResult = partnerCenterSellService.updateSupport(updateSupportParams);

        // all methods should return a Promise
        expectToBePromise(updateSupportResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.escalationContacts).toEqual(escalationContacts);
        expect(mockRequestOptions.body.locations).toEqual(locations);
        expect(mockRequestOptions.body.support_details).toEqual(supportDetails);
        expect(mockRequestOptions.body.support_escalation).toEqual(supportEscalation);
        expect(mockRequestOptions.body.support_type).toEqual(supportType);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateSupportTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __updateSupportTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __updateSupportTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSupportParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.updateSupport(updateSupportParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.updateSupport({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.updateSupport();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSupportChangeRequests', () => {
    describe('positive tests', () => {
      function __listSupportChangeRequestsTest() {
        // Construct the params object for operation listSupportChangeRequests
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const listSupportChangeRequestsParams = {
          productId: productId,
        };

        const listSupportChangeRequestsResult = partnerCenterSellService.listSupportChangeRequests(listSupportChangeRequestsParams);

        // all methods should return a Promise
        expectToBePromise(listSupportChangeRequestsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSupportChangeRequestsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listSupportChangeRequestsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listSupportChangeRequestsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSupportChangeRequestsParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listSupportChangeRequests(listSupportChangeRequestsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.listSupportChangeRequests({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.listSupportChangeRequests();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createSupportChangeRequest', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SupportDetailsAvailabilityTimes
      const supportDetailsAvailabilityTimesModel = {
        day: 1,
        end_time: '19:30',
        start_time: '10:30',
      };

      // SupportDetailsAvailability
      const supportDetailsAvailabilityModel = {
        always_available: true,
        times: [supportDetailsAvailabilityTimesModel],
        timezone: 'America/Los_Angeles',
      };

      // SupportResponseTimes
      const supportResponseTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportDetails
      const supportDetailsModel = {
        availability: supportDetailsAvailabilityModel,
        contact: 'testString',
        response_wait_time: supportResponseTimesModel,
        type: 'email',
      };

      // SupportEscalationTimes
      const supportEscalationTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportEscalation
      const supportEscalationModel = {
        contact: 'testString',
        escalation_wait_time: supportEscalationTimesModel,
        response_wait_time: supportResponseTimesModel,
      };

      // Support
      const supportModel = {
        locations: ['US'],
        process: 'testString',
        process_i18n: { foo: 'bar' },
        support_details: [supportDetailsModel],
        support_escalation: supportEscalationModel,
        support_type: 'third-party',
        url: 'https://my-company.com/support',
      };

      function __createSupportChangeRequestTest() {
        // Construct the params object for operation createSupportChangeRequest
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const change = supportModel;
        const createSupportChangeRequestParams = {
          productId: productId,
          change: change,
        };

        const createSupportChangeRequestResult = partnerCenterSellService.createSupportChangeRequest(createSupportChangeRequestParams);

        // all methods should return a Promise
        expectToBePromise(createSupportChangeRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.change).toEqual(change);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSupportChangeRequestTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __createSupportChangeRequestTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __createSupportChangeRequestTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const change = supportModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSupportChangeRequestParams = {
          productId,
          change,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.createSupportChangeRequest(createSupportChangeRequestParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.createSupportChangeRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.createSupportChangeRequest();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSupportChangeRequest', () => {
    describe('positive tests', () => {
      function __getSupportChangeRequestTest() {
        // Construct the params object for operation getSupportChangeRequest
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const getSupportChangeRequestParams = {
          productId: productId,
          changeRequestId: changeRequestId,
        };

        const getSupportChangeRequestResult = partnerCenterSellService.getSupportChangeRequest(getSupportChangeRequestParams);

        // all methods should return a Promise
        expectToBePromise(getSupportChangeRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes/{changeRequestId}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.changeRequestId).toEqual(changeRequestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSupportChangeRequestTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __getSupportChangeRequestTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __getSupportChangeRequestTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSupportChangeRequestParams = {
          productId,
          changeRequestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.getSupportChangeRequest(getSupportChangeRequestParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.getSupportChangeRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.getSupportChangeRequest();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateSupportChangeRequest', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SupportDetailsAvailabilityTimes
      const supportDetailsAvailabilityTimesModel = {
        day: 1,
        end_time: '19:30',
        start_time: '10:30',
      };

      // SupportDetailsAvailability
      const supportDetailsAvailabilityModel = {
        always_available: true,
        times: [supportDetailsAvailabilityTimesModel],
        timezone: 'America/Los_Angeles',
      };

      // SupportResponseTimes
      const supportResponseTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportDetails
      const supportDetailsModel = {
        availability: supportDetailsAvailabilityModel,
        contact: 'testString',
        response_wait_time: supportResponseTimesModel,
        type: 'email',
      };

      // SupportEscalationTimes
      const supportEscalationTimesModel = {
        type: 'hour',
        value: 2,
      };

      // SupportEscalation
      const supportEscalationModel = {
        contact: 'testString',
        escalation_wait_time: supportEscalationTimesModel,
        response_wait_time: supportResponseTimesModel,
      };

      // Support
      const supportModel = {
        locations: ['US'],
        process: 'testString',
        process_i18n: { foo: 'bar' },
        support_details: [supportDetailsModel],
        support_escalation: supportEscalationModel,
        support_type: 'third-party',
        url: 'https://my-company.com/support',
      };

      function __updateSupportChangeRequestTest() {
        // Construct the params object for operation updateSupportChangeRequest
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const change = supportModel;
        const updateSupportChangeRequestParams = {
          productId: productId,
          changeRequestId: changeRequestId,
          change: change,
        };

        const updateSupportChangeRequestResult = partnerCenterSellService.updateSupportChangeRequest(updateSupportChangeRequestParams);

        // all methods should return a Promise
        expectToBePromise(updateSupportChangeRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes/{changeRequestId}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.change).toEqual(change);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.changeRequestId).toEqual(changeRequestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateSupportChangeRequestTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __updateSupportChangeRequestTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __updateSupportChangeRequestTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const change = supportModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSupportChangeRequestParams = {
          productId,
          changeRequestId,
          change,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.updateSupportChangeRequest(updateSupportChangeRequestParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.updateSupportChangeRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.updateSupportChangeRequest();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSupportChangeRequestReviews', () => {
    describe('positive tests', () => {
      function __listSupportChangeRequestReviewsTest() {
        // Construct the params object for operation listSupportChangeRequestReviews
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const listSupportChangeRequestReviewsParams = {
          productId: productId,
          changeRequestId: changeRequestId,
        };

        const listSupportChangeRequestReviewsResult = partnerCenterSellService.listSupportChangeRequestReviews(listSupportChangeRequestReviewsParams);

        // all methods should return a Promise
        expectToBePromise(listSupportChangeRequestReviewsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes/{changeRequestId}/reviews', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.changeRequestId).toEqual(changeRequestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSupportChangeRequestReviewsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listSupportChangeRequestReviewsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listSupportChangeRequestReviewsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSupportChangeRequestReviewsParams = {
          productId,
          changeRequestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listSupportChangeRequestReviews(listSupportChangeRequestReviewsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.listSupportChangeRequestReviews({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.listSupportChangeRequestReviews();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('requestSupportChangeRequestReview', () => {
    describe('positive tests', () => {
      function __requestSupportChangeRequestReviewTest() {
        // Construct the params object for operation requestSupportChangeRequestReview
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const requestSupportChangeRequestReviewParams = {
          productId: productId,
          changeRequestId: changeRequestId,
        };

        const requestSupportChangeRequestReviewResult = partnerCenterSellService.requestSupportChangeRequestReview(requestSupportChangeRequestReviewParams);

        // all methods should return a Promise
        expectToBePromise(requestSupportChangeRequestReviewResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes/{changeRequestId}/reviews', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.changeRequestId).toEqual(changeRequestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __requestSupportChangeRequestReviewTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __requestSupportChangeRequestReviewTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __requestSupportChangeRequestReviewTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const requestSupportChangeRequestReviewParams = {
          productId,
          changeRequestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.requestSupportChangeRequestReview(requestSupportChangeRequestReviewParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.requestSupportChangeRequestReview({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.requestSupportChangeRequestReview();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('mergeSupportChangeRequest', () => {
    describe('positive tests', () => {
      function __mergeSupportChangeRequestTest() {
        // Construct the params object for operation mergeSupportChangeRequest
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const mergeSupportChangeRequestParams = {
          productId: productId,
          changeRequestId: changeRequestId,
        };

        const mergeSupportChangeRequestResult = partnerCenterSellService.mergeSupportChangeRequest(mergeSupportChangeRequestParams);

        // all methods should return a Promise
        expectToBePromise(mergeSupportChangeRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/changes/{changeRequestId}/merge', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
        expect(mockRequestOptions.path.changeRequestId).toEqual(changeRequestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __mergeSupportChangeRequestTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __mergeSupportChangeRequestTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __mergeSupportChangeRequestTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const changeRequestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const mergeSupportChangeRequestParams = {
          productId,
          changeRequestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.mergeSupportChangeRequest(mergeSupportChangeRequestParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.mergeSupportChangeRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.mergeSupportChangeRequest();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('requestSupportApproval', () => {
    describe('positive tests', () => {
      function __requestSupportApprovalTest() {
        // Construct the params object for operation requestSupportApproval
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const requestSupportApprovalParams = {
          productId: productId,
        };

        const requestSupportApprovalResult = partnerCenterSellService.requestSupportApproval(requestSupportApprovalParams);

        // all methods should return a Promise
        expectToBePromise(requestSupportApprovalResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/support/approvals', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __requestSupportApprovalTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __requestSupportApprovalTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __requestSupportApprovalTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const requestSupportApprovalParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.requestSupportApproval(requestSupportApprovalParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.requestSupportApproval({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.requestSupportApproval();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('requestProductApproval', () => {
    describe('positive tests', () => {
      function __requestProductApprovalTest() {
        // Construct the params object for operation requestProductApproval
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const requestProductApprovalParams = {
          productId: productId,
        };

        const requestProductApprovalResult = partnerCenterSellService.requestProductApproval(requestProductApprovalParams);

        // all methods should return a Promise
        expectToBePromise(requestProductApprovalResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/approvals', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __requestProductApprovalTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __requestProductApprovalTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __requestProductApprovalTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const requestProductApprovalParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.requestProductApproval(requestProductApprovalParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.requestProductApproval({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.requestProductApproval();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listProductApprovals', () => {
    describe('positive tests', () => {
      function __listProductApprovalsTest() {
        // Construct the params object for operation listProductApprovals
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const listProductApprovalsParams = {
          productId: productId,
        };

        const listProductApprovalsResult = partnerCenterSellService.listProductApprovals(listProductApprovalsParams);

        // all methods should return a Promise
        expectToBePromise(listProductApprovalsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/products/{productId}/approvals', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.productId).toEqual(productId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listProductApprovalsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.enableRetries();
        __listProductApprovalsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        partnerCenterSellService.disableRetries();
        __listProductApprovalsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const productId = '9fab83da-98cb-4f18-a7ba-b6f0435c9673';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listProductApprovalsParams = {
          productId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        partnerCenterSellService.listProductApprovals(listProductApprovalsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await partnerCenterSellService.listProductApprovals({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await partnerCenterSellService.listProductApprovals();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
