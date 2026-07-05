// HOW TO SET UP EMAILJS:
// 1. Go to emailjs.com and create 
//    free account
// 2. Add Email Service:
//    Connect your Gmail account
//    Copy the Service ID
// 3. Create Email Template:
//    To email: contact@hireguard.online
//    Subject: 
//    "New Access Request — HireGuard AI"
//    Body template:
//    "New access request received:
//    Name: {{from_name}}
//    Email: {{from_email}}
//    Company: {{company}}
//    Hires per year: {{hires_per_year}}
//    Heard from: {{heard_from}}
//    Message: {{message}}
//    Reply to: {{reply_to}}"
//    Copy the Template ID
// 4. Go to Account → API Keys
//    Copy your Public Key
// 5. Replace the three placeholders 
//    in EMAILJS_CONFIG with your 
//    actual values

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', 
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};
