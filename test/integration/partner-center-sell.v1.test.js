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

/* eslint-disable no-console */

const { readExternalSources } = require('ibm-cloud-sdk-core');
const PartnerCenterSellV1 = require('../../dist/partner-center-sell/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'partner_center_sell_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('PartnerCenterSellV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let partnerCenterSellService;

  test('Initialise service', async () => {
    partnerCenterSellService = PartnerCenterSellV1.newInstance();

    expect(partnerCenterSellService).not.toBeNull();

    const config = readExternalSources(PartnerCenterSellV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    partnerCenterSellService.enableRetries();
  });

  test('listProducts()', async () => {
    const res = await partnerCenterSellService.listProducts();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('createProduct()', async () => {
    const params = {
      productName: 'testString',
      taxAssessment: 'SOFTWARE',
      productType: 'SOFTWARE',
      materialAgreement: true,
    };

    const res = await partnerCenterSellService.createProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.getProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      materialAgreement: true,
      productName: 'testString',
      taxAssessment: 'SOFTWARE',
    };

    const res = await partnerCenterSellService.updateProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('publishProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.publishProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('suspendProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      reason: 'testString',
    };

    const res = await partnerCenterSellService.suspendProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deprecateProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      reason: 'testString',
    };

    const res = await partnerCenterSellService.deprecateProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('restoreProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      reason: 'testString',
    };

    const res = await partnerCenterSellService.restoreProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('listBadges()', async () => {
    const res = await partnerCenterSellService.listBadges();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getBadge()', async () => {
    const params = {
      badgeId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.getBadge(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getCatalog()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.getCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateCatalog()', async () => {
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

    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      catalogId: 'testString',
      description: 'testString',
      iconUrl: 'testString',
      keywords: ['testString'],
      pricingModel: 'free',
      category: 'testString',
      providerType: ['ibm_community'],
      label: 'testString',
      name: 'testString',
      provider: 'testString',
      tags: ['testString'],
      documentationUrl: 'testString',
      highlights: [highlightSectionInputModel],
      longDescription: 'testString',
      media: [mediaSectionInputModel],
    };

    const res = await partnerCenterSellService.updateCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('requestCatalogApproval()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.requestCatalogApproval(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('listPlans()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.listPlans(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('createPlan()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      description: 'testString',
      label: 'testString',
      type: 'byol',
      url: 'testString',
    };

    const res = await partnerCenterSellService.createPlan(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getPlan()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      pricingPlanId: 'testString',
    };

    const res = await partnerCenterSellService.getPlan(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updatePlan()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      pricingPlanId: 'testString',
      description: 'testString',
      label: 'testString',
      type: 'byol',
      url: 'testString',
    };

    const res = await partnerCenterSellService.updatePlan(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getSupport()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.getSupport(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateSupport()', async () => {
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

    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      escalationContacts: [escalationContactsUpdateModel],
      locations: ['US'],
      supportDetails: [supportDetailsModel],
      supportEscalation: supportEscalationModel,
      supportType: 'third-party',
      url: 'https://my-company.com/support',
    };

    const res = await partnerCenterSellService.updateSupport(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('listSupportChangeRequests()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.listSupportChangeRequests(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('createSupportChangeRequest()', async () => {
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

    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      change: supportModel,
    };

    const res = await partnerCenterSellService.createSupportChangeRequest(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getSupportChangeRequest()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      changeRequestId: 'testString',
    };

    const res = await partnerCenterSellService.getSupportChangeRequest(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateSupportChangeRequest()', async () => {
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

    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      changeRequestId: 'testString',
      change: supportModel,
    };

    const res = await partnerCenterSellService.updateSupportChangeRequest(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('listSupportChangeRequestReviews()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      changeRequestId: 'testString',
    };

    const res = await partnerCenterSellService.listSupportChangeRequestReviews(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('requestSupportChangeRequestReview()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      changeRequestId: 'testString',
    };

    const res = await partnerCenterSellService.requestSupportChangeRequestReview(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('mergeSupportChangeRequest()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      changeRequestId: 'testString',
    };

    const res = await partnerCenterSellService.mergeSupportChangeRequest(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('requestSupportApproval()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.requestSupportApproval(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('requestProductApproval()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.requestProductApproval(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('listProductApprovals()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.listProductApprovals(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deleteProduct()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
    };

    const res = await partnerCenterSellService.deleteProduct(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deletePlan()', async () => {
    const params = {
      productId: '9fab83da-98cb-4f18-a7ba-b6f0435c9673',
      pricingPlanId: 'testString',
    };

    const res = await partnerCenterSellService.deletePlan(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
