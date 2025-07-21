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

---

**Last Updated**: January 2025
**Repository**: https://github.com/playhardscapes/4420courts.git
**Deployment**: Railway (monitors main branch)