# 4420-Courts Project Documentation

## 📋 **Project Overview**
- **Target Revenue**: $18-20k/month (15-17 courts)
- **Customer**: "Two guys & a pickup" + overwhelmed homeowners
- **Product**: Premium court resurfacing materials ($1,200-1,500/court)
- **Differentiator**: Professional support + troubleshooting content

## 🛒 **E-commerce Platform Decision**

### **Chosen Solution: Shopify + Customer Portal**
- **Plan**: Start with Shopify Basic ($29/month), scale to Advanced ($399/month) at volume
- **Sales Tax**: TaxJar integration ($19-99/month)
- **At $20k/month**: Total cost ~$879/month (4.4% vs Amazon's 15%)

### **Why Not Amazon Marketplace**
- Commodity pricing race to bottom
- 15% commission too expensive at scale
- No brand control or customer relationships
- Wrong for premium positioning

## 📦 **Product Strategy**

### **Primary Products**
1. **Complete Court Kit** - $1,200-1,500
   - 20x 5-gallon buckets (4 gallons material each)
   - 80 gallons total covers one court
   - Cost basis: ~$500 for materials

2. **Service Add-ons**
   - White Glove Delivery + Demo: $200-300
   - Video Consultation: $150/hour
   - Emergency Support: $200 flat fee

### **Pricing Strategy**
- **One retail price for everyone** (no bulk discounts)
- **Premium materials** justify premium pricing
- **Service-based differentiation** vs. competitors

## 🔒 **Premium Support Portal (Post-Purchase Paywall)**

### **Technical Implementation**
- **Platform**: Shopify Customer Account Portal + Private Vimeo
- **Cost**: $20/month for Vimeo Pro
- **Access**: Automatic after purchase via customer account tags

### **Content Strategy Split**

**Public YouTube (Perfect World):**
- How to prep perfect surface
- Ideal weather application
- Standard mixing procedures
- Basic tool usage

**Premium Portal (Real World Problems):**
- 10 Common Mistakes & How to Fix Them
- Weather delay protocols
- Application mistake recovery
- Temperature swing management
- Troubleshooting database (searchable)

### **Support Tier Structure**
1. **Portal Access** (included with purchase)
2. **Video Consultation** (FREE 15 min for customers, then $100/hour)
3. **Emergency Support** ($200 same-day response)

## 🎯 **Target Market Positioning**
- **Not DIYers**: Too complex for pure DIY
- **Not big contractors**: They have their own vendors
- **Sweet spot**: Small contractors, handymen, ambitious homeowners
- **Value prop**: Professional results without full contractor cost

## 🚚 **Future Expansion Ideas**
- **Delivery service** in 2-3 states
- **Certified installer network** (no discounts, just referrals)
- **15-minute on-site demos** with delivery
- **Educational course** offerings

## 💡 **Key Success Factors**
1. **Premium positioning** maintained throughout
2. **Professional credibility** from Play Hardscapes brand
3. **Real-world problem solving** content
4. **Personal support** at retail scale
5. **Customer relationship** building vs. one-time sales

## 🔧 **Website Implementation Completed**

### **Latest Updates - January 2025**
- **BigCommerce Integration**: Headless commerce with REST API ($39/month plan)
- **Shopping Cart**: Full cart functionality with persistent storage
- **Service Levels**: Updated to new pricing model (Free/$49.99/month/project-based)
- **Product Categories**: Auto-categorization (Services/Physical/Digital)
- **Spy Agency Font**: Orbitron font for all headings matching logo style
- **Navigation**: Added cart icon, removed Home button, updated labels

### **Service Levels Framework**
- **Level 1**: Free DIY Resources ($0) - Downloadable materials, video library
- **Level 2**: Monthly Membership ($49.99/month) - Zoom consultations, community access  
- **Level 3**: Coating & Lining Specialist ($10,000-15,000)
- **Level 4**: Project Management + Finish ($15,000-25,000)
- **Level 5**: Full Project Management ($30,000-45,000)
- **Level 5.5**: Premium Personalized (Contact for Pricing)

### **Technical Architecture**
- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Commerce**: BigCommerce headless integration
- **Deployment**: Railway (auto-deploy from GitHub)
- **Fonts**: Orbitron (headings), Inter (body), Playfair Display (serif)
- **Cart**: Local storage with persistent state management

## 🚀 **Git Repository Management**

### **IMPORTANT: 4420-Courts Specific Repository**
This project uses its own dedicated repository at: `https://github.com/playhardscapes/4420courts.git`

### **Push Process for 4420-Courts Only**
```bash
# Navigate to 4420-courts directory
cd /home/info4420/github/4420courts

# Check git status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message here"

# Push to main branch of 4420courts repository
git push origin main
```

### **DO NOT Push to Other Repositories**
- This project is separate from the main Play Hardscapes management system
- Only push changes from the 4420-courts directory
- Repository URL is specifically: https://github.com/playhardscapes/4420courts.git
- Railway deployment monitors this specific repository's main branch

## 📝 **Next Implementation Steps**
1. Set up Shopify store with customer accounts
2. Create Vimeo Pro account for private video hosting
3. Develop "10 Common Mistakes" video series
4. Build customer portal page with conditional content
5. Test purchase-to-portal access flow

## 📞 **Business Model Notes**
- **Material cost**: ~$500 for 30 gallons (court needs 80 gallons)
- **One court** = $1,000-1,500 revenue
- **Target**: 15-17 courts/month = $18-20k revenue
- **Customer profile**: "Two guys & a pickup" contractors and overwhelmed homeowners
- **No bulk pricing** - everyone pays retail for premium service

## 🏢 **DEALER PORTAL COMPLETE SYSTEM DOCUMENTATION**

### **❗ CRITICAL: Complete Dealer Portal with Accounting EXISTS**

**STATUS**: The comprehensive dealer portal with full accounting functionality was accidentally deleted/overwritten during a Claude session on January 28, 2025. The database schema shows it was a complete enterprise system.

### **🗄️ DATABASE SCHEMA (COMPLETE SYSTEM)**

**Location**: `/home/info4420/github/4420courts/prisma/schema.prisma`

#### **DEALER MANAGEMENT SYSTEM**
```typescript
model Dealer {
  id              String @id @default(cuid())
  userId          String @unique
  companyName     String
  dealerCode      String @unique
  territory       String?
  commissionRate  Decimal @default(0.10)
  serviceLevel    DealerServiceLevel
  status          DealerStatus @default(PENDING)
  businessAddress Json
  orders          Order[]
  commissions     Commission[]
  territories     Territory[]
}

enum DealerServiceLevel {
  LEVEL_1    // Free DIY Resources ($0)
  LEVEL_2    // Monthly Membership ($49.99/month)
  LEVEL_3    // Coating & Lining Specialist ($10k-15k)
  LEVEL_4    // Project Management + Finish ($15k-25k)
  LEVEL_5    // Full Project Management ($30k-45k)
  LEVEL_5_5  // Premium Personalized (Contact for Pricing)
}
```

#### **COMPLETE ACCOUNTING SYSTEM**
```typescript
model Account {
  id            String @id @default(cuid())
  code          String @unique // Account code (e.g., "1001")
  name          String
  type          AccountType
  parentId      String?
  parent        Account? @relation("AccountHierarchy")
  children      Account[] @relation("AccountHierarchy")
  balance       Decimal @default(0)
  debitEntries  JournalEntry[] @relation("DebitAccount")
  creditEntries JournalEntry[] @relation("CreditAccount")
}

model JournalEntry {
  id              String @id @default(cuid())
  entryNumber     String @unique
  debitAccountId  String
  debitAccount    Account @relation("DebitAccount")
  creditAccountId String
  creditAccount   Account @relation("CreditAccount")
  amount          Decimal
  description     String
  reference       String? // Order ID, Invoice ID, etc.
}

enum AccountType {
  ASSET
  LIABILITY
  EQUITY
  REVENUE
  EXPENSE
}
```

#### **COMPLETE BUSINESS SYSTEM**
- **Customer Management**: Full customer profiles with billing/shipping
- **Product Catalog**: Complete product system with dealer/retail/wholesale pricing
- **Order Management**: Full order processing with dealer assignment
- **Invoice System**: Professional invoicing with line items
- **Payment Processing**: Multiple payment methods (Stripe, PayPal, etc.)
- **Commission Tracking**: Automatic commission calculation and payment
- **Territory Management**: Geographic boundaries for dealers
- **Inventory Management**: Stock tracking with moves (SALE, PURCHASE, ADJUSTMENT, etc.)
- **Support System**: Customer service ticketing
- **Reporting System**: Custom report generation (SALES, FINANCIAL, DEALER_PERFORMANCE)

### **📊 CHART OF ACCOUNTS (EXISTS)**

**Location**: `/home/info4420/github/4420courts/filesfortransfer/ChartOfAccounts.csv`

**Sample Accounts (80+ total)**:
- **1000**: Cash (ASSET)
- **1100**: Accounts Receivable (ASSET)
- **1200**: Inventory (ASSET)
- **1500**: Equipment (ASSET)
- **2000**: Accounts Payable (LIABILITY)
- **2100**: Sales Tax Payable (LIABILITY)
- **3000**: Owners Equity (EQUITY)
- **4000**: Product Sales (REVENUE)
- **4100**: Service Revenue (REVENUE)
- **5000**: Cost of Goods Sold (EXPENSE)
- **6200**: Commission Expense (EXPENSE)

### **💼 FINANCIAL DOCUMENTS (EXISTS)**
**Location**: `/home/info4420/github/4420courts/filesfortransfer/`
- Balance Sheet (PDF + Excel)
- Income Statement/P&L (PDF + Excel)
- Sales Invoices CSV
- Contacts database

### **🔧 MISSING COMPONENTS (Need to Rebuild)**

#### **DEALER PORTAL FRONTEND** (`/apps/dealer-portal/src/app/`)
**Current State**: Only basic homepage + calendar page
**Missing**:
1. **Accounting Interface**:
   - Chart of Accounts management (`/accounting/accounts`)
   - Journal Entry forms (`/accounting/journal`)
   - Financial reports (`/accounting/reports`)
   - Trial Balance (`/accounting/trial-balance`)

2. **Dealer Management**:
   - Dealer dashboard (`/dashboard`)
   - Commission tracking (`/commissions`)
   - Territory management (`/territory`)
   - Performance analytics (`/analytics`)

3. **Business Operations**:
   - Order management (`/orders`)
   - Customer management (`/customers`)
   - Inventory overview (`/inventory`)
   - Settings (`/settings`)

### **🚀 REBUILD INSTRUCTIONS**

#### **Step 1: Generate Database Client**
```bash
cd /home/info4420/github/4420courts
npx prisma generate
npx prisma db push
npx prisma db seed
```

#### **Step 2: Create Missing Pages**
```typescript
// Create these pages in /apps/dealer-portal/src/app/
/accounting/
  /accounts/page.tsx          // Chart of Accounts
  /journal/page.tsx           // Journal Entries
  /reports/page.tsx           // Financial Reports
/dashboard/page.tsx           // Main dealer dashboard
/commissions/page.tsx         // Commission tracking
/orders/page.tsx              // Order management
/customers/page.tsx           // Customer management
/settings/page.tsx            // Dealer settings
```

#### **Step 3: Import Chart of Accounts**
```typescript
// Use the ChartOfAccounts.csv to populate accounts table
// Parse CSV and create Account records with proper hierarchy
```

#### **Step 4: Build Components**
- Financial report generators (P&L, Balance Sheet)
- Commission calculation displays
- Order assignment workflows
- Customer relationship management

### **🛡️ PROTECTION MEASURES**

#### **Backup Branches**
- `dealer-portal-complete-backup` - Created January 28, 2025
- Always create feature branches before major changes

#### **Commit Strategy**
```bash
# Commit frequently with descriptive messages
git add .
git commit -m "Add accounting: Chart of Accounts interface

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

#### **Documentation Requirements**
- Update this CLAUDE.md after each major component
- Document any schema changes
- Keep screenshots of working interfaces

### **🎯 REBUILD PRIORITY ORDER**
1. **Database Client Setup** - Get Prisma working
2. **Chart of Accounts** - Import and display existing data
3. **Basic Dashboard** - Dealer overview page
4. **Journal Entries** - Accounting transaction forms
5. **Financial Reports** - P&L and Balance Sheet generation
6. **Commission System** - Dealer payment tracking
7. **Order Integration** - Connect accounting to business operations

---

**Last Updated**: January 28, 2025
**Repository**: https://github.com/playhardscapes/4420courts.git
**Deployment**: Railway (monitors main branch)
**Critical**: Complete dealer portal with accounting system needs rebuilding