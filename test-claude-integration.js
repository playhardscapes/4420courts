// Test Claude AI Integration
const { TransactionCategorizer } = require('./apps/dealer-portal/src/lib/ai/transaction-categorizer.ts');

async function testClaudeIntegration() {
  console.log('🧪 Testing Claude AI Integration...\n');
  
  const categorizer = new TransactionCategorizer();
  
  // Test transaction: Home Depot tool purchase
  const toolPurchase = {
    date: new Date('2025-01-28'),
    description: 'HOME DEPOT #1234 DEWALT DRILL KIT',
    amount: -127.45,
    bankAccount: 'BLUEVINE_CHECKING',
    externalId: 'test-001'
  };
  
  try {
    console.log('🔨 Testing tool purchase categorization...');
    console.log('Transaction:', toolPurchase);
    
    const result = await categorizer.categorizeTransaction(toolPurchase);
    
    console.log('\n✅ Claude AI Response:');
    console.log('Category:', result.category);
    console.log('Confidence:', Math.round(result.confidence * 100) + '%');
    console.log('Analysis:', result.analysis);
    console.log('Actions:', result.actions);
    
    if (result.assetDetails) {
      console.log('Asset to be created:', result.assetDetails.name);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
  
  // Test ICP payment
  const icpPayment = {
    date: new Date('2025-01-28'),
    description: 'ICP BUILDING PRODUCTS MATERIALS',
    amount: -2450.00,
    bankAccount: 'BLUEVINE_CHECKING', 
    externalId: 'test-002'
  };
  
  try {
    console.log('\n🏗️ Testing ICP payment categorization...');
    console.log('Transaction:', icpPayment);
    
    const result = await categorizer.categorizeTransaction(icpPayment);
    
    console.log('\n✅ Claude AI Response:');
    console.log('Category:', result.category);
    console.log('Confidence:', Math.round(result.confidence * 100) + '%');
    console.log('Analysis:', result.analysis);
    console.log('Actions:', result.actions);
    
    if (result.billMatch) {
      console.log('Bill matching vendor:', result.billMatch.vendor);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testClaudeIntegration();