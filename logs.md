Delivery attempt
customer.subscription.created
Resend
Delivery status
Failed
Next retry in 60 minutes
Attempt date
29 Sept 2025, 10:10:56
Event ID
Origin date
29 Sept 2025, 10:10:56
Source
Automatic
API version
2025-08-27.basil
Description
rsrusu90@gmail.com subscribed to price_1SCbtFBoBOrptQeDXwXZNi9T
Response
HTTP status code
500
{
"error": 
"Event handler failed",
"event_type": 
"customer.subscription.created",
"event_id": 
"evt_1SCe2lBoBOrptQeDFpq8CHme"
,
"message": 
"Invalid time value",
"timestamp": 
"2025-09-29T10:10:56.781Z",
}
Request
{
"id": 
"evt_1SCe2lBoBOrptQeDFpq8CHme"
,
"object": 
"event",
"api_version": 
"2025-08-27.basil",
"created": 
1759140655
,
"data": {
"object": {
"id": 
"sub_1SCe2kBoBOrptQeDUKsFwEUV"
,
"object": 
"subscription",
"application": 
null,
"application_fee_percent": 
null,
"automatic_tax": {
"disabled_reason": 
null,
"enabled": 
false,
"liability": 
null,
},
"billing_cycle_anchor": 
1759140652,
"billing_cycle_anchor_config": 
null,
"billing_mode": {
"flexible": 
null,
"type": 
"classic",
},
"billing_thresholds": 
null,
"cancel_at": 
null,
"cancel_at_period_end": 
false,
"canceled_at": 
null,
"cancellation_details": {
"comment": 
null,
"feedback": 
null,
"reason": 
null,
},
"collection_method": 
"charge_automatically",
"created": 
1759140652
,
"currency": 
"gbp",
"customer": 
"cus_T8vuMzPVWyVUKJ"
,
"days_until_due": 
null,
"default_payment_method": 
"pm_1SCe2iBoBOrptQeDB2naskI8"
,
"default_source": 
null,
"default_tax_rates": [],
"description": 
null,
"discounts": [],
"ended_at": 
null,
"invoice_settings": {
"account_tax_ids": 
null,
"issuer": {
"type": 
"self",
},
},
"items": {
"object": 
"list",
"data": [
"0": {
"id": 
"si_T8vu3ukbBcFnv6"
,
"object": 
"subscription_item",
"billing_thresholds": 
null,
"created": 
1759140653
,
"current_period_end": 
1761732652
,
"current_period_start": 
1759140652
,
"discounts": [],
"metadata": {},
"plan": {
"id": 
"price_1SCbtFBoBOrptQeDXwXZNi9T"
,
"object": 
"plan",
"active": 
true,
"amount": 
13900,
"amount_decimal": 
"13900",
"billing_scheme": 
"per_unit",
"created": 
1759132377
,
"currency": 
"gbp",
"interval": 
"month",
"interval_count": 
1,
"livemode": 
false,
"metadata": {},
"meter": 
null,
"nickname": 
null,
"product": 
"prod_T8tgra10iBH0eh"
,
"tiers_mode": 
null,
"transform_usage": 
null,
"trial_period_days": 
null,
"usage_type": 
"licensed",
},
"price": {
"id": 
"price_1SCbtFBoBOrptQeDXwXZNi9T"
,
"object": 
"price",
"active": 
true,
"billing_scheme": 
"per_unit",
"created": 
1759132377
,
"currency": 
"gbp",
"custom_unit_amount": 
null,
"livemode": 
false,
"lookup_key": 
null,
"metadata": {},
"nickname": 
null,
"product": 
"prod_T8tgra10iBH0eh"
,
"recurring": {
"interval": 
"month",
"interval_count": 
1,
"meter": 
null,
"trial_period_days": 
null,
"usage_type": 
"licensed",
},
"tax_behavior": 
"unspecified",
"tiers_mode": 
null,
"transform_quantity": 
null,
"type": 
"recurring",
"unit_amount": 
13900,
"unit_amount_decimal": 
"13900",
},
"quantity": 
1,
"subscription": 
"sub_1SCe2kBoBOrptQeDUKsFwEUV"
,
"tax_rates": [],
},
],
"has_more": 
false,
"total_count": 
1,
"url": 
"/v1/subscription_items?subscription=sub_1SCe2kBoBOrptQeDUKsFwEUV",
},
"latest_invoice": 
"in_1SCe2iBoBOrptQeDdZWPhAd2"
,
"livemode": 
false,
"metadata": {
"business_id": 
"1bb3c552-053f-40c4-b3f2-bdb51af87b52",
},
"next_pending_invoice_item_invoice": 
null,
"on_behalf_of": 
null,
"pause_collection": 
null,
"payment_settings": {
"payment_method_options": {
"acss_debit": 
null,
"bancontact": 
null,
"card": {
"network": 
null,
"request_three_d_secure": 
"automatic",
},
"customer_balance": 
null,
"konbini": 
null,
"sepa_debit": 
null,
"us_bank_account": 
null,
},
"payment_method_types": [
"card",
],
"save_default_payment_method": 
"off",
},
"pending_invoice_item_interval": 
null,
"pending_setup_intent": 
null,
"pending_update": 
null,
"plan": {
"id": 
"price_1SCbtFBoBOrptQeDXwXZNi9T"
,
"object": 
"plan",
"active": 
true,
"amount": 
13900,
"amount_decimal": 
"13900",
"billing_scheme": 
"per_unit",
"created": 
1759132377
,
"currency": 
"gbp",
"interval": 
"month",
"interval_count": 
1,
"livemode": 
false,
"metadata": {},
"meter": 
null,
"nickname": 
null,
"product": 
"prod_T8tgra10iBH0eh"
,
"tiers_mode": 
null,
"transform_usage": 
null,
"trial_period_days": 
null,
"usage_type": 
"licensed",
},
"quantity": 
1,
"schedule": 
null,
"start_date": 
1759140652
,
"status": 
"active",
"test_clock": 
null,
"transfer_data": 
null,
"trial_end": 
null,
"trial_settings": {
"end_behavior": {
"missing_payment_method": 
"create_invoice",
},
},
"trial_start": 
null,
},
},
"livemode": 
false,
"pending_webhooks": 
1,
"request": {
"id": 
null,
"idempotency_key": 
"436206f8-3754-42b2-b784-b9a7c3b9e113",
},
"type": 
"customer.subscription.created",
}

Delivery attempt
checkout.session.completed
Resend
Delivery status
Failed
Next retry in 60 minutes
Attempt date
29 Sept 2025, 10:10:57
Event ID
Origin date
29 Sept 2025, 10:10:57
Source
Automatic
API version
2025-08-27.basil
Description
A Checkout Session was completed
Response
HTTP status code
500
{
"error": 
"Event handler failed",
"event_type": 
"checkout.session.completed",
"event_id": 
"evt_1SCe2mBoBOrptQeD5omCItEZ"
,
"message": 
"Invalid time value",
"timestamp": 
"2025-09-29T10:10:56.991Z",
}
Request
{
"id": 
"evt_1SCe2mBoBOrptQeD5omCItEZ"
,
"object": 
"event",
"api_version": 
"2025-08-27.basil",
"created": 
1759140656
,
"data": {
"object": {
"id": 
"cs_test_a1q8ZIEPgKo9BP8Igqezszn1K5yBZ6yQd9paQlCOqnXdGnnEfOnLSt2YCm"
,
"object": 
"checkout.session",
"adaptive_pricing": {
"enabled": 
false,
},
"after_expiration": 
null,
"allow_promotion_codes": 
null,
"amount_subtotal": 
13900,
"amount_total": 
13900,
"automatic_tax": {
"enabled": 
false,
"liability": 
null,
"provider": 
null,
"status": 
null,
},
"billing_address_collection": 
null,
"branding_settings": {
"background_color": 
"#ffffff",
"border_style": 
"rounded",
"button_color": 
"#0074d4",
"display_name": 
"Vocalenda sandbox",
"font_family": 
"default",
"icon": {
"file": 
"file_1SCbujBoBOrptQeD1dvbA1LC"
,
"type": 
"file",
},
"logo": {
"file": 
"file_1SCbucBoBOrptQeDMBEOejWP"
,
"type": 
"file",
},
},
"cancel_url": 
"https://www.vocalenda.com/dashboard/business-settings?tab=subscription&canceled=true",
"client_reference_id": 
null,
"client_secret": 
null,
"collected_information": {
"business_name": 
null,
"individual_name": 
null,
"shipping_details": 
null,
},
"consent": 
null,
"consent_collection": 
null,
"created": 
1759140641
,
"currency": 
"gbp",
"currency_conversion": 
null,
"custom_fields": [],
"custom_text": {
"after_submit": 
null,
"shipping_address": 
null,
"submit": 
null,
"terms_of_service_acceptance": 
null,
},
"customer": 
"cus_T8vuMzPVWyVUKJ"
,
"customer_creation": 
null,
"customer_details": {
"address": {
"city": 
null,
"country": 
"GB",
"line1": 
null,
"line2": 
null,
"postal_code": 
"DE11AA",
"state": 
null,
},
"business_name": 
null,
"email": 
"rsrusu90@gmail.com",
"individual_name": 
null,
"name": 
"Big Bucks",
"phone": 
null,
"tax_exempt": 
"none",
"tax_ids": [],
},
"customer_email": 
null,
"discounts": [],
"expires_at": 
1759227041
,
"invoice": 
"in_1SCe2iBoBOrptQeDdZWPhAd2"
,
"invoice_creation": 
null,
"livemode": 
false,
"locale": 
null,
"metadata": {
"business_id": 
"1bb3c552-053f-40c4-b3f2-bdb51af87b52",
},
"mode": 
"subscription",
"origin_context": 
null,
"payment_intent": 
null,
"payment_link": 
null,
"payment_method_collection": 
"always",
"payment_method_configuration_details": 
null,
"payment_method_options": {
"card": {
"request_three_d_secure": 
"automatic",
},
},
"payment_method_types": [
"card",
],
"payment_status": 
"paid",
"permissions": 
null,
"phone_number_collection": {
"enabled": 
false,
},
"recovered_from": 
null,
"saved_payment_method_options": {
"allow_redisplay_filters": [
"always",
],
"payment_method_remove": 
"disabled",
"payment_method_save": 
null,
},
"setup_intent": 
null,
"shipping_address_collection": 
null,
"shipping_cost": 
null,
"shipping_options": [],
"status": 
"complete",
"submit_type": 
null,
"subscription": 
"sub_1SCe2kBoBOrptQeDUKsFwEUV"
,
"success_url": 
"https://www.vocalenda.com/dashboard/business-settings?tab=subscription&success=true",
"total_details": {
"amount_discount": 
0,
"amount_shipping": 
0,
"amount_tax": 
0,
},
"ui_mode": 
"hosted",
"url": 
null,
"wallet_options": 
null,
},
},
"livemode": 
false,
"pending_webhooks": 
1,
"request": {
"id": 
null,
"idempotency_key": 
null,
},
"type": 
"checkout.session.completed",
}