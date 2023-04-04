const offices = [
  {
    id: "1",
    location: "Bengaluru",
    addressLine1: "#365, 3rd Floor, Sulochana Building,",
    addressLine2: "1st Cross Road, 3rd Block,",
    addressLine3: "Koramangala, Sarjapura Main Road,",
    addressLine4: "Bangalore 560034, India",
    phoneNumbers: ["+91-80-61580030/31"],
    mapUrl: "https://www.google.com/maps/place/Sahaj+Software+Solutions+Pvt.+Ltd./@12.924928,77.6256663,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae1493bfc3241b:0x9fc1c9bd2d066d5a!8m2!3d12.924928!4d77.627855",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7321687835897!2d77.62566631482152!3d12.9249279908865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1493bfc3241b%3A0x9fc1c9bd2d066d5a!2sSahaj%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1595442734424!5m2!1sen!2sin"
  },
  {
    id: "2",
    location: "Chennai",
    addressLine1: "Type 2/15 Dr.V.S.I Estate,",
    addressLine2: "Rajiv Gandhi Salai,",
    addressLine3: "Thiruvanmiyur,",
    addressLine4: "Chennai 600 041, India",
    phoneNumbers: ["+91-44-66230430"],
    mapUrl: "https://www.google.co.in/maps/place/Sahaj+Software+Solutions+Pvt+Ltd/@12.9822472,80.2496766,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525d6702169cc3:0x597e1dce24ca54!8m2!3d12.9821963!4d80.2517205?hl=en-GB",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.837438808367!2d80.24967661482214!3d12.982247190848948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6702169cc3%3A0x597e1dce24ca54!2sSahaj%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1595444203585!5m2!1sen!2sin"
  },
  {
    id: "3",
    location: "London",
    addressLine1: "Suite 107,",
    addressLine2: "85 Tottenham Court Road",
    addressLine3: "London",
    addressLine4: "W1T 4TQ",
    phoneNumbers: ["+44 79798 65137"],
    mapUrl: "https://www.google.com/maps/place/107,+85+Tottenham+Court+Rd,+London+W1T+4TQ,+UK/@51.521751,-0.1378788,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b29359676ff:0xa2b18f1ed4500ada!8m2!3d51.5217477!4d-0.1356901",
    gmapId: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2482.8121250278855!2d-0.1329151!3d51.5166627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d2658a30f%3A0x1e2c83c1b7643823!2s310C%2C%2018%20Soho%20Square%2C%20Soho%2C%20London%20W1D%203QH%2C%20UK!5e0!3m2!1sen!2sin!4v1595452783900!5m2!1sen!2sin"
  },

  {
    id: "4",
    location: "Melbourne",
    addressLine1: "Level 2/696",
    addressLine2: "Bourke St,",
    addressLine3: "Melbourne VIC 3000",
    addressLine4: "",
    phoneNumbers: ["+61 477 600 201"],
    mapUrl: "https://www.google.com/maps/place/Level+2%2F696+Bourke+St,+Melbourne+VIC+3000,+Australia/@-37.8166942,144.9513702,17z/data=!3m2!4b1!5s0x6ad668056af2c7a9:0x27549325a6fe640b!4m5!3m4!1s0x6ad65d4e50bb7fa9:0x4513b5c3db16e2da!8m2!3d-37.8166985!4d144.9535589",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8584761690404!2d145.2233436153188!3d-37.816783779751795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6397d5154e59b%3A0xec821de24cf66e07!2s208%2F92%20Maroondah%20Hwy%2C%20Ringwood%20VIC%203134%2C%20Australia!5e0!3m2!1sen!2sin!4v1595452900629!5m2!1sen!2sin"
  },
  {
    id: "5",
    location: "Pune",
    addressLine1: "Nyati Tech Park, 301A,",
    addressLine2: "3rd Floor, Wing A,",
    addressLine3: "Digambar Nagar,Wadgaon Sheri,",
    addressLine4: "Pune, Maharashtra 411014, India",
    phoneNumbers: ["+91-20-67109666"],
    mapUrl: "https://www.google.com/maps/place/Sahaj+Software+Solutions+Pvt.+Ltd./@18.5424525,73.9114729,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c119d06a21a9:0x3e6795f4fecf0ba2!8m2!3d18.5424525!4d73.9136616",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.700039030865!2d73.91147291489303!3d18.54245248739629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c119d06a21a9%3A0x3e6795f4fecf0ba2!2sSahaj%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1595446344723!5m2!1sen!2sin"
  },
  {
    id: "6",
    location: "San Francisco",
    addressLine1: "39899 Balentine Drive,",
    addressLine2: "Suite 200,",
    addressLine3: "Newark, CA 94560",
    addressLine4: "",
    phoneNumbers: ["+1(415)246-4594"],
    mapUrl: "https://www.google.co.in/maps/place/39899+Balentine+Dr+%23200,+Newark,+CA+94560,+USA/@37.5215559,-121.9963291,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbf5573ec8c55:0x34711976c093e045!8m2!3d37.5213452!4d-121.993996",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4216839863298!2d-121.99632908468963!3d37.521555879806385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf5573ec8c55%3A0x34711976c093e045!2s39899%20Balentine%20Dr%20%23200%2C%20Newark%2C%20CA%2094560%2C%20USA!5e0!3m2!1sen!2sin!4v1595452826313!5m2!1sen!2sin"
  },
  {
    id: "7",
    location: "Singapore",
    addressLine1: "# 160, Robinson Road, #14-04,",
    addressLine2: "Singapore (068914)",
    addressLine3: "",
    addressLine4: "",
    phoneNumbers: [" "],
    mapUrl: "https://www.google.com/maps/place/160+Robinson+Rd,+%2314-04+SBF+Centre,+Singapore+068914/@1.278037,103.8457896,17z/data=!3m1!4b1!4m5!3m4!1s0x31da19a899f57e67:0xe2f9536e3baeaa1!8m2!3d1.278037!4d103.8479783",
    gmapId: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8257833417324!2d103.84578961475393!3d1.2780369990678444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a899f57e67%3A0xe2f9536e3baeaa1!2s160%20Robinson%20Rd%2C%20%2314-04%20SBF%20Centre%2C%20Singapore%20068914!5e0!3m2!1sen!2sin!4v1633354972327!5m2!1sen!2sin"
  },
  {
    id: "8",
    location: "Austin",
    addressLine1: "2021 Guadalupe Street Dobie Center,",
    addressLine2: "Suite 260,",
    addressLine3: "Austin, TX 78705",
    addressLine4: "",
    phoneNumbers: ["+1(415)246-4594"],
    mapUrl: "https://www.google.com/maps/place/Regus+-+Texas,+Austin+-+Dobie+Center/@30.2832,-97.7436887,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b59d8bf7991d:0x4dd44106e908680e!8m2!3d30.2832!4d-97.7415",
    gmapId: ""
  },

];

module.exports = offices;
