---
marp: true
theme: default
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700;800&display=swap');
  
  :root {
    --color-primary: #2D3192;
    --color-secondary: #00ADEF;
    --color-text-dark: #1A202C;
    --color-text-muted: #4A5568;
    --color-bg-light: #F8FAFD;
  }
  
  section {
    background-color: #FFFFFF;
    color: var(--color-text-dark);
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    line-height: 1.5;
    background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='400' cy='0' r='300' fill='%2300ADEF' fill-opacity='0.03'/%3E%3Ccircle cx='400' cy='0' r='200' fill='%232D3192' fill-opacity='0.03'/%3E%3C/svg%3E");
    background-position: top right;
    background-repeat: no-repeat;
    padding: 50px 60px;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Outfit', sans-serif;
    color: var(--color-primary);
  }
  
  h1 { font-size: 56px; font-weight: 700; margin-bottom: 0.2em; }
  h2 { font-size: 28px; font-weight: 600; margin-bottom: 0.8em; position: relative; }
  h2::after { content: ''; position: absolute; bottom: -10px; left: 0; width: 60px; height: 4px; background: var(--color-secondary); border-radius: 2px; }
  h3 { font-size: 24px; margin-bottom: 0.5em; }
  
  .title-slide {
    text-align: center; justify-content: center; background-color: var(--color-bg-light);
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232D3192' stop-opacity='0.05'/%3E%3Cstop offset='100%25' stop-color='%2300ADEF' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E");
  }
  .title-slide h1 { font-size: 70px; margin-bottom: 0; }
  .title-slide h3 { font-size: 28px; color: var(--color-secondary); font-weight: 400; margin-top: 10px; margin-bottom: 30px; }
  .title-slide p { font-size: 18px; color: var(--color-text-muted); }
  
  .divider-slide {
    background-color: var(--color-primary); color: white; justify-content: center; text-align: left; padding-left: 60px;
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='300' fill='%2300ADEF' fill-opacity='0.15' filter='blur(40px)'/%3E%3Ccircle cx='700' cy='500' r='250' fill='%23ffffff' fill-opacity='0.1' filter='blur(50px)'/%3E%3C/svg%3E");
  }
  .divider-slide h1 { color: white; font-size: 64px; border-bottom: none; margin-bottom: 0; line-height: 1.1; }
  .divider-slide p { color: var(--color-secondary); font-size: 32px; font-family: 'Outfit', sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; }
  
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
  .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 15px; }
  .grid-5 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 15px; }
  
  .info-box { background: var(--color-bg-light); padding: 12px; border-radius: 8px; border-left: 3px solid var(--color-secondary); }
  .info-box h3 { font-size: 18px; margin-top: 0; margin-bottom: 5px; }
  .info-box p { font-size: 13px; color: var(--color-text-muted); margin: 0; }
  .info-box ul { font-size: 13px; color: var(--color-text-muted); margin: 0; padding-left: 20px; }
  
  .team-member { margin-bottom: 15px; }
  .team-member h3 { margin-bottom: 2px; font-size: 20px; }
  .team-role { color: var(--color-secondary); font-weight: 500; font-size: 14px; margin-bottom: 6px; font-style: italic; }
  .team-desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }

  .grantee-header { background: var(--color-bg-light); padding: 12px 15px; border-radius: 8px; margin-bottom: 15px; }
  .grantee-header h3 { margin: 0 0 5px 0; font-size: 22px; }
  .grantee-meta { font-size: 13px; color: var(--color-primary); font-weight: 500; margin-bottom: 5px; }
  .grantee-url { font-size: 11px; color: var(--color-text-muted); font-style: italic; margin-top: 2px; }
  .grantee-body { font-size: 14px; color: var(--color-text-dark); margin-bottom: 15px; line-height: 1.4; }
  
  .impact-heading { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 600; color: var(--color-primary); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; border-bottom: 2px solid var(--color-secondary); padding-bottom: 5px; display: inline-block; }

  .impact-box { background: var(--color-primary); color: white; padding: 15px; border-radius: 8px; text-align: center; }
  .impact-box h4 { color: var(--color-secondary); font-size: 24px; margin: 0 0 5px 0; }
  .impact-box p { color: white; font-size: 12px; margin: 0; line-height: 1.2; }
  
  .quote { font-size: 32px; font-family: 'Outfit', sans-serif; color: var(--color-primary); line-height: 1.4; text-align: center; padding: 0 40px; }
---

<!-- _class: title-slide -->

![w:150](images/logo.png)
# RAFT
### Rao Family Trust

**Together Towards Lasting Change**

www.raft.org.in | contact@raft.org.in | linkedin.com/company/rao-family-trust

---

## About Us

The Rao Family Trust (RAFT) offers grants to nonprofits with a rigorous, evidence-based approach focused on measurable, sustainable results. 

As a private trust, RAFT channels its resources in a structured, transparent, and purpose-driven manner to ensure that its philanthropic vision continues to inspire meaningful change for generations.

*We are based in Pune, Maharashtra.*

<div class="grid-2" style="margin-top: 30px;">
  <div class="info-box">
    <h3>Vision</h3>
    <p>A compassionate, equitable, and sustainable world where every individual and ecosystem has the opportunity to thrive.</p>
  </div>
  <div class="info-box">
    <h3>Mission</h3>
    <p>Creating enduring social and ecological impact through strategic, transparent, and intergenerational philanthropy.</p>
  </div>
</div>

---

## OUR APPROACH

Our grantmaking is grounded in trust, simplicity and curiosity. 

Through our grants, we support organisations to respond to community needs and scale proven models and frameworks. We also provide multi-year funding that helps organisations build capacity, strengthen sustainability and create lasting change.

---

## Meet Our Team

<div class="grid-4">
  <div class="team-member">
    <h3>Dr. Priti Rao</h3>
    <div class="team-role">Managing Trustee</div>
    <div class="team-desc">A corporate leader, entrepreneur and philanthropist with a strong background in IT leadership and social enterprise. After senior roles at Infosys and L&T, she founded Pumpkin Patch Daycare to support working mothers, and leads Aatmaja Foundation — focused on empowering girls from disadvantaged backgrounds through STEM education.</div>
  </div>
  
  <div class="team-member">
    <h3>Jay Rao</h3>
    <div class="team-role">Trustee</div>
    <div class="team-desc">Founder of Milestones, with expertise in early childhood development, care and education. Milestones has been associated with over 175 schools and daycare centres, providing guidance, solutions, and world-class equipment, teaching aids and books.</div>
  </div>

  <div class="team-member">
    <h3>Dr. Pooja Rao</h3>
    <div class="team-role">Trustee</div>
    <div class="team-desc">A physician-scientist, entrepreneur and research leader working at the intersection of healthcare, AI and global innovation. Currently a Research Scientist at Google, Amsterdam, leading global AI research, clinical studies and regulatory approvals. She holds a medical degree and a PhD in Neuroscience from the Max Planck Research School, Germany.</div>
  </div>
  
  <div class="team-member">
    <h3>Priyadarshini Gurav</h3>
    <div class="team-role">Trustee</div>
    <div class="team-desc">A dedicated social work professional with over a decade of experience in Medical and Psychiatric Social Work. She is deeply committed to empowering women through development focused workshops and initiatives.</div>
  </div>
</div>

---

## Our Pillars of Giving

<div class="grid-5" style="margin-top: 20px;">
  <div class="info-box" style="padding: 15px;">
    <h3>Education</h3>
    <ul>
      <li>Enable professional education and quality learning for girls ensuring economic independence</li>
      <li>Transform girls into future leaders and changemakers</li>
      <li>Improve educational opportunities in remote communities</li>
    </ul>
  </div>
  <div class="info-box" style="padding: 15px;">
    <h3>Biodiversity & Conservation</h3>
    <ul>
      <li>Protect biodiversity, wildlife habitats, and critical ecosystems</li>
      <li>Support community-led conservation through science-based solutions</li>
      <li>Inspire environmental stewardship for a sustainable future.</li>
    </ul>
  </div>
  <div class="info-box" style="padding: 15px;">
    <h3>Livelihoods</h3>
    <ul>
      <li>Drive women’s economic empowerment</li>
      <li>Build market-relevant skills leading to meaningful careers and higher incomes and entrepreneurship</li>
      <li>Strengthen women’s confidence, leadership in society</li>
    </ul>
  </div>
  <div class="info-box" style="padding: 15px;">
    <h3>Tech for Good</h3>
    <ul>
      <li>Apply technology and innovation to address pressing social challenges</li>
      <li>Accelerate the diffusion of technology to underserved communities</li>
      <li>Support scalable, sustainable solutions that expand access</li>
    </ul>
  </div>
  <div class="info-box" style="padding: 15px;">
    <h3>Disability Inclusion</h3>
    <ul>
      <li>Expand access to education, employment, and services.</li>
      <li>Enable skills, livelihoods, and independence.</li>
      <li>Promote dignity, inclusion, and participation</li>
    </ul>
  </div>
</div>

<p style="text-align: center; margin-top: 20px; font-weight: 600; color: var(--color-primary); font-size: 16px;">
  Geographic Focus: Primarily - Maharashtra, India
</p>

---

<!-- _class: divider-slide -->
![bg right:45%](images/grantee_aatmaja.jpg)

<p>Our Current Projects in</p>

# EDUCATION

---

## ENABLING OUR DAUGHTERS : AATMAJA FOUNDATION

<div class="grantee-header">
  <div class="grantee-meta">Pune | Girls from socioeconomically disadvantaged backgrounds | Grant: 2015 – Ongoing</div>
  <div class="grantee-url">aatmaja.org</div>
</div>

<div class="grantee-body">
Through 4 strategic programs, Aatmaja Foundation builds confidence, life skills and professional capabilities to create empowered and self-reliant women.
</div>

<div class="grid-4" style="margin-bottom: 20px;">
  <div class="info-box" style="padding: 15px;"><h3 style="font-size:16px;">Udaan Program</h3><p style="font-size:13px;">Long-term educational support guiding girls through scholarships, mentorship & skill-building to become independent professionals.</p></div>
  <div class="info-box" style="padding: 15px;"><h3 style="font-size:16px;">Aasha Program</h3><p style="font-size:13px;">Equips girls with job-ready vocational skills across healthcare, technology, hospitality & wellness for faster employment.</p></div>
  <div class="info-box" style="padding: 15px;"><h3 style="font-size:16px;">Girls in STEM</h3><p style="font-size:13px;">Builds girls' confidence and interest in STEM through hands-on workshops, expert talks, mentoring & industry exposure.</p></div>
  <div class="info-box" style="padding: 15px;"><h3 style="font-size:16px;">Multi Skill Foundation Course (MSFC)</h3><p style="font-size:13px;">Practical vocational training across engineering, electrical, plumbing & agriculture — building technical skills & career readiness.</p></div>
</div>

<div class="impact-heading">Impact Snapshot</div>
<div class="grid-5">
  <div class="impact-box"><h4>500+</h4><p>Girls supported</p></div>
  <div class="impact-box"><h4>100+</h4><p>From rural Maharashtra</p></div>
  <div class="impact-box"><h4>120+</h4><p>Employed / entrepreneurs</p></div>
  <div class="impact-box"><h4>98%</h4><p>STEM improvement</p></div>
  <div class="impact-box"><h4>200+</h4><p>Trained under MSFC</p></div>
</div>

---

## CREATING FIRST GENERATION LEARNERS :: AYANG TRUST

<div class="grantee-header">
  <div class="grantee-meta">Majuli, Assam | Children from Mising Tribe, Assam | Grant: 2025 – 2029</div>
  <div class="grantee-url">thehummingbirdschool.in</div>
</div>

<div class="grantee-body">
The Hummingbird School, under Ayang Trust, operates at the intersection of education and resilience in the flood-affected communities of Majuli, which continue to grapple with poor connectivity, fragile infrastructure, and deep-rooted socio-economic challenges. The Hummingbird School has been committed to ensuring access to quality education for these children. The pedagogy and the curriculum of the school deviate from the conventional learning methods, emphasizing experiential learning, inquiry-driven and context-relevant learning. This has allowed the children to connect their education with their lived realities while developing their curiosity, creativity and critical thinking.
</div>

<div class="impact-heading">Impact</div>
<div class="info-box">
  <p style="color: var(--color-text-dark); font-size: 18px; font-weight: 500;">37 students receive continued residential and educational support</p>
</div>

---

<!-- _class: divider-slide -->
![bg right:45%](images/grantee_sahyadri.jpg)

<p>Our Current Projects in</p>

# BIODIVERSITY &<br> CONSERVATION

---

## GUARDIANS OF THE GIANTS :: SAHYADRI SANKALP SOCIETY

<div class="grantee-header">
  <div class="grantee-meta">Ratnagiri | Malabar Pied Hornbill, Great Hornbill, Malabar Grey Hornbill | Grant: 2025 – 2028</div>
  <div class="grantee-url">sahyadrisankalpsociety.org</div>
</div>

<div class="grantee-body">
The Western Ghats is home to three iconic Hornbill species. These birds are critical seed dispersers, shaping forest regeneration and structure. However, their survival is threatened by loss of nesting and fruiting trees, forest degradation and fragmentation and lack of public awareness. The project focuses on a landscape-level conservation approach emphasizing nest protection, habitat restoration and community involvement.
</div>

<div class="impact-heading">Impact</div>
<div class="grid-5" style="margin-top: 10px;">
  <div class="impact-box"><h4>102</h4><p>Nest sites identified</p></div>
  <div class="impact-box"><h4>61</h4><p>Active nests documented</p></div>
  <div class="impact-box"><h4>100+</h4><p>Monitored by community</p></div>
  <div class="impact-box"><h4>5500+</h4><p>Seeds collected</p></div>
  <div class="impact-box"><h4>4000+</h4><p>Seeds sown in a nursery</p></div>
</div>

---

## CATAPULTS TO CAMERAS :: HUMAN & ENVIRONMENT ALLIANCE LEAGUE

<div class="grantee-header">
  <div class="grantee-meta">Jhargram, West Bengal | Boys from Hunting Communities & Wildlife | 2026 – 2027</div>
  <div class="grantee-url">healearth.in</div>
</div>

<div class="grantee-body">
In Southern West Bengal, over 40 mass hunting festivals are documented annually across seven districts — drawing up to 20,000 armed participants and killing thousands of wild animals in a single day. These are not subsistence hunts. They are organised bloodsport.

In these villages, boys are handed catapults as young as age three. By adolescence, participation in mass hunts is a rite of masculinity and belonging. The solution starts with children. When boys in these communities are given cameras, mentorship, and recognition, their relationship with nature shifts fundamentally.

Catapults to Cameras — a critically acclaimed documentary by wildlife filmmaker Ashwika Kapur and HEAL's field team — followed five adolescent boys who voluntarily gave up their catapults and became wildlife enthusiasts and conservation ambassadors. The film earned international recognition, turning a grassroots experiment into a global conversation. This project scales that model.
</div>

<div class="impact-heading">Expected Impact</div>
<div class="grid-5" style="margin-top: 10px;">
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Mobile Field Library</h3><p style="font-size:12px;">To travel across 12 villages with wildlife films, binoculars & more</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">12 children</h3><p style="font-size:12px;">To receive training in photography and wildlife observation</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Kids’ Nature Clubs</h3><p style="font-size:12px;">Village-level conservation clubs to be formed</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Nature Learning</h3><p style="font-size:12px;">Workshops and screening to be conducted in hunting villages</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">District-Level Exhibition</h3><p style="font-size:12px;">To be held for public recognition from local leaders & officials for the 12 children</p></div>
</div>

---

<!-- _class: divider-slide -->
![bg right:45%](images/home_banner_girls.jpg)

<p>Our Current Projects in</p>

# LIVELIHOODS

---

## CLIMATE SMART AGRICULTURE :: MANNDESHI

<div class="grantee-header">
  <div class="grantee-meta">Satara, Sangli, Solapur, Pune district, Maharashtra | Women farmers | 2026 – 2027</div>
  <div class="grantee-url">manndeshifoundation.org</div>
</div>

<div class="grantee-body">
Farmers have largely relied on traditional practices, even though agriculture is a highly technical and scientific field. By focusing on soil, we intervene at the very beginning of the crop cycle, where the foundation of productivity is set.

The project aims to strengthen the capacity and resilience of 1,500 farmers by improving soil health knowledge, introducing climate-smart agricultural practices, and increasing access to emerging agricultural technologies. Through soil testing services, advanced courses on horticulture farming and knowledge sessions on agri-tech, artificial intelligence in agriculture, climate literacy, and scientific farming methods, the project will equip farmers with the tools and information needed to make data-driven decisions.
</div>

<div class="impact-heading">Expected Impact</div>
<div class="grid-5" style="margin-top: 10px;">
  <div class="impact-box"><h4>1500</h4><p>women farmers Total beneficiary count</p></div>
  <div class="impact-box"><h4>1200</h4><p>To be trained in scientific agricultural, climate literacy and AI</p></div>
  <div class="impact-box"><h4>250</h4><p>Will be provided with soil testing</p></div>
  <div class="impact-box"><h4>50</h4><p>To be trained in advanced horticulture farming</p></div>
  <div class="impact-box"><h4>6</h4><p>Exposure Visits To learn best practices and meet other farmers</p></div>
</div>

---

## ROOTS SHASHWAT VIKAS KENDRA :: GOKHALE INSTITUTE OF POLITICS & ECONOMICS

<div class="grantee-header">
  <div class="grantee-meta">Mahad Taluka in Raigad district, Maharashtra | Tribal & marginalized communities | 2026 – 2027</div>
  <div class="grantee-url">gipe.ac.in</div>
</div>

<div class="grantee-body">
Mahad Taluka in Raigad district faces four compounding challenges:
1. Socio-Economic Vulnerability: Small farmers and landless labourers remain largely excluded from the formal economy
2. Ecological Degradation: Biodiversity loss and erosion of traditional ecological knowledge
3. Climate & Resource Stress: Growing water insecurity and soil degradation, worsened by poor waste management and inefficient agricultural practices
4. Institutional Gaps: Local Gram Panchayats lack the technical capacity to implement key mandates

The Shashwat Vikas Kendra will serve as a localised hub addressing these challenges across three pillars: Natural Resource Management, Livelihood Security and Village-level Governance
</div>

<div class="impact-heading">Expected Impact</div>
<div class="grid-5" style="margin-top: 10px;">
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Livelihoods</h3><p style="font-size:12px;">Reduced migration; alternate livelihoods</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Environment</h3><p style="font-size:12px;">Legal protection of bio-resources and traditional knowledge</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Waste/Water</h3><p style="font-size:12px;">Improved public health and groundwater levels.</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Governance</h3><p style="font-size:12px;">Decentralized, data-driven local governance.</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Women Empowerment</h3><p style="font-size:12px;">Shift from passive beneficiaries to active participation.</p></div>
</div>

---

<!-- _class: divider-slide -->
![bg right:45%](images/home_banner_venture.jpg)

<p>Our Current Projects in</p>

# TECHNOLOGY

---

## PREVENTION OF AVOIDABLE BLINDNESS :: SHANTILAL SHANGHVI EYE INSTITUTE

<div class="grantee-header">
  <div class="grantee-meta">M/E Ward, Mumbai, Maharashtra | Residents | 2026 – 2027</div>
  <div class="grantee-url">ssei.care/</div>
</div>

<div class="grantee-body">
Maharashtra's rate of blindness and visual impairment exceeds the national average. In Mumbai's M/E ward, one of the city's most densely populated slums, nearly 2% of residents are blind and 13% live with visual impairment, yet 66% of that blindness and 84% of that impairment is treatable.

The program takes a pocket-based approach, bringing awareness, community engagement and screening directly into neighborhoods, with at least six months of follow-up to build lasting eye-health habits. ’Sakhis’, women from the community are trained on two cutting-edge portable tools: Remidio's split lamp for a thorough anterior eye exam, and a handheld fundus camera that delivers high-quality retinal screening in under a minute.

The goal is to screen and treat preventable causes of blindness — cataract, uncorrected refractive error, glaucoma, and diabetic retinopathy, while building a sustainable model through links to existing government schemes and strengthening the community's long-term access to and habits around eye care.
</div>

<div class="impact-heading">Expected Impact</div>
<div class="grid-5" style="margin-top: 10px;">
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:16px;">45,000+</h3><p style="font-size:12px;">Residents to receive free eye screening</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:16px;">25%</h3><p style="font-size:12px;">Of screenings expected to require evaluation for vision disorders</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:16px;">250</h3><p style="font-size:12px;">Expected to require surgery for cataract and glaucoma</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:16px;">1000</h3><p style="font-size:12px;">Individuals are expected to require spectacles for refractive correction</p></div>
  <div class="info-box" style="padding: 10px;"><h3 style="font-size:14px;">Diabetic Retinopathy</h3><p style="font-size:12px;">Screening will flag need for advanced care before vision loss becomes permanent</p></div>
</div>

---

<!-- _class: title-slide -->

<div class="quote">
"Philanthropy can catalyze systemic change, fostering equity, equality, and resilience across communities, ecosystems, and our shared future. <br><br>I encourage you to use your voice, influence, and resources to help shape a more equitable and resilient future."
</div>

---

<!-- _class: title-slide -->

# Get in Touch

<div style="margin-top: 50px;">
  <p style="font-size: 32px; margin-bottom: 20px;"><strong>contact@raft.org.in</strong></p>
  <p style="font-size: 32px; margin-bottom: 20px;"><strong>www.raft.org.in</strong></p>
  <p style="font-size: 32px;"><strong>linkedin.com/company/rao-family-trust</strong></p>
</div>
