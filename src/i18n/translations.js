/**
 * translations.js
 * Tamil (ta) is primary, English (en) is secondary.
 */

const translations = {
  // ─── Navbar ────────────────────────────────────────────────────────────────
  nav: {
    home:        { ta: 'முகப்பு',       en: 'Home' },
    collections: { ta: 'சேகரங்கள்',    en: 'Collections' },
    services:    { ta: 'சேவைகள்',      en: 'Services' },
    about:       { ta: 'எங்களைப் பற்றி', en: 'About' },
    contact:     { ta: 'தொடர்பு',      en: 'Contact' },
    bookEyeTest: { ta: 'கண் பரிசோதனை', en: 'Book Eye Test' },
  },

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     { ta: 'நிறுவப்பட்டது 1992 · திருப்பத்தூர், தமிழ்நாடு', en: 'Est. 1992 · Tirupathur, Tamil Nadu' },
    headline:    { ta: 'உலகை பாருங்கள்', en: 'See the World' },
    headlineWith:{ ta: 'உடன்',           en: 'with' },
    words: {
      ta: ['தெளிவு', 'நேர்த்தி', 'பார்வை', 'துல்லியம்'],
      en: ['Clarity', 'Elegance', 'Vision', 'Precision'],
    },
    subtext: {
      ta: 'தரமான கண்ணாடிகள் உங்கள் அழகான பார்வைக்காக. துல்லியமான லென்ஸ்களில் இருந்து கையால் செய்யப்பட்ட பிரேம்கள் வரை — உங்கள் பார்வை எங்கள் கலை.',
      en: 'Premium eyewear crafted for the discerning soul. From precision lenses to handcrafted frames — your vision is our art.',
    },
    exploreBtn:  { ta: 'சேகரங்களை ஆராயுங்கள்', en: 'Explore Collections' },
    servicesBtn: { ta: 'எங்கள் சேவைகள்',        en: 'Our Services' },
    stats: {
      years:     { ta: 'ஆண்டுகள் நம்பகம்',   en: 'Years of Trust' },
      customers: { ta: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்', en: 'Happy Customers' },
      frames:    { ta: 'பிரேம் பாணிகள்',     en: 'Frame Styles' },
    },
    newSeason:   { ta: 'புதிய சீசன்',   en: 'New Season' },
    collection:  { ta: 'தொகுப்பு',     en: 'Collection' },
    scroll:      { ta: 'உருட்டுங்கள்', en: 'Scroll' },
  },

  // ─── Features ──────────────────────────────────────────────────────────────
  features: {
    eyebrow: { ta: 'ஏன் எங்களை தேர்வு செய்யுங்கள்', en: 'Why Choose Us' },
    heading: { ta: 'சிறந்த பார்வைக்காக வடிவமைக்கப்பட்டது', en: 'Crafted for Exceptional Vision' },
    subtext: { ta: 'ஒரே ஒரு இலக்கோடு வடிவமைக்கப்பட்ட ஒவ்வொரு சேவையும் — உலகை அதன் சுத்தமான வடிவத்தில் பார்க்க உதவுவதற்காக.', en: 'Every service designed with one goal — helping you see the world in its truest form.' },
    items: [
      {
        title: { ta: 'மேம்பட்ட கண் பரிசோதனை',       en: 'Advanced Eye Testing' },
        desc:  { ta: 'நவீன டிஜிட்டல் தொழில்நுட்பத்தால் துல்லியமான பரிசோதனை.', en: 'State-of-the-art digital refraction technology for pinpoint accurate prescriptions.' },
        tamil: { ta: 'கண் பரிசோதனை', en: 'Eye Testing' },
      },
      {
        title: { ta: 'உயர்தர பிரேம் பிராண்டுகள்',   en: 'Premium Frame Brands' },
        desc:  { ta: 'Ray-Ban, Oakley, Titan மற்றும் பிரத்யேக டிசைனர் தொகுப்புகள்.', en: 'Curated selection of Ray-Ban, Oakley, Titan, and exclusive designer collections.' },
        tamil: { ta: 'உயர்தர பிரேம்',  en: 'Premium Frame' },
      },
      {
        title: { ta: 'பிரதிபலிப்பு எதிர்ப்பு லென்ஸ்', en: 'Anti-Reflective Lenses' },
        desc:  { ta: 'புளூ-கட், ஃபோட்டோக்ரோமிக், புரோக்ரசிவ் மற்றும் உயர்-குறியீட்டு லென்ஸ்கள்.', en: 'Next-gen coatings — Blue-cut, Photochromic, Progressive, and High-index lenses.' },
        tamil: { ta: 'ஆன்டி-ரிஃப்லெக்டிவ்', en: 'Anti-Reflective' },
      },
      {
        title: { ta: 'அதே நாள் டெலிவரி',            en: 'Same Day Delivery' },
        desc:  { ta: 'விரைவான லென்ஸ் பொருத்தும் சேவை. பரிந்துரையுடன் வாருங்கள், சரியான பார்வையுடன் செல்லுங்கள்.', en: 'Express lens fitting service. Walk in with a prescription, walk out with perfect vision.' },
        tamil: { ta: 'விரைவு சேவை',   en: 'Quick Service' },
      },
      {
        title: { ta: 'இலவச ஆலோசனை',                en: 'Free Consultation' },
        desc:  { ta: 'நிபுணர் ஆய்வாளர்கள் பிரேம் தேர்வு மற்றும் லென்ஸ் பரிந்துரைகளில் வழிகாட்டுவர்.', en: 'Expert optometrists guide you through frame selection and lens recommendations.' },
        tamil: { ta: 'இலவச ஆலோசனை', en: 'Free Consultation' },
      },
      {
        title: { ta: '1 ஆண்டு உத்தரவாதம்',          en: '1-Year Warranty' },
        desc:  { ta: 'அனைத்து பிரேம்களும் விரிவான உத்தரவாதத்துடன் வருகின்றன. உங்கள் மன அமைதி உத்தரவாதம்.', en: 'All frames come with comprehensive warranty. Your peace of mind is guaranteed.' },
        tamil: { ta: '1 ஆண்டு வாரண்டி', en: '1-Year Warranty' },
      },
    ],
  },

  // ─── Collections ───────────────────────────────────────────────────────────
  collections: {
    eyebrow: { ta: 'தேர்ந்தெடுக்கப்பட்ட கண்ணாடிகள்', en: 'Curated Eyewear' },
    heading: { ta: 'எங்கள் தொகுப்புகள்', en: 'Our Collections' },
    viewBtn: { ta: 'பார்க்க',            en: 'View' },
    viewAll: { ta: '1500+ பிரேம்களை பார்க்கவும்', en: 'View All 1500+ Frames' },
    filters: {
      all:         { ta: 'அனைத்தும்',  en: 'All' },
      fullFrame:   { ta: 'முழு பிரேம்', en: 'Full Frame' },
      rimless:     { ta: 'விளிம்பற்ற', en: 'Rimless' },
      semiRimless: { ta: 'அரை-விளிம்பற்ற', en: 'Semi-Rimless' },
      classic:     { ta: 'கிளாசிக்',  en: 'Classic' },
      aviator:     { ta: 'ஏவியேட்டர்', en: 'Aviator' },
      cateye:      { ta: 'கேட்-ஐ', en: 'Cat-Eye' },
      sports:      { ta: 'விளையாட்டு', en: 'Sports' },
    },
    items: [
      {
        name:     { ta: 'ரே-பான் ஏவியேட்டர்', en: 'Ray-Ban Aviator' },
        category: { ta: 'முழு பிரேம்',          en: 'Full Frame' },
        tag:      { ta: 'அதிக விற்பனை',        en: 'Bestseller' },
      },
      {
        name:     { ta: 'கால்வின் கிளைன் சொகுசு',  en: 'Calvin Klein Luxury' },
        category: { ta: 'முழு பிரேம்',    en: 'Full Frame' },
        tag:      { ta: 'புதிய வரவு',     en: 'New Arrival' },
      },
      {
        name:     { ta: 'ஓக்லி ஸ்போர்ட்ஸ்', en: 'Oakley Sports' },
        category: { ta: 'அரை-விளிம்பற்ற', en: 'Semi-Rimless' },
        tag:      { ta: 'வரையறுக்கப்பட்ட', en: 'Limited' },
      },
      {
        name:     { ta: 'வெர்சேஸ் எலிகன்ஸ்', en: 'Versace Elegance' },
        category: { ta: 'கிளாசிக்',          en: 'Classic' },
        tag:      { ta: 'கிளாசிக்',          en: 'Classic' },
      },
      {
        name:     { ta: 'கரேரா ரேசிங்', en: 'Carrera Racing' },
        category: { ta: 'ஏவியேட்டர்',        en: 'Aviator' },
        tag:      { ta: 'டிரெண்டிங்',        en: 'Trending' },
      },
      {
        name:     { ta: 'குஸ்ஸி சிக்', en: 'Gucci Chic' },
        category: { ta: 'கேட்-ஐ',          en: 'Cat-Eye' },
        tag:      { ta: 'பெண்கள்',          en: 'Women' },
      },
      {
        name:     { ta: 'டாமி ஹில்ஃபிகர்', en: 'Tommy Hilfiger' },
        category: { ta: 'முழு பிரேம்',     en: 'Full Frame' },
        tag:      { ta: 'யுனிசெக்ஸ்',        en: 'Unisex' },
      },
      {
        name:     { ta: 'பாஸ்ட்ராக் ஆக்டிவ்', en: 'Fastrack Active' },
        category: { ta: 'விளையாட்டு',       en: 'Sports' },
        tag:      { ta: 'நீடித்தது',         en: 'Durable' },
      },
    ],
    partners: {
      eyebrow: { ta: 'அங்கீகரிக்கப்பட்ட டீலர்கள்', en: 'Authorised Dealers' },
      heading: { ta: 'எங்கள் பிராண்ட் பங்காளி', en: 'Our Brand Partners' },
      lenses: { ta: 'லென்ஸ் நிறுவனங்கள்', en: 'Lens Companies' },
      frames: { ta: 'பிரேம் நிறுவனங்கள்', en: 'Frame Companies' },
      types:  { ta: 'பிரேம் வகைகள்', en: 'Frame Types' },
    },
    lensCompanies: ['Zylus', 'Zeiss', 'Essilor', 'Hoya', 'Nova', 'Asahi-Lite', 'Invicta'],
    frameCompanies: ['Ray-Ban', 'Calvin Klein', 'Oakley', 'Versace', 'Carrera', 'Scott', 'Gucci', 'Tommy Hilfiger', 'Police Eyewear', 'Vogue', 'Puma', 'Arcadio', 'Fasttrack'],
    frameTypes: [
      { ta: 'முழு பிரேம்', en: 'Full Frame' },
      { ta: 'அரை-விளிம்பற்ற', en: 'Semi-Rimless' },
      { ta: 'விளிம்பற்ற', en: 'Rimless' },
      { ta: 'ஏவியேட்டர்', en: 'Aviator' },
      { ta: 'கேட்-ஐ', en: 'Cat-Eye' },
      { ta: 'விளையாட்டு', en: 'Sports' }
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow: { ta: 'நாங்கள் வழங்குவது', en: 'What We Offer' },
    heading: { ta: 'முழுமையான கண் பராமரிப்பு சேவைகள்', en: 'Complete Eye Care Services' },
    priceLabel:    { ta: 'விலை',    en: 'Price' },
    durationLabel: { ta: 'நேரம்',  en: 'Duration' },
    items: [
      {
        title:    { ta: 'சான்றளிக்கப்பட்ட கண் பரிசோதனை',     en: 'Certified Eye Testing' },
        desc:     { ta: 'கணினி மயமாக்கப்பட்ட ஆட்டோ-ரிஃப்ராக்டோமெட்ரி மூலம் முழு கண் மதிப்பீடு.', en: 'Full diagnostic evaluation using computerised auto-refractometry.' },
        price:    { ta: 'வாங்குகையில் இலவசம்', en: 'Free with Purchase' },
        duration: { ta: '30 நிமிடம்',           en: '30 min' },
      },
      {
        title:    { ta: 'லென்ஸ் பொருத்துதல்', en: 'Precision Lens Fitting' },
        desc:     { ta: 'அனைத்து வகை பிரேம்களுக்கும் துல்லியமான லென்ஸ் பொருத்துதல்.', en: 'Professional lens fitting for all frame types. Perfect alignment guaranteed.' },
        price:    { ta: '', en: '' },
        duration: { ta: 'உடனடியாக', en: 'Instant' },
      },
      {
        title:    { ta: 'கான்டாக்ட் லென்ஸ்', en: 'Contact Lens' },
        desc:     { ta: 'அனைத்து முன்னணி பிராண்டுகளின் உயர்தர கான்டாக்ட் லென்ஸ்கள் கிடைக்கும்.', en: 'Premium contact lenses from all major brands. Daily, monthly, and colored options.' },
        price:    { ta: '₹2000 முதல்', en: '₹2000 onwards' },
        duration: { ta: 'உடனடியாக', en: 'Instant' },
      },
      {
        title:    { ta: 'பிரேம் பழுதுபார்ப்பு & சரிசெய்தல்', en: 'Frame Repair & Adjustments' },
        desc:     { ta: 'தொழில்முறை பிரேம் பழுதுபார்ப்பு மற்றும் அனைத்து பிரேம்களுக்கும் இலவச சரிசெய்தல்.', en: 'Professional frame repairs and complimentary adjustments for all frames.' },
        price:    { ta: '₹200 முதல்',       en: '₹200 onwards' },
        duration: { ta: 'உடனடியாக',     en: 'Instant' },
      },
      {
        title:    { ta: 'ஆன்டி-குளேர் பூச்சு', en: 'Anti-Glare Coating' },
        desc:     { ta: 'AR, UV, புளூ-கட் மற்றும் கீறல்-எதிர்ப்பு பூச்சுகள் தொழில்முறை பயன்பாடு.', en: 'Professional application of AR, UV, Blue-cut, and scratch-resistant coatings.' },
        price:    { ta: '₹600 முதல்', en: '₹600 onwards' },
        duration: { ta: 'உடனடியாக',     en: 'Instant' },
      },
      {
        title:    { ta: 'வீட்டு டெலிவரி', en: 'Home Delivery' },
        desc:     { ta: 'திருப்பத்தூர் மற்றும் சுற்றுப்புற பகுதிகளில் வீட்டு வாசலில் டெலிவரி. நேரடி கண்காணிப்பு.', en: 'Doorstep delivery across Tirupathur and surrounding areas. Track your order in real-time.' },
        price:    { ta: '₹999க்கு மேல் இலவசம்', en: 'Free above ₹999' },
        duration: { ta: '1-3 நாட்கள்',           en: '1-3 days' },
      },
    ],
  },

  // ─── WhyUs ─────────────────────────────────────────────────────────────────
  whyus: {
    eyebrow:    { ta: 'எங்கள் கதை',    en: 'Our Story' },
    heading1:   { ta: 'திருப்பத்தூரின் மிகவும்', en: "Tirupathur's Most" },
    headingEm:  { ta: 'நம்பகமான',       en: 'Trusted' },
    heading2:   { ta: 'கண்ணாடி வீடு',  en: 'Optical House' },
    para1: {
      ta: '1992 ஆம் ஆண்டில் நிறுவப்பட்ட Nirmal OPTICALS, ஒரு எளிய நம்பிக்கையுடன் சிறு கண் திருத்த மருத்துவமனையாக தொடங்கியது — ஒவ்வொரு நபரும் பாணி அல்லது பட்ஜெட்டில் சமரசம் செய்யாமல் உலகை தெளிவாக பார்க்க வேண்டும்.',
      en: 'Founded in 1992, Nirmal OPTICALS began as a small vision correction clinic with a simple belief — every person deserves to see the world in perfect clarity, without compromising on style or budget.',
    },
    para2: {
      ta: 'இன்று நாங்கள் திருப்பத்தூரில் அதிகம் பார்வையிடப்படும் கண்ணாடி கடையாக இருக்கிறோம், 5,000க்கும் மேற்பட்ட வாடிக்கையாளர்களுக்கு சேவை செய்கிறோம்.',
      en: "Today we're Tirupathur's most visited optical store, serving over 5,000 customers with state-of-the-art equipment and certified optometrists.",
    },
    badges: {
      iso:   { ta: 'ISO சான்றளிக்கப்பட்ட',  en: 'ISO Certified' },
      aioc:  { ta: 'AIOC உறுப்பினர்',        en: 'AIOC Member' },
      titan: { ta: 'Titan பங்காளி',           en: 'Titan Partner' },
    },
    stats: {
      years:     { ta: 'ஆண்டுகள் அனுபவம்',             en: 'Years Experience' },
      customers: { ta: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்', en: 'Happy Customers' },
      frames:    { ta: 'பிரேம் பாணிகள்',                en: 'Frame Styles' },
      rating:    { ta: 'கூகுள் மதிப்பீடு',              en: 'Google Rating' },
    },
    authorised: { ta: 'அங்கீகரிக்கப்பட்ட டீலர்கள்', en: 'Authorised Dealers For' },
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: { ta: '1992 முதல் திருப்பத்தூரின் உயர்தர கண்ணாடி மையம். தரமான பார்வை, அன்புடன் உருவாக்கப்பட்டது.', en: "Tirupathur's premium optical destination since 1992. Quality vision, crafted with care." },
    columns: {
      collections: { ta: 'சேகரங்கள்', en: 'Collections' },
      services:    { ta: 'சேவைகள்',   en: 'Services' },
      about:       { ta: 'எங்களைப் பற்றி', en: 'About' },
    },
    links: {
      collections: {
        prescription: { ta: 'பரிந்துரை கண்ணாடிகள்',   en: 'Prescription Glasses' },
        sunglasses:   { ta: 'சன்கிளாஸ்',               en: 'Sunglasses' },
        contact:      { ta: 'கான்டாக்ட் லென்ஸ்',       en: 'Contact Lenses' },
        reading:      { ta: 'படிக்கும் கண்ணாடிகள்',   en: 'Reading Glasses' },
        kids:         { ta: 'குழந்தைகள் கண்ணாடிகள்',  en: 'Kids Eyewear' },
        sports:       { ta: 'விளையாட்டு கண்ணாடிகள்', en: 'Sports Eyewear' },
      },
      services: {
        testing:   { ta: 'கண் பரிசோதனை',    en: 'Eye Testing' },
        fitting:   { ta: 'லென்ஸ் பொருத்தல்', en: 'Lens Fitting' },
        repairs:   { ta: 'பிரேம் பழுதுபார்ப்பு', en: 'Frame Repairs' },
        trial:     { ta: 'கான்டாக்ட் சோதனை',  en: 'Contact Lens Trial' },
        coating:   { ta: 'ஆன்டி-குளேர் பூச்சு', en: 'Anti-Glare Coating' },
        delivery:  { ta: 'வீட்டு டெலிவரி',   en: 'Home Delivery' },
      },
      about: {
        story:        { ta: 'எங்கள் கதை',    en: 'Our Story' },
        team:         { ta: 'எங்கள் குழு',   en: 'Our Team' },
        cert:         { ta: 'சான்றிதழ்கள்', en: 'Certifications' },
        blog:         { ta: 'வலைப்பதிவு',   en: 'Blog' },
        careers:      { ta: 'வேலை வாய்ப்பு', en: 'Careers' },
        press:        { ta: 'பத்திரிகை',     en: 'Press' },
      },
    },
    copyright: { ta: '© 2025 Nirmal OPTICALS. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', en: '© 2025 Nirmal OPTICALS. All rights reserved.' },
    privacy:  { ta: 'தனியுரிமை கொள்கை',  en: 'Privacy Policy' },
    terms:    { ta: 'சேவை விதிமுறைகள்', en: 'Terms of Service' },
    refund:   { ta: 'திருப்பி செலுத்தல் கொள்கை', en: 'Refund Policy' },
  },

  // ─── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: { ta: 'வாடிக்கையாளர் கதைகள்', en: 'Customer Stories' },
    heading: { ta: 'எங்கள் வாடிக்கையாளர்கள் <br /> <em style="color: var(--gold); font-style: italic;">எங்களைப் பற்றி என்ன சொல்கிறார்கள்</em>', en: 'What Our Customers <br /> <em style="color: var(--gold); font-style: italic;">Say About Us</em>' },
    items: [
      {
        name:     { ta: 'தருண்', en: 'Tarun' },
        role:     { ta: 'வாடிக்கையாளர்', en: 'Verified Customer' },
        location: { ta: 'திருப்பத்தூர்', en: 'Tirupathur' },
        text:     { ta: 'நிர்மல் ஆப்டிகல்ஸ் சிறந்த சேவையை வழங்குகிறது, தேர்வு செய்ய பலதரப்பட்ட தரமான பிரேம்கள் மற்றும் லென்ஸ்கள் உள்ளன. ஊழியர்கள் பொறுமையானவர்கள், சரியான கண்ணாடியைத் தேர்வு செய்ய உண்மையிலேயே உதவுகிறார்கள். கண் பரிசோதனை விரைவாகவும் மிகவும் துல்லியமாகவும் இருந்தது.', en: 'Nirmal Opticals offers excellent service with a wide range of quality frames and lenses. The staff are patient and truly helpful in guiding you to the right pair. The eye examination was quick and very accurate.' },
      },
      {
        name:     { ta: 'செந்தில் குமார்', en: 'Senthil Kumar' },
        role:     { ta: 'வாடிக்கையாளர்', en: 'Verified Customer' },
        location: { ta: 'திருப்பத்தூர்', en: 'Tirupathur' },
        text:     { ta: 'சிறந்த சேவை. மிக விரைவான டெலிவரி. அனைத்து வயதினருக்கும் ஏற்ற கூடுதல் மாடல்கள் உள்ளன.', en: 'Excellent service. Very quick delivery. More models for all ages.' },
      },
      {
        name:     { ta: 'லவி ஜீசஸ்', en: 'lavi jesus' },
        role:     { ta: 'வாடிக்கையாளர்', en: 'Verified Customer' },
        location: { ta: 'திருப்பத்தூர்', en: 'Tirupathur' },
        text:     { ta: 'வழங்கப்பட்ட சேவையில் நான் மிகவும் மகிழ்ச்சியடைகிறேன், எளிதில் அணுகக்கூடியது, சரியான நேரத்தில் டெலிவரி, ஒட்டுமொத்தமாக மிகவும் திருப்திகரமாக உள்ளது. நன்றி.', en: 'I am very much happy with the service given, easily approachable, timely deliverance, overall very much satisfying. Thank you.' },
      },
      {
        name:     { ta: 'மெய்வண்ணன் நவீன்', en: 'Myvannan Naveen' },
        role:     { ta: 'வாடிக்கையாளர்', en: 'Verified Customer' },
        location: { ta: 'திருப்பத்தூர்', en: 'Tirupathur' },
        text:     { ta: 'அற்புதமான சேகரிப்புகள். மிக விரைவான டெலிவரி.', en: 'Stunning collections. Very quick delivery.' },
      },
    ],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  contact: {
    eyebrow: { ta: 'தொடர்பு கொள்ளுங்கள்', en: 'Get In Touch' },
    heading: { ta: 'உங்கள் <em style="color: var(--gold); font-style: italic;">சந்திப்பை</em> பதிவு செய்யுங்கள்', en: 'Book Your <em style="color: var(--gold); font-style: italic;">Appointment</em>' },
    subtext: { ta: 'கண் பரிசோதனைக்கு திட்டமிடுங்கள் அல்லது கடைக்கு வாருங்கள். முன்பதிவு இன்றி வரலாம்.', en: 'Schedule an eye test or visit us in store. Walk-ins welcome.' },
    viewOnMaps: { ta: 'வரைபடத்தில் பார்க்க', en: 'View on Maps' },
    address: { ta: 'முகவரி', en: 'Address' },
    phone:   { ta: 'தொலைபேசி', en: 'Phone' },
    email:   { ta: 'மின்னஞ்சல்', en: 'Email' },
    hours:   { ta: 'நேரம்', en: 'Hours' },
    addressVal: { ta: 'பூரா மசூதி வணிக வளாகம், ஈத்கா,\n17, ரயில்வே ஸ்டேஷன் ரோடு, ரயில்வே காலனி, அச்சமங்கலம்,\nதிருப்பத்தூர், தமிழ்நாடு 635601', en: 'Poora mosque commercial complex, Eidgah,\n17, Railway Station Road, Railway Colony, Achamangalam,\nTirupathur, Tamil Nadu 635601' },
    phoneVal:   { ta: '+91 99942 06952', en: '+91 99942 06952' },
    hoursVal:   { ta: 'திங்கள்-சனி: 9:30 AM – 8:30 PM\nஞாயிறு: 4:00 PM – 6:00 PM', en: 'Mon–Sat: 9:30 AM – 8:30 PM\nSun: 4:00 PM – 6:00 PM' },
    formTitle:  { ta: 'கண் பரிசோதனைக்கு திட்டமிடுங்கள்', en: 'Schedule an Eye Test' },
    fullName:   { ta: 'முழு பெயர் *', en: 'Full Name *' },
    phoneNumber: { ta: 'தொலைபேசி எண் *', en: 'Phone Number *' },
    namePlaceholder: { ta: 'உங்கள் பெயர்', en: 'Your name' },
    serviceLabel: { ta: 'தேவைப்படும் சேவை', en: 'Service Required' },
    servicePlaceholder: { ta: 'ஒரு சேவையைத் தேர்ந்தெடுக்கவும்', en: 'Select a service' },
    services: {
      eyetest: { ta: 'விரிவான கண் பரிசோதனை', en: 'Comprehensive Eye Test' },
      frames:  { ta: 'பிரேம் தேர்வு', en: 'Frame Selection' },
      contacts: { ta: 'கான்டாக்ட் லென்ஸ் பொருத்துதல்', en: 'Contact Lens Fitting' },
      repair:  { ta: 'பிரேம் பழுதுபார்ப்பு', en: 'Frame Repair' },
      other:   { ta: 'மற்றவை', en: 'Other' },
    },
    messageLabel: { ta: 'செய்தி (விருப்பத்திற்குரியது)', en: 'Message (Optional)' },
    messagePlaceholder: { ta: 'உங்கள் தேவைகளைப் பற்றி எங்களிடம் கூறுங்கள்...', en: 'Tell us about your requirements...' },
    submitBtn: { ta: 'சந்திப்பை பதிவு செய்யவும்', en: 'Book Appointment' },
    noSpam: { ta: 'ஸ்பேம் இல்லை. உங்கள் சந்திப்பை உறுதிப்படுத்த மட்டுமே நாங்கள் உங்களைத் தொடர்புகொள்வோம்.', en: "No spam. We'll only contact you to confirm your appointment." },
    successTitle: { ta: 'சந்திப்பு கோரப்பட்டது', en: 'Appointment Requested' },
    successText: { ta: 'நன்றி! உங்கள் சந்திப்பை உறுதிப்படுத்த 2 மணிநேரத்திற்குள் நாங்கள் உங்களை அழைப்போம்.', en: "Thank you! We'll call you back within 2 hours to confirm your appointment." },
  },
}

export default translations
