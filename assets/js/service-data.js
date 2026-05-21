const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const data = {

    // ══════════════════════════════════════════════
    // 1. ANTENATAL SCANS
    // ══════════════════════════════════════════════

    "early-pregnancy-scan": {
        category: "Antenatal Scans",
        title: "Early Pregnancy (Dating) Scan",
        lead: "Confirms your pregnancy, establishes your due date, and checks the baby's heartbeat in the first trimester.",
        img: "assets/img/newService/Antenatal.webp",
        stat1: { number: "6–10", label: "Weeks Scan Window" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Early Pregnancy Scan",
        overviewText: "At Meera 4D Scans Madurai, our early pregnancy scans confirm your pregnancy with precision — establishing an accurate due date and detecting fetal heartbeat from as early as 6 weeks.",
        details: [
            { icon: "bi bi-calendar-heart", heading: "Due Date Confirmation", text: "Accurate gestational age calculation and estimated due date based on fetal measurements." },
            { icon: "bi bi-heart-pulse", heading: "Fetal Heartbeat Detection", text: "Confirms the presence of a healthy fetal heartbeat from as early as 6 weeks." },
            { icon: "bi bi-diagram-2", heading: "Number of Fetuses", text: "Identifies single or multiple pregnancies and assesses early placental position." }
        ],
        tags: ["Dating Scan", "Due Date", "Fetal Heartbeat", "6–10 Weeks", "Early Pregnancy", "Gestational Age"]
    },

    "nt-scan": {
        category: "Antenatal Scans",
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

    "early-anomaly-scan": {
        category: "Antenatal Scans",
        title: "Early Anomaly Scan",
        lead: "An early structural assessment performed between 14 and 18 weeks to detect major fetal anomalies before the standard TIFFA scan.",
        img: "assets/img/health/neurology-3.webp",
        stat1: { number: "14–18", label: "Weeks Scan Window" },
        stat2: { number: "Early", label: "Detection" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Early Anomaly Scan",
        overviewText: "The early anomaly scan at Meera 4D Scans Madurai provides an important structural review before the standard TIFFA, allowing earlier detection of major fetal abnormalities.",
        details: [
            { icon: "bi bi-search", heading: "Early Structural Review", text: "Assessment of major fetal structures including brain, spine, heart, and limbs at 14–18 weeks." },
            { icon: "bi bi-heart", heading: "Cardiac Screening", text: "Early assessment of the fetal heart for major structural defects detectable at this stage." },
            { icon: "bi bi-person-check", heading: "Fetal Well-Being", text: "Assessment of fetal movements, amniotic fluid, and placental position at the early stage." }
        ],
        tags: ["Early Detection", "14–18 Weeks", "Fetal Structure", "Brain Assessment", "Cardiac Screening", "Anomaly Scan"]
    },

    "anomaly-scan": {
        category: "Antenatal Scans",
        title: "TIFFA / Target Scan / Anomaly Scan",
        lead: "The gold-standard mid-pregnancy scan examining your baby's organs, structure, and development in detail to detect abnormalities early.",
        img: "assets/img/health/neurology-3.webp",
        stat1: { number: "18–22", label: "Weeks Scan Window" },
        stat2: { number: "TIFFA", label: "Certified Protocol" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our TIFFA / Anomaly Scan",
        overviewText: "Our TIFFA-certified sonologists perform a meticulous fetal survey covering all major organ systems — giving you and your doctor the most complete picture of your baby's development.",
        details: [
            { icon: "bi bi-search", heading: "Full Fetal Structural Survey", text: "Thorough examination of the baby's brain, heart, spine, limbs, kidneys, and all major organs." },
            { icon: "bi bi-heart", heading: "Fetal Heart Assessment", text: "Detailed four-chamber heart view to screen for cardiac defects and structural abnormalities." },
            { icon: "bi bi-body-text", heading: "Placenta & Fluid Assessment", text: "Evaluation of placental position, grade, and amniotic fluid levels around your baby." }
        ],
        tags: ["Neural Tube Defects", "Cardiac Defects", "Cleft Lip", "Skeletal Anomalies", "Organ Development", "Placenta Position"]
    },

    "fetal-echo": {
        category: "Antenatal Scans",
        title: "Fetal Echocardiography",
        lead: "A specialised detailed scan of your baby's heart — examining all chambers, valves, and blood flow for early cardiac assessment.",
        img: "assets/img/Scan/fetal.webp",
        stat1: { number: "18–24", label: "Weeks Scan Window" },
        stat2: { number: "Cardiac", label: "Specialist Scan" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Fetal Echo",
        overviewText: "At Meera 4D Scans Madurai, fetal echocardiography is performed by experienced sonologists using advanced cardiac ultrasound — providing early, accurate assessment of your baby's heart.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "Four Chamber Heart View", text: "Detailed examination of all four heart chambers, valves, and septal walls for structural abnormalities." },
            { icon: "bi bi-broadcast", heading: "Cardiac Blood Flow", text: "Colour Doppler assessment of blood flow direction and velocity through the fetal heart." },
            { icon: "bi bi-activity", heading: "Heart Rhythm Assessment", text: "Evaluation of fetal heart rate and rhythm to detect any cardiac arrhythmias before birth." }
        ],
        tags: ["Congenital Heart Defect", "Four Chamber View", "Cardiac Doppler", "Heart Rhythm", "Fetal Heart", "18–24 Weeks"]
    },

    "fetal-growth": {
        category: "Antenatal Scans",
        title: "Growth Scan / BPP",
        lead: "Regular detailed scans to monitor your baby's growth, weight, position, amniotic fluid, and biophysical profile throughout pregnancy.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Serial", label: "Growth Tracking" },
        stat2: { number: "BPP", label: "Biophysical Profile" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Growth Scan / BPP",
        overviewText: "Our growth scans track your baby's development with precision. The Biophysical Profile (BPP) provides a comprehensive assessment of fetal well-being — ensuring any concerns are detected and managed early.",
        details: [
            { icon: "bi bi-rulers", heading: "Growth Biometry", text: "Accurate measurement of head circumference, abdominal circumference, and femur length to estimate fetal weight." },
            { icon: "bi bi-droplet-half", heading: "Amniotic Fluid & BPP", text: "Assessment of amniotic fluid index and biophysical profile score for fetal well-being evaluation." },
            { icon: "bi bi-geo-alt", heading: "Baby Position & Presentation", text: "Assessment of baby's lie, presentation, and position for delivery planning." }
        ],
        tags: ["BPP Score", "Fetal Weight Estimate", "Amniotic Fluid", "Growth Restriction", "Presentation", "Fetal Well-Being"]
    },

    "doppler-scan": {
        category: "Antenatal Scans",
        title: "Doppler Scan",
        lead: "Precise blood flow monitoring through the umbilical cord and placenta to ensure your baby's growth and well-being.",
        img: "assets/img/health/orthopedics-1.webp",
        stat1: { number: "Color", label: "Doppler Imaging" },
        stat2: { number: "Real-Time", label: "Blood Flow Data" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Doppler Scan",
        overviewText: "Our Doppler scans provide critical insights into your baby's circulation and placental health — helping doctors detect growth restriction and fetal distress at the earliest possible stage.",
        details: [
            { icon: "bi bi-broadcast", heading: "Umbilical Cord Flow", text: "Measures blood flow through the umbilical artery to assess nutrient and oxygen delivery to the baby." },
            { icon: "bi bi-diagram-3", heading: "Placental Assessment", text: "Evaluates placental function and identifies any resistance that may affect fetal growth." },
            { icon: "bi bi-graph-up", heading: "Middle Cerebral Artery", text: "MCA Doppler to assess fetal brain blood flow and detect early signs of fetal compromise." }
        ],
        tags: ["Umbilical Artery", "Middle Cerebral Artery", "Placental Function", "Growth Restriction", "Fetal Distress", "Uterine Artery"]
    },

    "3d-4d-scan": {
        category: "Antenatal Scans",
        title: "3D / 4D Ultrasound Scan",
        lead: "Real-time 3D and 4D imaging to see your baby's face, movements, and expressions — a truly unforgettable bonding experience before birth.",
        img: "assets/img/health/pediatrics-4.webp",
        stat1: { number: "26–32", label: "Best Weeks" },
        stat2: { number: "4D", label: "Live Motion View" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our 3D / 4D Scan",
        overviewText: "Experience the joy of seeing your baby up close with our state-of-the-art 3D/4D ultrasound at Meera 4D Scans Madurai. Our expert sonologists ensure the best imaging quality for a truly special bonding moment.",
        details: [
            { icon: "bi bi-camera-video", heading: "Real-Time 4D Imaging", text: "Watch your baby move, yawn, and smile in real-time with our advanced 4D ultrasound technology." },
            { icon: "bi bi-person-hearts", heading: "Bonding Experience", text: "A memorable keepsake experience with printed photos and video recordings of your baby." },
            { icon: "bi bi-shield-check", heading: "Detailed Facial Features", text: "Crystal-clear imaging of your baby's face, hands, and body for an unforgettable first look." }
        ],
        tags: ["Facial Features", "Baby Movements", "Keepsake Photos", "Video Recording", "Bonding Session", "Live Imaging"]
    },

    // ══════════════════════════════════════════════
    // 2. WOMEN'S IMAGING
    // ══════════════════════════════════════════════

    "breast-scan": {
        category: "Women's Imaging",
        title: "Breast Scan / USG Mammogram",
        lead: "High-resolution ultrasound examination of the breast for detection of lumps, cysts, and early-stage breast conditions.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "No", label: "Radiation" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Breast Scan",
        overviewText: "At Meera 4D Scans Madurai, our breast ultrasound provides a safe, radiation-free assessment of breast tissue — ideal for younger women, dense breasts, and as a complement to mammography.",
        details: [
            { icon: "bi bi-search", heading: "Lump & Mass Assessment", text: "Characterises breast lumps as solid, cystic, or complex — guiding the next steps in management." },
            { icon: "bi bi-shield-check", heading: "Safe & Radiation-Free", text: "Ultrasound uses sound waves only — completely safe with no radiation exposure." },
            { icon: "bi bi-broadcast", heading: "Doppler Blood Flow", text: "Colour Doppler assessment of vascularity within breast lesions for accurate characterisation." }
        ],
        tags: ["Breast Lump", "Breast Cyst", "Fibroadenoma", "Dense Breast", "Breast Screening", "USG Mammogram"]
    },

    "thyroid-scan": {
        category: "Women's Imaging",
        title: "Thyroid Scan",
        lead: "Detailed ultrasound assessment of the thyroid gland — evaluating size, structure, nodules, and blood flow.",
        img: "assets/img/Scan/thyroid.webp",
        stat1: { number: "15–30", label: "Minutes Duration" },
        stat2: { number: "No Fasting", label: "Required" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Thyroid Scan",
        overviewText: "Our experienced sonologists at Meera 4D Scans Madurai perform thorough thyroid ultrasound assessments — providing accurate nodule characterisation, size measurement, and Doppler blood flow evaluation.",
        details: [
            { icon: "bi bi-search", heading: "Nodule Assessment", text: "Detailed characterisation of thyroid nodules — size, echogenicity, vascularity, and suspicious features." },
            { icon: "bi bi-rulers", heading: "Gland Size & Volume", text: "Measurement of thyroid lobe dimensions and total gland volume for clinical reference." },
            { icon: "bi bi-broadcast", heading: "Colour Doppler Assessment", text: "Doppler evaluation of thyroid blood flow to assess vascularity and support diagnosis." }
        ],
        tags: ["Thyroid Nodule", "Goitre", "Hashimoto's", "Thyroid Cancer Screening", "Colour Doppler", "Same Day Results"]
    },

    "pelvis-scan": {
        category: "Women's Imaging",
        title: "Pelvis Scan",
        lead: "Comprehensive ultrasound examination of the female pelvis — evaluating the uterus, ovaries, and surrounding structures.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Trans-", label: "abdominal & vaginal" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Pelvis Scan",
        overviewText: "Our pelvic ultrasound at Meera 4D Scans Madurai provides a thorough, detailed assessment of the uterus and ovaries — supporting diagnosis of a wide range of gynaecological conditions.",
        details: [
            { icon: "bi bi-search", heading: "Uterine Assessment", text: "Evaluation of uterine size, shape, endometrial thickness, and detection of fibroids or polyps." },
            { icon: "bi bi-circle", heading: "Ovarian Assessment", text: "Assessment of ovarian size, follicle count, cysts, and detection of PCOS features." },
            { icon: "bi bi-heart", heading: "Endometrial Thickness", text: "Measurement of endometrial lining thickness relevant to fertility and gynaecological health." }
        ],
        tags: ["Pelvic Scan", "Uterus", "Ovaries", "Endometrium", "PCOS", "Fibroids", "Ovarian Cyst"]
    },

    "sonosalpingogram": {
        category: "Women's Imaging",
        title: "Sonosalpingogram (SSG)",
        lead: "An ultrasound-guided procedure to assess the patency (openness) of the fallopian tubes — an important fertility investigation.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Fertility", label: "Investigation" },
        stat2: { number: "Tubal", label: "Patency Test" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Sonosalpingogram",
        overviewText: "At Meera 4D Scans Madurai, our sonosalpingogram is performed with precision and care — providing a minimally invasive assessment of tubal patency to support your fertility journey.",
        details: [
            { icon: "bi bi-search", heading: "Tubal Patency Assessment", text: "Ultrasound-guided saline instillation to assess whether the fallopian tubes are open or blocked." },
            { icon: "bi bi-heart", heading: "Fertility Investigation", text: "An important test for women investigating infertility, recurrent miscarriage, or prior to IVF." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A safe, minimally invasive procedure performed under ultrasound guidance with minimal discomfort." }
        ],
        tags: ["Tubal Patency", "Fallopian Tubes", "Infertility", "IVF Investigation", "SSG", "Fertility Test"]
    },

    "fibroid-mapping": {
        category: "Women's Imaging",
        title: "Fibroid Mapping",
        lead: "Detailed ultrasound mapping of uterine fibroids — assessing number, size, location, and relationship to the uterine cavity.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Detailed", label: "Fibroid Mapping" },
        stat2: { number: "Pre-Op", label: "Planning Aid" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Fibroid Mapping",
        overviewText: "Our fibroid mapping service at Meera 4D Scans Madurai provides a comprehensive, precise assessment of uterine fibroids — essential for surgical planning and fertility management.",
        details: [
            { icon: "bi bi-rulers", heading: "Size & Number Assessment", text: "Precise measurement of each fibroid — size, location, and number for complete documentation." },
            { icon: "bi bi-geo-alt", heading: "Location Classification", text: "Classification of fibroids as submucosal, intramural, or subserosal — critical for surgical planning." },
            { icon: "bi bi-broadcast", heading: "Vascularity Assessment", text: "Colour Doppler assessment of blood flow within fibroids to support treatment decisions." }
        ],
        tags: ["Uterine Fibroids", "Submucosal", "Intramural", "Subserosal", "Pre-Op Planning", "Fibroid Size"]
    },

    // ══════════════════════════════════════════════
    // 3. WHOLE ABDOMEN
    // ══════════════════════════════════════════════

    "whole-abdomen": {
        category: "Abdominal Imaging",
        title: "Whole Abdomen Ultrasound",
        lead: "A comprehensive ultrasound examination of all abdominal organs — liver, gallbladder, pancreas, spleen, kidneys, and bladder.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "All", label: "Abdominal Organs" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Whole Abdomen Scan",
        overviewText: "At Meera 4D Scans Madurai, our whole abdomen ultrasound provides a thorough, high-resolution assessment of all abdominal organs — delivering accurate diagnostic information with same-day results.",
        details: [
            { icon: "bi bi-search", heading: "Liver & Biliary System", text: "Assessment of liver size, echogenicity, gallbladder, bile ducts, and detection of gallstones or fatty liver." },
            { icon: "bi bi-activity", heading: "Kidneys & Urinary Tract", text: "Evaluation of kidney size, cortical echogenicity, collecting system, and bladder for urological conditions." },
            { icon: "bi bi-clipboard2-pulse", heading: "Pancreas & Spleen", text: "Assessment of pancreas echogenicity and spleen size — important for metabolic and haematological conditions." }
        ],
        tags: ["Liver", "Gallbladder", "Gallstones", "Kidney", "Pancreas", "Spleen", "Fatty Liver", "Abdominal Pain"]
    },

    // ══════════════════════════════════════════════
    // 4. USG - LOCAL PARTS
    // ══════════════════════════════════════════════

    "usg-local-parts": {
        category: "Diagnostic Imaging",
        title: "USG — Local Parts",
        lead: "Focused ultrasound examination of specific anatomical regions — neck, soft tissue, scrotum, groin, or any localised area of clinical concern.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Focused", label: "Local Assessment" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Local Parts USG",
        overviewText: "Our focused ultrasound assessment of local parts at Meera 4D Scans Madurai provides a precise, targeted evaluation of any specific region — delivering clear diagnostic information quickly.",
        details: [
            { icon: "bi bi-search", heading: "Soft Tissue Assessment", text: "Evaluation of lumps, swellings, and soft tissue masses in any localised anatomical region." },
            { icon: "bi bi-person-check", heading: "Scrotal Ultrasound", text: "Assessment of testicular size, echogenicity, epididymis, and detection of varicocele or hydrocele." },
            { icon: "bi bi-geo-alt", heading: "Neck & Lymph Node Scan", text: "Ultrasound of neck structures including lymph nodes, salivary glands, and soft tissue masses." }
        ],
        tags: ["Soft Tissue Lump", "Scrotal Scan", "Lymph Node", "Neck Swelling", "Groin Swelling", "Local USG"]
    },

    // ══════════════════════════════════════════════
    // 5. ADULT ECHO
    // ══════════════════════════════════════════════

    "adult-echo": {
        category: "Cardiac Imaging",
        title: "Adult Echocardiography (ECHO)",
        lead: "Detailed ultrasound imaging of the adult heart — assessing chambers, valves, wall motion, and cardiac function.",
        img: "assets/img/health/laboratory-3.webp",
        stat1: { number: "2D / M-Mode", label: "Echo Protocol" },
        stat2: { number: "Cardiac", label: "Function Report" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Adult Echo",
        overviewText: "Our adult echocardiography service at Meera 4D Scans Madurai provides a comprehensive cardiac assessment — using 2D, M-mode, and Doppler techniques to deliver a detailed report of your heart health.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "Cardiac Chambers & Valves", text: "Assessment of all four cardiac chambers, valve morphology, and function including regurgitation and stenosis." },
            { icon: "bi bi-activity", heading: "Wall Motion Analysis", text: "Evaluation of left ventricular wall motion and ejection fraction for assessment of cardiac function." },
            { icon: "bi bi-broadcast", heading: "Doppler Blood Flow", text: "Colour and spectral Doppler assessment of blood flow across valves and through cardiac chambers." }
        ],
        tags: ["Echocardiography", "Ejection Fraction", "Valve Disease", "LV Function", "Cardiac Assessment", "Heart Failure"]
    },

    "ecg-holter": {
        category: "Cardiac Imaging",
        title: "ECG & Holter Monitoring",
        lead: "Continuous heart rhythm monitoring to detect arrhythmias, palpitations, and irregular heartbeat patterns.",
        img: "assets/img/health/laboratory-3.webp",
        stat1: { number: "24–48h", label: "Monitoring Duration" },
        stat2: { number: "12-Lead", label: "ECG Coverage" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our ECG & Holter Service",
        overviewText: "Our cardiac monitoring services provide accurate, detailed heart rhythm analysis with quick turnaround — helping doctors make timely and informed treatment decisions.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "12-Lead ECG", text: "Standard resting electrocardiogram to assess heart rhythm, rate, and electrical activity." },
            { icon: "bi bi-clock-history", heading: "24–48 Hour Holter", text: "Ambulatory ECG monitoring over 24 to 48 hours to capture intermittent arrhythmias." },
            { icon: "bi bi-graph-up-arrow", heading: "Arrhythmia Detection", text: "Comprehensive analysis of heart rhythm irregularities including atrial fibrillation and ectopics." }
        ],
        tags: ["Atrial Fibrillation", "Palpitations", "Bradycardia", "Tachycardia", "Syncope Evaluation", "Pre-Op Screening"]
    },

    // ══════════════════════════════════════════════
    // 6. DOPPLER STUDY
    // ══════════════════════════════════════════════

    "upper-limb-arterial-doppler": {
        category: "Doppler Studies",
        title: "Upper Limb Arterial Doppler",
        lead: "Ultrasound Doppler assessment of the arterial blood flow in the upper limb — detecting blockages, stenosis, and circulatory problems.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Arterial", label: "Flow Assessment" },
        stat2: { number: "Both Arms", label: "Assessment" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Upper Limb Arterial Doppler",
        overviewText: "Our upper limb arterial Doppler at Meera 4D Scans Madurai provides a precise assessment of arm arterial blood flow — identifying peripheral arterial disease, stenosis, and occlusions with same-day results.",
        details: [
            { icon: "bi bi-broadcast", heading: "Arterial Flow Mapping", text: "Colour and spectral Doppler mapping of upper limb arteries from subclavian to radial and ulnar arteries." },
            { icon: "bi bi-search", heading: "Stenosis Detection", text: "Identification of arterial stenosis, occlusion, or plaque causing reduced blood flow to the arm." },
            { icon: "bi bi-activity", heading: "ABI Assessment", text: "Ankle-brachial index equivalent assessment for upper limb peripheral vascular disease evaluation." }
        ],
        tags: ["Upper Limb Arteries", "Peripheral Arterial Disease", "Stenosis", "Occlusion", "Subclavian Artery", "Brachial Artery"]
    },

    "upper-limb-venous-doppler": {
        category: "Doppler Studies",
        title: "Upper Limb Venous Doppler",
        lead: "Doppler ultrasound of the upper limb veins to detect deep vein thrombosis (DVT), venous obstruction, and reflux.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "DVT", label: "Detection" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Upper Limb Venous Doppler",
        overviewText: "At Meera 4D Scans Madurai, our upper limb venous Doppler provides accurate, real-time detection of DVT and venous obstruction — critical for timely treatment and prevention of serious complications.",
        details: [
            { icon: "bi bi-broadcast", heading: "DVT Detection", text: "Assessment of upper limb deep veins for thrombosis — compression, flow, and augmentation testing." },
            { icon: "bi bi-search", heading: "Venous Obstruction", text: "Detection of extrinsic venous compression or obstruction causing upper limb swelling or pain." },
            { icon: "bi bi-activity", heading: "Venous Reflux", text: "Assessment of venous valve competence and reflux in upper limb venous insufficiency." }
        ],
        tags: ["Upper Limb DVT", "Venous Thrombosis", "Venous Obstruction", "Arm Swelling", "PICC Line Check", "Venous Reflux"]
    },

    "lower-limb-arterial-doppler": {
        category: "Doppler Studies",
        title: "Lower Limb Arterial Doppler",
        lead: "Comprehensive Doppler assessment of lower limb arteries — detecting peripheral arterial disease, stenosis, and leg circulation problems.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Peripheral", label: "Arterial Disease" },
        stat2: { number: "ABI", label: "Assessment" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Lower Limb Arterial Doppler",
        overviewText: "Our lower limb arterial Doppler at Meera 4D Scans Madurai provides a thorough assessment of leg arterial circulation — essential for peripheral arterial disease diagnosis and pre-surgical planning.",
        details: [
            { icon: "bi bi-broadcast", heading: "Arterial Flow Mapping", text: "Detailed Doppler mapping from iliac arteries to the pedal arteries of both lower limbs." },
            { icon: "bi bi-search", heading: "Stenosis & Occlusion", text: "Detection of arterial stenosis, calcification, and occlusion causing leg pain, claudication, or non-healing wounds." },
            { icon: "bi bi-activity", heading: "ABI Measurement", text: "Ankle-brachial pressure index calculation for peripheral arterial disease risk stratification." }
        ],
        tags: ["Peripheral Arterial Disease", "Claudication", "ABI", "Femoral Artery", "Popliteal Artery", "Leg Circulation"]
    },

    "lower-limb-venous-doppler": {
        category: "Doppler Studies",
        title: "Lower Limb Venous Doppler",
        lead: "Doppler ultrasound of the lower limb veins — the gold standard for detection of deep vein thrombosis (DVT) and venous insufficiency.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "DVT", label: "Gold Standard Test" },
        stat2: { number: "Same Day", label: "Results" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Lower Limb Venous Doppler",
        overviewText: "At Meera 4D Scans Madurai, our lower limb venous Doppler is the gold standard for DVT detection — providing accurate, real-time assessment of deep and superficial veins for immediate clinical action.",
        details: [
            { icon: "bi bi-broadcast", heading: "DVT Diagnosis", text: "Compression and Doppler assessment of deep veins from femoral to calf for thrombosis detection." },
            { icon: "bi bi-search", heading: "Varicose Vein Assessment", text: "Evaluation of superficial venous reflux and incompetent perforators causing varicose veins." },
            { icon: "bi bi-activity", heading: "Chronic Venous Insufficiency", text: "Assessment of chronic venous insufficiency and post-thrombotic syndrome affecting lower limb circulation." }
        ],
        tags: ["DVT", "Deep Vein Thrombosis", "Varicose Veins", "Venous Insufficiency", "Leg Swelling", "Post-Thrombotic Syndrome"]
    },

    "carotid-doppler": {
        category: "Doppler Studies",
        title: "Carotid Doppler",
        lead: "Ultrasound Doppler assessment of the carotid arteries — detecting plaque, stenosis, and blood flow abnormalities that may increase stroke risk.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Stroke", label: "Risk Assessment" },
        stat2: { number: "IMT", label: "Measurement" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Carotid Doppler",
        overviewText: "Our carotid Doppler at Meera 4D Scans Madurai provides a precise assessment of carotid artery health — identifying atherosclerotic plaque and stenosis that increases the risk of stroke and TIA.",
        details: [
            { icon: "bi bi-broadcast", heading: "Plaque Detection", text: "Identification of atherosclerotic plaque in the carotid arteries — size, morphology, and stability assessment." },
            { icon: "bi bi-activity", heading: "IMT Measurement", text: "Intima-media thickness measurement — an important early marker of cardiovascular disease risk." },
            { icon: "bi bi-search", heading: "Stenosis Grading", text: "Spectral Doppler grading of carotid stenosis severity — essential for stroke risk stratification." }
        ],
        tags: ["Carotid Stenosis", "Atherosclerosis", "IMT", "Stroke Risk", "Plaque", "TIA Assessment"]
    },

    // ══════════════════════════════════════════════
    // 7. FETAL INTERVENTIONS
    // ══════════════════════════════════════════════

    "cvs": {
        category: "Fetal Interventions",
        title: "Chorionic Villus Sampling (CVS)",
        lead: "An ultrasound-guided procedure to obtain a small sample of placental tissue for chromosomal and genetic diagnosis.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "10–13", label: "Weeks Procedure" },
        stat2: { number: "Genetic", label: "Diagnosis" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our CVS Service",
        overviewText: "At Meera 4D Scans Madurai, CVS is performed by experienced fetal medicine specialists under continuous ultrasound guidance — ensuring safety, accuracy, and compassionate care throughout the procedure.",
        details: [
            { icon: "bi bi-search", heading: "Chromosomal Diagnosis", text: "Obtains placental tissue for definitive chromosomal analysis — diagnosing Down syndrome and other genetic conditions." },
            { icon: "bi bi-shield-check", heading: "Ultrasound Guided", text: "Performed under continuous ultrasound guidance for precise needle placement and maximum safety." },
            { icon: "bi bi-clock-history", heading: "Early Diagnosis", text: "Available from 10 to 13 weeks — provides earlier answers compared to amniocentesis." }
        ],
        tags: ["Chromosomal Analysis", "Down Syndrome Diagnosis", "Genetic Testing", "10–13 Weeks", "Fetal Intervention", "CVS"]
    },

    "amniocentesis": {
        category: "Fetal Interventions",
        title: "Amniocentesis",
        lead: "An ultrasound-guided procedure to sample amniotic fluid for definitive chromosomal and genetic diagnosis of the fetus.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "15–20", label: "Weeks Procedure" },
        stat2: { number: "Chromosomal", label: "Diagnosis" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Amniocentesis Service",
        overviewText: "Our amniocentesis is performed by experienced fetal medicine specialists at Meera 4D Scans Madurai — under continuous ultrasound guidance with meticulous attention to safety and patient comfort.",
        details: [
            { icon: "bi bi-search", heading: "Definitive Chromosomal Testing", text: "Amniotic fluid analysis provides definitive chromosomal karyotype — the gold standard for prenatal diagnosis." },
            { icon: "bi bi-shield-check", heading: "Continuous Ultrasound Guidance", text: "Real-time ultrasound monitoring throughout the procedure for precise and safe needle placement." },
            { icon: "bi bi-clipboard2-pulse", heading: "Genetic Disorder Diagnosis", text: "Diagnosis of chromosomal abnormalities, single gene disorders, and neural tube defects." }
        ],
        tags: ["Amniocentesis", "Chromosomal Karyotype", "Genetic Diagnosis", "15–20 Weeks", "Prenatal Diagnosis", "Fetal Intervention"]
    },

    "multifetal-reduction": {
        category: "Fetal Interventions",
        title: "Multifetal Pregnancy Reduction",
        lead: "An ultrasound-guided specialist procedure to reduce the number of fetuses in a higher-order multiple pregnancy.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Specialist", label: "Procedure" },
        stat2: { number: "Ultrasound", label: "Guided" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Multifetal Reduction Service",
        overviewText: "Multifetal pregnancy reduction is a delicate, specialist procedure performed by our experienced fetal medicine team at Meera 4D Scans Madurai — under continuous ultrasound guidance with compassionate counselling support.",
        details: [
            { icon: "bi bi-shield-check", heading: "Specialist Procedure", text: "Performed by experienced fetal medicine specialists to reduce risks associated with higher-order multiple pregnancies." },
            { icon: "bi bi-broadcast", heading: "Ultrasound Guided", text: "Continuous ultrasound guidance throughout the procedure for precision and safety." },
            { icon: "bi bi-person-hearts", heading: "Counselling & Support", text: "Comprehensive pre- and post-procedure counselling to support families through this difficult decision." }
        ],
        tags: ["Multiple Pregnancy", "Triplets", "Higher Order Multiples", "Fetal Reduction", "IVF Complication", "Specialist Procedure"]
    },

    // ══════════════════════════════════════════════
    // 8. GENERAL INTERVENTIONS
    // ══════════════════════════════════════════════

    "fnac": {
        category: "General Interventions",
        title: "FNAC — Fine Needle Aspiration Cytology",
        lead: "Ultrasound-guided fine needle aspiration for cytological diagnosis of lumps, nodules, and masses in any accessible anatomical site.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Minimally", label: "Invasive" },
        stat2: { number: "Cytology", label: "Diagnosis" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our FNAC Service",
        overviewText: "At Meera 4D Scans Madurai, ultrasound-guided FNAC provides precise, minimally invasive cell sampling from any accessible lump or mass — delivering rapid cytological results to guide clinical management.",
        details: [
            { icon: "bi bi-search", heading: "Ultrasound Guided Precision", text: "Real-time ultrasound guidance ensures accurate needle placement directly into the target lesion." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A quick, well-tolerated outpatient procedure using a fine needle — no surgical incision required." },
            { icon: "bi bi-clipboard2-pulse", heading: "Cytological Diagnosis", text: "Cellular material obtained for cytological analysis — guiding benign versus malignant diagnosis." }
        ],
        tags: ["FNAC", "Thyroid FNAC", "Breast FNAC", "Lymph Node FNAC", "Fine Needle Aspiration", "Cytology"]
    },

    "trucut-biopsy": {
        category: "General Interventions",
        title: "Trucut Biopsy",
        lead: "Ultrasound-guided core needle biopsy for histological diagnosis of tumours, masses, and organ lesions.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Core", label: "Tissue Biopsy" },
        stat2: { number: "Histology", label: "Diagnosis" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Trucut Biopsy Service",
        overviewText: "Our ultrasound-guided trucut biopsy at Meera 4D Scans Madurai provides accurate core tissue sampling for definitive histological diagnosis — a critical step in cancer diagnosis and management.",
        details: [
            { icon: "bi bi-search", heading: "Ultrasound Guided Biopsy", text: "Precise core needle placement under real-time ultrasound guidance for accurate tissue sampling." },
            { icon: "bi bi-clipboard2-pulse", heading: "Histological Diagnosis", text: "Core tissue samples provide histological analysis — superior to FNAC for definitive tissue diagnosis." },
            { icon: "bi bi-shield-check", heading: "Wide Clinical Application", text: "Used for liver, kidney, lymph node, breast, thyroid, and soft tissue mass biopsy." }
        ],
        tags: ["Core Biopsy", "Trucut", "Histology", "Liver Biopsy", "Breast Biopsy", "Lymph Node Biopsy", "Cancer Diagnosis"]
    },

    "aspiration": {
        category: "General Interventions",
        title: "Aspiration",
        lead: "Ultrasound-guided drainage and aspiration of cysts, abscesses, fluid collections, and effusions.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "Ultrasound", label: "Guided" },
        stat2: { number: "Minimally", label: "Invasive" },
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Aspiration Service",
        overviewText: "At Meera 4D Scans Madurai, ultrasound-guided aspiration provides safe, precise drainage of fluid collections — a minimally invasive alternative to surgical drainage in many clinical situations.",
        details: [
            { icon: "bi bi-search", heading: "Cyst & Abscess Drainage", text: "Precise drainage of cysts and abscesses under real-time ultrasound guidance for maximum safety." },
            { icon: "bi bi-droplet", heading: "Fluid Collection Aspiration", text: "Aspiration of pleural effusions, ascites, and localised fluid collections for diagnostic and therapeutic purposes." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A well-tolerated outpatient procedure avoiding the need for surgical drainage in most cases." }
        ],
        tags: ["Cyst Aspiration", "Abscess Drainage", "Pleural Effusion", "Ascites", "Fluid Collection", "Ultrasound Guided"]
    },

    // ── Legacy keys kept for backward compatibility ──
    "ultrasound": {
        category: "Diagnostic Imaging",
        title: "Ultrasound Imaging",
        lead: "High-resolution diagnostic ultrasound scans providing clear, detailed views for accurate patient assessment.",
        img: "assets/img/health/emergency-2.webp",
        stat1: { number: "HD", label: "Image Quality" },
        stat2: { number: "Same Day", label: "Results" },
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
        category: "Laboratory",
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
    document.getElementById("svc-category").innerText = d.category;
    document.getElementById("svc-title").innerText = d.title;
    document.getElementById("svc-lead").innerText = d.lead;
    document.getElementById("svc-image").src = d.img;
    document.getElementById("svc-image").alt = d.title;
    document.getElementById("stat1-number").innerText = d.stat1.number;
    document.getElementById("stat1-label").innerText = d.stat1.label;
    document.getElementById("stat2-number").innerText = d.stat2.number;
    document.getElementById("stat2-label").innerText = d.stat2.label;
    document.getElementById("svc-overview-img").src = d.overviewImg;
    document.getElementById("svc-overview-img").alt = d.title;

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

    document.getElementById("svc-overview-title").innerText = d.overviewTitle;
    document.getElementById("svc-overview-text").innerText = d.overviewText;

    const tagsEl = document.getElementById("svc-tags");
    tagsEl.innerHTML = d.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

// ── Init ─────────────────────────────────────────────────────────────────────
if (data[service]) {
    renderPage(data[service]);
} else {
    document.getElementById("svc-title").innerText = "Service Not Found";
}