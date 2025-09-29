// Test script to debug the webhook date conversion issue
import { createClient } from '@supabase/supabase-js';

// Test data from the actual webhook logs
const testSubscription = {
  id: "sub_1SCe2kBoBOrptQeDUKsFwEUV",
  current_period_start: 1759140652,
  current_period_end: 1761732652,
  status: "active",
  customer: "cus_T8vuMzPVWyVUKJ",
  items: {
    data: [{
      price: {
        id: "price_1SCbtFBoBOrptQeDXwXZNi9T",
        unit_amount: 13900,
        currency: "gbp"
      }
    }]
  }
};

const businessId = "1bb3c552-053f-40c4-b3f2-bdb51af87b52";

async function testDateConversion() {
  console.log('🧪 Testing date conversion...');
  
  // Test the date conversion logic
  const startTimestamp = testSubscription.current_period_start;
  const endTimestamp = testSubscription.current_period_end;
  
  console.log('Original timestamps:', { startTimestamp, endTimestamp });
  console.log('Multiplied by 1000:', { 
    start: startTimestamp * 1000, 
    end: endTimestamp * 1000 
  });
  
  try {
    const startDate = new Date(startTimestamp * 1000);
    const endDate = new Date(endTimestamp * 1000);
    
    console.log('Date objects:', { startDate, endDate });
    console.log('ISO strings:', { 
      start: startDate.toISOString(), 
      end: endDate.toISOString() 
    });
    console.log('Valid dates:', { 
      start: !isNaN(startDate.getTime()), 
      end: !isNaN(endDate.getTime()) 
    });
    
    // Test RPC parameters
    const rpcParams = {
      p_business_id: businessId,
      p_stripe_subscription_id: testSubscription.id,
      p_stripe_customer_id: testSubscription.customer,
      p_stripe_price_id: testSubscription.items.data[0].price.id,
      p_status: testSubscription.status,
      p_current_period_start: startDate.toISOString(),
      p_current_period_end: endDate.toISOString(),
      p_amount_per_month: testSubscription.items.data[0].price.unit_amount,
      p_currency: testSubscription.items.data[0].price.currency
    };
    
    console.log('RPC Parameters:', JSON.stringify(rpcParams, null, 2));
    
    // Test with Supabase if environment variables are available
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.log('🔗 Testing Supabase connection...');
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      
      const { data, error } = await supabase.rpc('create_or_update_subscription', rpcParams);
      
      if (error) {
        console.error('❌ RPC Error:', error);
      } else {
        console.log('✅ RPC Success:', data);
      }
    } else {
      console.log('⚠️ Supabase environment variables not found, skipping RPC test');
    }
    
  } catch (error) {
    console.error('❌ Error in date conversion:', error);
  }
}

testDateConversion().catch(console.error);