const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const data = {

    "nt-scan": {
        category: "NT Scan",
        title: "Nuchal Translucency (NT) Scan",
        lead: "Early, accurate first-trimester screening to assess your baby's chromosomal health with advanced ultrasound imaging.",
        img: "assets/img/health/neurology-2.webp",
        stat1: { number: "11–14", label: "Weeks Scan Window" },
        stat2: { number: "99%+", label: "Detection Accuracy" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our NT Scan",
        overviewText: "At Meera 4D Scans, our NT scans are performed by experienced sonologists using high-resolution ultrasound technology — delivering accurate measurements, clear results, and compassionate care for every mother and baby.",
        details: [
            { icon: "bi bi-activity", heading: "Nuchal Translucency Measurement", text: "Precise measurement of fluid at the back of your baby's neck to assess chromosomal abnormality risk." },
            { icon: "bi bi-diagram-2", heading: "First Trimester Screening", text: "Comprehensive early pregnancy assessment combining ultrasound imaging and maternal blood tests." },
            { icon: "bi bi-prescription2", heading: "Chromosomal Risk Assessment", text: "Accurate evaluation of Down syndrome and other chromosomal condition risks for early informed decisions." }
        ],
        tags: ["Down Syndrome Risk", "Chromosomal Screening", "First Trimester", "Trisomy 21", "Trisomy 18", "Nasal Bone Assessment"]
    },

    "3d-4d-scan": {
        category: "3D / 4D Scan",
        title: "3D & 4D Baby Scan",
        lead: "Real-time 3D and 4D imaging to see your baby's face, movements, and expressions before birth.",
        img: "assets/img/health/pediatrics-4.webp",
        stat1: { number: "24–32", label: "Weeks Ideal Window" },
        stat2: { number: "4D", label: "Live Motion View" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our 3D/4D Scan",
        overviewText: "Experience the joy of seeing your baby up close with our state-of-the-art 3D/4D ultrasound. Our expert sonologists ensure the best imaging quality for a truly special bonding moment.",
        details: [
            { icon: "bi bi-camera-video", heading: "Real-Time 4D Imaging", text: "Watch your baby move, yawn, and smile in real-time with our advanced 4D ultrasound technology." },
            { icon: "bi bi-person-hearts", heading: "Bonding Experience", text: "A memorable keepsake experience with printed photos and video recordings of your baby." },
            { icon: "bi bi-shield-check", heading: "Detailed Facial Features", text: "Crystal-clear imaging of your baby's face, hands, and body for an unforgettable first look." }
        ],
        tags: ["Facial Features", "Baby Movements", "Keepsake Photos", "Video Recording", "Bonding Session", "Live Imaging"]
    },

    "ultrasound": {
        category: "Ultrasound",
        title: "Ultrasound Imaging",
        lead: "High-resolution diagnostic ultrasound scans providing clear, detailed views for accurate patient assessment.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "HD", label: "Image Quality" },
        stat2: { number: "Fast", label: "Same Day Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Ultrasound Service",
        overviewText: "Our advanced ultrasound technology and experienced team deliver precise diagnostic imaging with clear results and compassionate patient care.",
        details: [
            { icon: "bi bi-activity", heading: "Diagnostic Imaging", text: "High-resolution scans for clear visualization of internal structures and organs." },
            { icon: "bi bi-heart-pulse", heading: "Pregnancy Monitoring", text: "Routine and detailed pregnancy scans to monitor baby's health at every stage." },
            { icon: "bi bi-clipboard2-pulse", heading: "Abdominal Scanning", text: "Comprehensive abdominal ultrasound for liver, kidney, gallbladder evaluation." }
        ],
        tags: ["Abdominal Scan", "Pelvic Scan", "Thyroid Scan", "Breast Scan", "Obstetric Scan", "Musculoskeletal"]
    },

    "anomaly-scan": {
        category: "Anomaly Scan",
        title: "Anomaly / TIFFA Scan",
        lead: "Detailed mid-pregnancy scan examining your baby's organs, structure, and development to detect abnormalities early.",
        img: "assets/img/health/neurology-3.webp",
        stat1: { number: "18–22", label: "Weeks Scan Window" },
        stat2: { number: "TIFFA", label: "Certified Protocol" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Anomaly Scan",
        overviewText: "Our TIFFA-certified sonologists perform meticulous fetal surveys to detect structural abnormalities early, giving you the information needed for the best care.",
        details: [
            { icon: "bi bi-search", heading: "Structural Anomaly Detection", text: "Thorough examination of the baby's brain, heart, spine, limbs, and all major organs." },
            { icon: "bi bi-heart", heading: "Fetal Heart Assessment", text: "Detailed four-chamber heart view to screen for cardiac defects and abnormalities." },
            { icon: "bi bi-body-text", heading: "Full Fetal Survey", text: "Complete top-to-toe evaluation of your baby's anatomy at 18–22 weeks of pregnancy." }
        ],
        tags: ["Neural Tube Defects", "Cardiac Defects", "Cleft Lip", "Skeletal Anomalies", "Organ Development", "Placenta Position"]
    },

    "doppler-scan": {
        category: "Doppler Scan",
        title: "Doppler Scan",
        lead: "Precise blood flow monitoring through the umbilical cord and placenta to ensure your baby's growth and well-being.",
        img: "assets/img/health/orthopedics-1.webp",
        stat1: { number: "Color", label: "Doppler Imaging" },
        stat2: { number: "Real-Time", label: "Blood Flow Data" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Doppler Scan",
        overviewText: "Our Doppler scans provide critical insights into your baby's circulation and placental health, helping doctors detect growth restriction and fetal distress at the earliest stage.",
        details: [
            { icon: "bi bi-broadcast", heading: "Umbilical Cord Flow", text: "Measures blood flow through the umbilical cord to assess nutrient and oxygen delivery to the baby." },
            { icon: "bi bi-diagram-3", heading: "Placental Assessment", text: "Evaluates placental function and identifies any resistance that may affect fetal growth." },
            { icon: "bi bi-graph-up", heading: "Fetal Well-Being Check", text: "Detects signs of fetal distress early to allow timely medical intervention when needed." }
        ],
        tags: ["Umbilical Artery", "Middle Cerebral Artery", "Placental Function", "Growth Restriction", "Fetal Distress", "Uterine Artery"]
    },

    "fetal-growth": {
        category: "Fetal Growth",
        title: "Fetal Growth Scan",
        lead: "Regular detailed scans to monitor your baby's growth, weight, position, and overall development throughout pregnancy.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Serial", label: "Growth Tracking" },
        stat2: { number: "±10%", label: "Weight Accuracy" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Fetal Growth Scan",
        overviewText: "Our growth scans track your baby's development with precision, ensuring any concerns are detected early and managed appropriately for a healthy pregnancy outcome.",
        details: [
            { icon: "bi bi-rulers", heading: "Growth Measurement", text: "Accurate biometric measurements of head, abdomen, and femur to estimate fetal weight." },
            { icon: "bi bi-geo-alt", heading: "Baby Position Check", text: "Assessment of baby's position, presentation, and lie for delivery planning." },
            { icon: "bi bi-droplet-half", heading: "Amniotic Fluid Assessment", text: "Measurement of amniotic fluid levels to ensure a healthy environment for baby's development." }
        ],
        tags: ["Biparietal Diameter", "Femur Length", "Abdominal Circumference", "Estimated Fetal Weight", "Fluid Levels", "Placenta Grading"]
    },

    "ecg-holter": {
        category: "ECG & Holter",
        title: "ECG & Holter Monitoring",
        lead: "Continuous heart rhythm monitoring to detect arrhythmias, palpitations, and irregular heartbeat patterns.",
        img: "assets/img/health/laboratory-3.webp",
        stat1: { number: "24–48h", label: "Monitoring Duration" },
        stat2: { number: "12-Lead", label: "ECG Coverage" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our ECG & Holter Service",
        overviewText: "Our cardiac monitoring services provide accurate, detailed heart rhythm analysis with quick turnaround, helping doctors make timely and informed treatment decisions.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "12-Lead ECG", text: "Standard resting electrocardiogram to assess heart rhythm, rate, and electrical activity." },
            { icon: "bi bi-clock-history", heading: "24–48 Hour Holter", text: "Ambulatory ECG monitoring over 24 to 48 hours to capture intermittent arrhythmias." },
            { icon: "bi bi-graph-up-arrow", heading: "Arrhythmia Detection", text: "Comprehensive analysis of heart rhythm irregularities including atrial fibrillation and ectopics." }
        ],
        tags: ["Atrial Fibrillation", "Palpitations", "Bradycardia", "Tachycardia", "Syncope Evaluation", "Pre-Op Screening"]
    },

    "prenatal-screening": {
        category: "Prenatal Screening",
        title: "Prenatal Screening",
        lead: "Specialised laboratory tests during pregnancy to screen for chromosomal conditions and assess maternal health.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Combined", label: "Screening Protocol" },
        stat2: { number: "Early", label: "Risk Detection" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Prenatal Screening",
        overviewText: "Our prenatal screening integrates blood biomarkers with ultrasound findings to deliver accurate, personalised chromosomal risk assessments for every mother.",
        details: [
            { icon: "bi bi-droplet", heading: "Maternal Blood Tests", text: "Serum markers including PAPP-A and beta-hCG for first trimester combined screening." },
            { icon: "bi bi-virus", heading: "Chromosomal Risk Profiling", text: "Combined risk assessment for Down syndrome, Trisomy 18, and Trisomy 13." },
            { icon: "bi bi-clipboard-data", heading: "NIPT / NIPS Support", text: "Guidance and referral for non-invasive prenatal testing for high-risk pregnancies." }
        ],
        tags: ["Down Syndrome", "Trisomy 18", "Trisomy 13", "PAPP-A", "Beta-hCG", "NIPT Referral"]
    },

    "blood-tests": {
        category: "Blood Tests",
        title: "Blood Tests",
        lead: "Comprehensive blood analysis including CBC, blood sugar, and cholesterol level testing.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Same Day", label: "Results Available" },
        stat2: { number: "Wide", label: "Test Panel Range" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Blood Test Service",
        overviewText: "Our certified lab delivers fast, accurate blood test results with a wide range of panels — from routine health checks to specialised pregnancy and cardiac markers.",
        details: [
            { icon: "bi bi-droplet-fill", heading: "Complete Blood Count", text: "Full haematology panel assessing red cells, white cells, haemoglobin, and platelets." },
            { icon: "bi bi-thermometer-half", heading: "Blood Sugar Testing", text: "Fasting glucose, post-prandial, and HbA1c tests for diabetes screening and monitoring." },
            { icon: "bi bi-heart", heading: "Lipid Profile", text: "Total cholesterol, LDL, HDL, and triglyceride levels for cardiovascular risk assessment." }
        ],
        tags: ["CBC", "Blood Sugar", "Lipid Profile", "Thyroid Function", "Liver Function", "Kidney Function"]
    }

};

// ── Render Function ──────────────────────────────────────────────────────────
function renderPage(d) {

    // Header
    document.getElementById("svc-category").innerText = d.category;
    document.getElementById("svc-title").innerText = d.title;
    document.getElementById("svc-lead").innerText = d.lead;

    // Image
    document.getElementById("svc-image").src = d.img;
    document.getElementById("svc-image").alt = d.title;

    // Stats
    document.getElementById("stat1-number").innerText = d.stat1.number;
    document.getElementById("stat1-label").innerText = d.stat1.label;
    document.getElementById("stat2-number").innerText = d.stat2.number;
    document.getElementById("stat2-label").innerText = d.stat2.label;

    document.getElementById("svc-overview-img").src = d.overviewImg;

    // Detail items
    const detailsEl = document.getElementById("svc-details");
    detailsEl.innerHTML = d.details.map(item => `
    <div class="detail-item">
      <div class="icon-wrapper"><i class="${item.icon}"></i></div>
      <div class="content">
        <h4>${item.heading}</h4>
        <p>${item.text}</p>
      </div>
    </div>
  `).join("");

    // Overview
    document.getElementById("svc-overview-title").innerText = d.overviewTitle;
    document.getElementById("svc-overview-text").innerText = d.overviewText;
    document.getElementById("svc-overview-img").alt = d.title;


    // Tags
    const tagsEl = document.getElementById("svc-tags");
    tagsEl.innerHTML = d.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

// ── Init ─────────────────────────────────────────────────────────────────────
if (data[service]) {
    renderPage(data[service]);
} else {
    document.getElementById("svc-title").innerText = "Service Not Found";
}