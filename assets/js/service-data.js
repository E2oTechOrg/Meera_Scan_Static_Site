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
        img: "assets/img/newService/abdomen/date1.webp",
        overviewImg: "assets/img/newService/abdomen/date2.webp",
        overviewTitle: "Why Choose Our Early Pregnancy Scan",
        overviewText: "At Meera 4D Scans Madurai, our early pregnancy scans confirm your pregnancy with precision — establishing an accurate due date and detecting fetal heartbeat from as early as 6 weeks.",
        details: [
            { icon: "bi bi-calendar-heart", heading: "Due Date Confirmation", text: "Accurate gestational age calculation and estimated due date based on fetal measurements." },
            { icon: "bi bi-heart-pulse", heading: "Fetal Heartbeat Detection", text: "Confirms the presence of a healthy fetal heartbeat from as early as 6 weeks." },
            { icon: "bi bi-diagram-2", heading: "Number of Fetuses", text: "Identifies single or multiple pregnancies and assesses early placental position." }
        ],
        tags: ["Dating Scan", "Due Date", "Fetal Heartbeat", "6–10 Weeks", "Early Pregnancy", "Gestational Age"],

        stepGroups: [
            {
                route: "Transabdominal Route",
                icon: "bi bi-person",
                steps: [
                    "A thin layer of lubricant gel is applied to the lower abdomen.",
                    "The ultrasound probe is gently moved over the abdomen.",
                    "The baby's sac, heartbeat, and measurements are assessed.",
                    "Crown-rump length (CRL) is measured to calculate gestational age.",
                    "A detailed report with your due date is provided same day."
                ]
            },
            {
                route: "Transvaginal Route",
                icon: "bi bi-clipboard2-pulse",
                note: "May be used if abdominal imaging is unclear at very early gestation (6–7 weeks).",
                steps: [
                    "A covered, gel-coated probe is gently inserted into the vagina.",
                    "Clearer images of the early gestational sac are obtained.",
                    "Fetal heartbeat and yolk sac are confirmed.",
                    "Measurements are taken for accurate dating.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Full Bladder", text: "Drink 3–4 glasses of water one hour before — a full bladder helps visualise the uterus clearly." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Referral / Reports", text: "Carry your doctor's referral and any previous reports if available." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, two-piece clothing for easy abdominal access." },
            { icon: "bi bi-calendar3", title: "Know Your LMP", text: "Note your Last Menstrual Period date for accurate gestational age calculation." }
        ],

        faqs: [
            { q: "How early can I get this scan?", a: "From as early as 6 weeks of pregnancy, when the heartbeat first becomes detectable." },
            { q: "Is the scan safe at such an early stage?", a: "Yes — ultrasound is completely safe at all stages of pregnancy, using only sound waves." },
            { q: "What if no heartbeat is seen?", a: "If the pregnancy is very early, a repeat scan may be recommended after 1–2 weeks." },
            { q: "How long does the scan take?", a: "Usually 15 to 20 minutes at Meera 4D Scans Madurai." },
            { q: "When will I get my results?", a: "Same day — your report and due date are provided before you leave." }
        ]
    },

    "nt-scan": {
        category: "Antenatal Scans",
        title: "Nuchal Translucency (NT) Scan",
        lead: "Early, accurate first-trimester screening to assess your baby's chromosomal health with advanced ultrasound imaging.",
        img: "assets/img/newService/abdomen/nt1.webp",
        overviewImg: "assets/img/newService/abdomen/nt2.webp",
        overviewTitle: "Why Choose Our NT Scan",
        overviewText: "At Meera 4D Scans, our NT scans are performed by experienced sonologists using high-resolution ultrasound technology — delivering accurate measurements, clear results, and compassionate care for every mother and baby.",
        details: [
            { icon: "bi bi-activity", heading: "Nuchal Translucency Measurement", text: "Precise measurement of fluid at the back of your baby's neck to assess chromosomal abnormality risk." },
            { icon: "bi bi-diagram-2", heading: "First Trimester Screening", text: "Comprehensive early pregnancy assessment combining ultrasound imaging and maternal blood tests." },
            { icon: "bi bi-prescription2", heading: "Chromosomal Risk Assessment", text: "Accurate evaluation of Down syndrome and other chromosomal condition risks for early informed decisions." }
        ],
        tags: ["Down Syndrome Risk", "Chromosomal Screening", "First Trimester", "Trisomy 21", "Trisomy 18", "Nasal Bone Assessment"],

        stepGroups: [
            {
                route: "Abdominal Route",
                icon: "bi bi-person",
                steps: [
                    "A thin layer of lubricant gel is applied to the abdomen.",
                    "The transducer probe is gently glided over the abdomen.",
                    "Real-time images of the baby are displayed on the monitor.",
                    "NT, nasal bone, CRL, and heart rate are carefully measured.",
                    "A detailed scan report is provided on the same day."
                ]
            },
            {
                route: "Transvaginal Route",
                icon: "bi bi-clipboard2-pulse",
                note: "Used when abdominal imaging is insufficient at early gestational age.",
                steps: [
                    "A probe cover is used to cover the transvaginal probe.",
                    "Patient lies down with knees bent and legs comfortably positioned.",
                    "The probe is covered with a thin layer of lubricant gel.",
                    "The probe is gently inserted into the vagina.",
                    "Real-time images of the baby are displayed on the monitor."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Stay Hydrated", text: "Drink 2–3 glasses of water 30 minutes before your scan for better imaging." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment — no dietary restrictions." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier scan reports or pregnancy documents if available." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, comfortable clothing for easy abdominal access during the scan." },
            { icon: "bi bi-calendar3", title: "Know Your LMP", text: "Note your Last Menstrual Period date before visiting for accurate dating." }
        ],

        faqs: [
            { q: "When should I get an NT scan?", a: "Between 11 and 14 weeks of pregnancy for accurate results." },
            { q: "Is the NT scan safe for my baby?", a: "Yes — completely safe, uses sound waves only with no radiation." },
            { q: "How long does the scan take?", a: "Approximately 20 to 30 minutes at Meera 4D Scans Madurai." },
            { q: "When will I get my results?", a: "Same day — a detailed report is provided on the day of your scan." },
            { q: "Which route will be used — abdominal or transvaginal?", a: "Most NT scans are done abdominally. Transvaginal may be used if the baby's position makes abdominal imaging difficult." }
        ]
    },

    "early-anomaly-scan": {
        category: "Antenatal Scans",
        title: "Early Anomaly Scan",
        lead: "An early structural assessment performed between 14 and 18 weeks to detect major fetal anomalies before the standard TIFFA scan.",
        img: "assets/img/health/neurology-3.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Early Anomaly Scan",
        overviewText: "The early anomaly scan at Meera 4D Scans Madurai provides an important structural review before the standard TIFFA, allowing earlier detection of major fetal abnormalities.",
        details: [
            { icon: "bi bi-search", heading: "Early Structural Review", text: "Assessment of major fetal structures including brain, spine, heart, and limbs at 14–18 weeks." },
            { icon: "bi bi-heart", heading: "Cardiac Screening", text: "Early assessment of the fetal heart for major structural defects detectable at this stage." },
            { icon: "bi bi-person-check", heading: "Fetal Well-Being", text: "Assessment of fetal movements, amniotic fluid, and placental position at the early stage." }
        ],
        tags: ["Early Detection", "14–18 Weeks", "Fetal Structure", "Brain Assessment", "Cardiac Screening", "Anomaly Scan"],

        stepGroups: [
            {
                route: "Transabdominal Ultrasound",
                icon: "bi bi-person",
                steps: [
                    "Gel is applied to the abdomen and the probe is positioned.",
                    "Brain, spine, and facial structures are assessed.",
                    "Heart chambers and outflow tracts are evaluated.",
                    "Limb lengths, kidneys, and abdominal wall are checked.",
                    "Placental position and amniotic fluid are noted.",
                    "Report is issued on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2 glasses of water 30 minutes before — a partially full bladder aids imaging." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Carry Previous Scan Reports", text: "Bring your NT scan report and any earlier pregnancy documents." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose two-piece clothing for easy access." },
            { icon: "bi bi-calendar3", title: "Know Your Gestational Age", text: "Confirm your gestational age before visiting — ideally 14 to 18 weeks." }
        ],

        faqs: [
            { q: "Is this scan different from the TIFFA scan?", a: "Yes — it is an earlier survey done at 14–18 weeks, whereas the TIFFA is performed at 18–22 weeks with greater detail." },
            { q: "What can be detected at this stage?", a: "Major structural abnormalities of the brain, spine, heart, abdominal wall, and limbs can be identified." },
            { q: "Is this scan safe?", a: "Completely safe — uses standard diagnostic ultrasound with no radiation." },
            { q: "Do I still need the TIFFA scan after this?", a: "Yes — the TIFFA scan at 18–22 weeks remains essential for a comprehensive structural survey." },
            { q: "When will I get my report?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "anomaly-scan": {
        category: "Antenatal Scans",
        title: "TIFFA / Target Scan / Anomaly Scan",
        lead: "The gold-standard mid-pregnancy scan examining your baby's organs, structure, and development in detail to detect abnormalities early.",
        img: "assets/img/health/neurology-3.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our TIFFA / Anomaly Scan",
        overviewText: "Our TIFFA-certified sonologists perform a meticulous fetal survey covering all major organ systems — giving you and your doctor the most complete picture of your baby's development.",
        details: [
            { icon: "bi bi-search", heading: "Full Fetal Structural Survey", text: "Thorough examination of the baby's brain, heart, spine, limbs, kidneys, and all major organs." },
            { icon: "bi bi-heart", heading: "Fetal Heart Assessment", text: "Detailed four-chamber heart view to screen for cardiac defects and structural abnormalities." },
            { icon: "bi bi-body-text", heading: "Placenta & Fluid Assessment", text: "Evaluation of placental position, grade, and amniotic fluid levels around your baby." }
        ],
        tags: ["Neural Tube Defects", "Cardiac Defects", "Cleft Lip", "Skeletal Anomalies", "Organ Development", "Placenta Position"],

        stepGroups: [
            {
                route: "Transabdominal Ultrasound",
                icon: "bi bi-person",
                steps: [
                    "Gel is applied to the abdomen and the probe is positioned.",
                    "Head, brain, face, and spine are systematically examined.",
                    "Four-chamber heart view and outflow tracts are assessed.",
                    "Abdominal organs — stomach, kidneys, bladder — are evaluated.",
                    "Limb bones, hands, and feet are checked.",
                    "Placental position, cord insertion, and amniotic fluid are noted.",
                    "Detailed report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2–3 glasses of water 30–45 minutes before your appointment." },
            { icon: "bi bi-cup-hot", title: "Eat Before Your Scan", text: "Having a light meal beforehand can encourage baby movement for better imaging." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry your NT scan report and all earlier pregnancy documents." },
            { icon: "bi bi-bag", title: "Wear Comfortable Clothing", text: "Two-piece loose clothing allows easy abdominal access." },
            { icon: "bi bi-clock", title: "Allow Sufficient Time", text: "The TIFFA scan is detailed — allow 45 to 60 minutes for the appointment." }
        ],

        faqs: [
            { q: "When should the TIFFA scan be done?", a: "Between 18 and 22 weeks of pregnancy for the most complete structural assessment." },
            { q: "What abnormalities can be detected?", a: "Brain, spine, heart, kidney, abdominal wall defects, cleft lip, skeletal abnormalities, and more." },
            { q: "What if an abnormality is found?", a: "Our team will explain the findings and refer you to a fetal medicine specialist for further evaluation." },
            { q: "Can we find out the baby's gender?", a: "Yes — gender can be revealed during the TIFFA scan if you wish to know." },
            { q: "How long does the scan take?", a: "Approximately 30 to 45 minutes depending on baby's position." }
        ]
    },

    "fetal-echo": {
        category: "Antenatal Scans",
        title: "Fetal Echocardiography",
        lead: "A specialised detailed scan of your baby's heart — examining all chambers, valves, and blood flow for early cardiac assessment.",
        img: "assets/img/Scan/fetal.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Fetal Echo",
        overviewText: "At Meera 4D Scans Madurai, fetal echocardiography is performed by experienced sonologists using advanced cardiac ultrasound — providing early, accurate assessment of your baby's heart.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "Four Chamber Heart View", text: "Detailed examination of all four heart chambers, valves, and septal walls for structural abnormalities." },
            { icon: "bi bi-broadcast", heading: "Cardiac Blood Flow", text: "Colour Doppler assessment of blood flow direction and velocity through the fetal heart." },
            { icon: "bi bi-activity", heading: "Heart Rhythm Assessment", text: "Evaluation of fetal heart rate and rhythm to detect any cardiac arrhythmias before birth." }
        ],
        tags: ["Congenital Heart Defect", "Four Chamber View", "Cardiac Doppler", "Heart Rhythm", "Fetal Heart", "18–24 Weeks"],

        stepGroups: [
            {
                route: "Transabdominal Cardiac Ultrasound",
                icon: "bi bi-heart-pulse",
                steps: [
                    "Gel is applied to the abdomen and the probe is positioned over the fetal heart.",
                    "Four-chamber view of the heart is obtained and assessed.",
                    "Outflow tracts — aorta and pulmonary artery — are evaluated.",
                    "Colour Doppler is used to assess blood flow direction across valves.",
                    "Heart rate and rhythm are recorded throughout.",
                    "Detailed cardiac report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2 glasses of water 30 minutes before for clearer imaging." },
            { icon: "bi bi-cup-hot", title: "Eat a Light Meal Beforehand", text: "A light snack before the scan encourages fetal movement and better cardiac views." },
            { icon: "bi bi-folder2-open", title: "Bring Referral Letter", text: "Carry your doctor's referral explaining why fetal echo has been requested." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose two-piece clothing for easy abdominal access." },
            { icon: "bi bi-clock", title: "Allow Extra Time", text: "Fetal echo is detailed — allow 45 to 60 minutes for the appointment." }
        ],

        faqs: [
            { q: "Who needs a fetal echocardiography?", a: "Recommended if there is a family history of congenital heart disease, abnormal TIFFA findings, or maternal diabetes." },
            { q: "When is fetal echo performed?", a: "Ideally between 18 and 24 weeks, when cardiac structures are well-visualised." },
            { q: "Is the scan safe?", a: "Yes — completely safe, using standard ultrasound technology with no radiation." },
            { q: "What conditions can be detected?", a: "Ventricular septal defects, valve abnormalities, outflow tract anomalies, and rhythm disorders." },
            { q: "When will I get the report?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "fetal-growth": {
        category: "Antenatal Scans",
        title: "Growth Scan / BPP",
        lead: "Regular detailed scans to monitor your baby's growth, weight, position, amniotic fluid, and biophysical profile throughout pregnancy.",
        img: "assets/img/health/emergency-2.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Growth Scan / BPP",
        overviewText: "Our growth scans track your baby's development with precision. The Biophysical Profile (BPP) provides a comprehensive assessment of fetal well-being — ensuring any concerns are detected and managed early.",
        details: [
            { icon: "bi bi-rulers", heading: "Growth Biometry", text: "Accurate measurement of head circumference, abdominal circumference, and femur length to estimate fetal weight." },
            { icon: "bi bi-droplet-half", heading: "Amniotic Fluid & BPP", text: "Assessment of amniotic fluid index and biophysical profile score for fetal well-being evaluation." },
            { icon: "bi bi-geo-alt", heading: "Baby Position & Presentation", text: "Assessment of baby's lie, presentation, and position for delivery planning." }
        ],
        tags: ["BPP Score", "Fetal Weight Estimate", "Amniotic Fluid", "Growth Restriction", "Presentation", "Fetal Well-Being"],

        stepGroups: [
            {
                route: "Transabdominal Ultrasound",
                icon: "bi bi-person",
                steps: [
                    "Gel is applied to the abdomen and the probe is positioned.",
                    "Head circumference, abdominal circumference, and femur length are measured.",
                    "Estimated fetal weight is calculated from biometric measurements.",
                    "Amniotic fluid index is assessed by measuring fluid pockets.",
                    "Fetal tone, movement, breathing, and heart rate are observed for BPP scoring.",
                    "Baby's position and placental location are documented.",
                    "Report with growth percentile and BPP score is provided same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Hydrate Well", text: "Drink adequate fluids before the scan — good hydration supports amniotic fluid levels." },
            { icon: "bi bi-cup-hot", title: "Eat Before Your Scan", text: "Having a light meal beforehand helps encourage fetal movement for BPP assessment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Growth Charts", text: "Carry earlier growth scan reports for comparison of growth trend." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, two-piece clothing for easy abdominal access." },
            { icon: "bi bi-calendar3", title: "Note Your Gestation", text: "Know your exact gestational age for accurate growth percentile plotting." }
        ],

        faqs: [
            { q: "When are growth scans usually recommended?", a: "From 28 weeks onwards, or earlier if growth restriction or high-risk pregnancy is suspected." },
            { q: "What is a BPP score?", a: "A score out of 10 assessing fetal breathing, movement, tone, amniotic fluid, and heart rate — used to evaluate fetal well-being." },
            { q: "What does low amniotic fluid mean?", a: "Reduced fluid (oligohydramnios) may indicate placental insufficiency and requires close monitoring." },
            { q: "How often should growth scans be done?", a: "Usually every 2–4 weeks for high-risk pregnancies, or as advised by your obstetrician." },
            { q: "When will I get my results?", a: "Same day — growth percentile, estimated weight, and BPP score are provided before you leave." }
        ]
    },

    "doppler-scan": {
        category: "Antenatal Scans",
        title: "Doppler Scan",
        lead: "Precise blood flow monitoring through the umbilical cord and placenta to ensure your baby's growth and well-being.",
        img: "assets/img/health/orthopedics-1.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Doppler Scan",
        overviewText: "Our Doppler scans provide critical insights into your baby's circulation and placental health — helping doctors detect growth restriction and fetal distress at the earliest possible stage.",
        details: [
            { icon: "bi bi-broadcast", heading: "Umbilical Cord Flow", text: "Measures blood flow through the umbilical artery to assess nutrient and oxygen delivery to the baby." },
            { icon: "bi bi-diagram-3", heading: "Placental Assessment", text: "Evaluates placental function and identifies any resistance that may affect fetal growth." },
            { icon: "bi bi-graph-up", heading: "Middle Cerebral Artery", text: "MCA Doppler to assess fetal brain blood flow and detect early signs of fetal compromise." }
        ],
        tags: ["Umbilical Artery", "Middle Cerebral Artery", "Placental Function", "Growth Restriction", "Fetal Distress", "Uterine Artery"],

        stepGroups: [
            {
                route: "Colour Doppler Ultrasound",
                icon: "bi bi-broadcast",
                steps: [
                    "Gel is applied to the abdomen and the probe is positioned.",
                    "Colour Doppler is activated to visualise blood flow in vessels.",
                    "Umbilical artery waveforms are recorded and resistance index calculated.",
                    "Middle cerebral artery (MCA) flow is assessed for brain-sparing pattern.",
                    "Uterine artery flow is evaluated for placental resistance.",
                    "All Doppler indices are documented and interpreted.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Stay Hydrated", text: "Drink 2 glasses of water before the scan for better visualisation." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Carry Previous Doppler Reports", text: "Bring earlier Doppler or growth scan reports for trend assessment." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose two-piece clothing for easy abdominal access." },
            { icon: "bi bi-calendar3", title: "Note Your Gestation", text: "Confirm your current gestational age before visiting." }
        ],

        faqs: [
            { q: "When is a Doppler scan recommended?", a: "When growth restriction, hypertension, reduced fetal movements, or placental issues are suspected." },
            { q: "What does absent end-diastolic flow mean?", a: "It indicates severely compromised placental blood flow and requires urgent obstetric review." },
            { q: "Is the Doppler scan safe?", a: "Yes — completely safe for both mother and baby, using standard ultrasound technology." },
            { q: "Can Doppler scans be done alongside growth scans?", a: "Yes — they are commonly combined in a single appointment for comprehensive fetal assessment." },
            { q: "When will I get my results?", a: "Same day with full Doppler indices reported." }
        ]
    },

    "3d-4d-scan": {
        category: "Antenatal Scans",
        title: "3D / 4D Ultrasound Scan",
        lead: "Real-time 3D and 4D imaging to see your baby's face, movements, and expressions — a truly unforgettable bonding experience before birth.",
        img: "assets/img/newService/abdomen/4d.webp",
        overviewImg: "assets/img/newService/abdomen/4d1.webp",
        overviewTitle: "Why Choose Our 3D / 4D Scan",
        overviewText: "Experience the joy of seeing your baby up close with our state-of-the-art 3D/4D ultrasound at Meera 4D Scans Madurai. Our expert sonologists ensure the best imaging quality for a truly special bonding moment.",
        details: [
            { icon: "bi bi-camera-video", heading: "Real-Time 4D Imaging", text: "Watch your baby move, yawn, and smile in real-time with our advanced 4D ultrasound technology." },
            { icon: "bi bi-person-hearts", heading: "Bonding Experience", text: "A memorable keepsake experience with printed photos and video recordings of your baby." },
            { icon: "bi bi-shield-check", heading: "Detailed Facial Features", text: "Crystal-clear imaging of your baby's face, hands, and body for an unforgettable first look." }
        ],
        tags: ["Facial Features", "Baby Movements", "Keepsake Photos", "Video Recording", "Bonding Session", "Live Imaging"],

        stepGroups: [
            {
                route: "3D / 4D Ultrasound",
                icon: "bi bi-camera-video",
                steps: [
                    "Gel is applied to the abdomen and the 4D probe is positioned.",
                    "Baby's position is assessed — facing outward gives the best facial views.",
                    "Real-time 4D imaging is activated to capture live baby movements.",
                    "Facial features, hands, and feet are imaged in three dimensions.",
                    "Video is recorded and still images are captured during the session.",
                    "Printed photos and digital recordings are provided as keepsakes."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Stay Hydrated", text: "Drink plenty of water in the days leading up to your scan — good amniotic fluid levels improve image clarity." },
            { icon: "bi bi-cup-hot", title: "Eat Before Your Scan", text: "A light meal or sweet drink beforehand encourages baby activity for better images." },
            { icon: "bi bi-calendar3", title: "Best Time: 26–32 Weeks", text: "Book between 26 and 32 weeks for the clearest facial images before the baby engages into the pelvis." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose two-piece clothing for easy abdominal access." },
            { icon: "bi bi-people", title: "Bring Your Family", text: "Family members are welcome to join and share this special bonding experience." }
        ],

        faqs: [
            { q: "When is the best time for a 3D/4D scan?", a: "Between 26 and 32 weeks — the baby has developed facial features but there is still enough amniotic fluid for clear imaging." },
            { q: "What if the baby's position is not ideal?", a: "We may ask you to walk, change position, or return for a repeat scan if the baby is not facing outward." },
            { q: "Will I get photos and video?", a: "Yes — printed photos and a digital video recording are provided as part of the session." },
            { q: "Is 4D scanning safe?", a: "Yes — completely safe, using the same sound waves as standard 2D ultrasound." },
            { q: "Can family members be present?", a: "Yes — family and partners are welcome to join the scan session." }
        ]
    },

    // ══════════════════════════════════════════════
    // 2. WOMEN'S IMAGING
    // ══════════════════════════════════════════════

    "breast-scan": {
        category: "Women's Imaging",
        title: "Breast Scan / USG Mammogram",
        lead: "High-resolution ultrasound examination of the breast for detection of lumps, cysts, and early-stage breast conditions.",
        img: "assets/img/newService/women/usg1 (1).webp",
        overviewImg: "assets/img/newService/women/usg2 (1).webp",
        overviewTitle: "Why Choose Our Breast Scan",
        overviewText: "At Meera 4D Scans Madurai, our breast ultrasound provides a safe, radiation-free assessment of breast tissue — ideal for younger women, dense breasts, and as a complement to mammography.",
        details: [
            { icon: "bi bi-search", heading: "Lump & Mass Assessment", text: "Characterises breast lumps as solid, cystic, or complex — guiding the next steps in management." },
            { icon: "bi bi-shield-check", heading: "Safe & Radiation-Free", text: "Ultrasound uses sound waves only — completely safe with no radiation exposure." },
            { icon: "bi bi-broadcast", heading: "Doppler Blood Flow", text: "Colour Doppler assessment of vascularity within breast lesions for accurate characterisation." }
        ],
        tags: ["Breast Lump", "Breast Cyst", "Fibroadenoma", "Dense Breast", "Breast Screening", "USG Mammogram"],

        stepGroups: [
            {
                route: "Breast Ultrasound",
                icon: "bi bi-search",
                steps: [
                    "Patient lies supine with arm raised behind the head.",
                    "Gel is applied to the breast and the probe is positioned.",
                    "Both breasts are scanned systematically in a grid pattern.",
                    "Any lumps or masses are characterised — size, shape, margins, and echogenicity.",
                    "Colour Doppler assesses vascularity within identified lesions.",
                    "Axillary lymph nodes are also assessed.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Comfortable Clothing", text: "Wear a top that is easy to remove — a two-piece outfit is ideal." },
            { icon: "bi bi-x-circle", title: "No Deodorant or Powder", text: "Avoid applying deodorant, talcum powder, or creams to the breast area on the day of the scan." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier mammogram or breast scan reports for comparison." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-calendar3", title: "Best Timing in Cycle", text: "For pre-menopausal women, the scan is ideally done in the first half of the menstrual cycle (days 7–14) when breasts are less tender." }
        ],

        faqs: [
            { q: "Is breast ultrasound better than mammography?", a: "They are complementary. Ultrasound is preferred for younger women and dense breasts; mammography detects microcalcifications that ultrasound may miss." },
            { q: "Does it hurt?", a: "No — the scan is painless and non-invasive." },
            { q: "What conditions can be detected?", a: "Fibroadenomas, breast cysts, abscesses, and suspicious masses that may require further investigation." },
            { q: "Do I need a doctor's referral?", a: "A referral is recommended but you can also self-refer for a screening scan." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "thyroid-scan": {
        category: "Women's Imaging",
        title: "Thyroid Scan",
        lead: "Detailed ultrasound assessment of the thyroid gland — evaluating size, structure, nodules, and blood flow.",
        img: "assets/img/Scan/thyroid.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Thyroid Scan",
        overviewText: "Our experienced sonologists at Meera 4D Scans Madurai perform thorough thyroid ultrasound assessments — providing accurate nodule characterisation, size measurement, and Doppler blood flow evaluation.",
        details: [
            { icon: "bi bi-search", heading: "Nodule Assessment", text: "Detailed characterisation of thyroid nodules — size, echogenicity, vascularity, and suspicious features." },
            { icon: "bi bi-rulers", heading: "Gland Size & Volume", text: "Measurement of thyroid lobe dimensions and total gland volume for clinical reference." },
            { icon: "bi bi-broadcast", heading: "Colour Doppler Assessment", text: "Doppler evaluation of thyroid blood flow to assess vascularity and support diagnosis." }
        ],
        tags: ["Thyroid Nodule", "Goitre", "Hashimoto's", "Thyroid Cancer Screening", "Colour Doppler", "Same Day Results"],

        stepGroups: [
            {
                route: "Neck Ultrasound",
                icon: "bi bi-search",
                steps: [
                    "Patient lies supine with a pillow under the shoulders to extend the neck.",
                    "Gel is applied to the front of the neck over the thyroid area.",
                    "Both thyroid lobes and the isthmus are scanned systematically.",
                    "Each lobe is measured in three dimensions and volume is calculated.",
                    "Any nodules are characterised — size, echogenicity, calcification, and margins.",
                    "Colour Doppler assesses vascularity of the gland and nodules.",
                    "Cervical lymph nodes are assessed if indicated.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Accessible Clothing", text: "Wear a low-cut top or shirt with an open collar for easy access to the neck." },
            { icon: "bi bi-x-circle", title: "Remove Neck Jewellery", text: "Remove necklaces and neck chains before your appointment." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally — no special preparation needed." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry earlier thyroid scan or blood test results if available." },
            { icon: "bi bi-clock", title: "Duration", text: "The scan takes approximately 15–30 minutes." }
        ],

        faqs: [
            { q: "Why do I need a thyroid scan?", a: "To evaluate a palpable neck swelling, goitre, thyroid nodule, or abnormal thyroid blood tests." },
            { q: "Is the scan painful?", a: "No — completely painless and non-invasive." },
            { q: "What is a thyroid nodule?", a: "A solid or fluid-filled lump within the thyroid gland — most are benign, but some require further investigation." },
            { q: "Will FNAC be recommended if a nodule is found?", a: "If the nodule has suspicious features, FNAC (fine needle aspiration) may be advised for cytological assessment." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "pelvis-scan": {
        category: "Women's Imaging",
        title: "Pelvis Scan",
        lead: "Comprehensive ultrasound examination of the female pelvis — evaluating the uterus, ovaries, and surrounding structures.",
        img: "assets/img/health/emergency-2.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Pelvis Scan",
        overviewText: "Our pelvic ultrasound at Meera 4D Scans Madurai provides a thorough, detailed assessment of the uterus and ovaries — supporting diagnosis of a wide range of gynaecological conditions.",
        details: [
            { icon: "bi bi-search", heading: "Uterine Assessment", text: "Evaluation of uterine size, shape, endometrial thickness, and detection of fibroids or polyps." },
            { icon: "bi bi-circle", heading: "Ovarian Assessment", text: "Assessment of ovarian size, follicle count, cysts, and detection of PCOS features." },
            { icon: "bi bi-heart", heading: "Endometrial Thickness", text: "Measurement of endometrial lining thickness relevant to fertility and gynaecological health." }
        ],
        tags: ["Pelvic Scan", "Uterus", "Ovaries", "Endometrium", "PCOS", "Fibroids", "Ovarian Cyst"],

        stepGroups: [
            {
                route: "Transabdominal Route",
                icon: "bi bi-person",
                steps: [
                    "Patient lies supine with a full bladder.",
                    "Gel is applied to the lower abdomen and the probe is positioned.",
                    "Uterus is assessed — size, shape, position, and endometrial thickness.",
                    "Both ovaries are visualised and measured.",
                    "Any fibroids, polyps, or cysts are characterised.",
                    "Report is provided on the same day."
                ]
            },
            {
                route: "Transvaginal Route",
                icon: "bi bi-clipboard2-pulse",
                note: "Provides superior detail of the uterus and ovaries — often used as a complementary view.",
                steps: [
                    "Patient is asked to empty the bladder before this part of the scan.",
                    "A covered, gel-coated probe is gently inserted into the vagina.",
                    "Uterus, endometrium, and both ovaries are examined in detail.",
                    "Follicle counts, cysts, and endometrial pathology are documented.",
                    "Report is combined with transabdominal findings."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Full Bladder for Abdominal Scan", text: "Drink 3–4 glasses of water one hour before — a full bladder is essential for the transabdominal component." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier pelvic scan or gynaecology reports." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, easily removable lower clothing." },
            { icon: "bi bi-calendar3", title: "Note Your Cycle Day", text: "Informing the sonologist of your menstrual cycle day helps contextualise ovarian findings." }
        ],

        faqs: [
            { q: "Why do I need a pelvic scan?", a: "To investigate pelvic pain, irregular periods, fibroids, ovarian cysts, PCOS, or fertility concerns." },
            { q: "Is the transvaginal scan uncomfortable?", a: "It may cause mild discomfort but is generally well-tolerated — you can decline this component if preferred." },
            { q: "What is PCOS?", a: "Polycystic ovary syndrome — a condition where the ovaries contain multiple small follicles and hormone imbalance is present." },
            { q: "When is the best time in the cycle for a pelvic scan?", a: "Day 2–5 for follicle baseline; day 8–12 for follicle tracking; anytime for structural assessment." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "sonosalpingogram": {
        category: "Women's Imaging",
        title: "Sonosalpingogram (SSG)",
        lead: "An ultrasound-guided procedure to assess the patency (openness) of the fallopian tubes — an important fertility investigation.",
        img: "assets/img/health/emergency-2.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Sonosalpingogram",
        overviewText: "At Meera 4D Scans Madurai, our sonosalpingogram is performed with precision and care — providing a minimally invasive assessment of tubal patency to support your fertility journey.",
        details: [
            { icon: "bi bi-search", heading: "Tubal Patency Assessment", text: "Ultrasound-guided saline instillation to assess whether the fallopian tubes are open or blocked." },
            { icon: "bi bi-heart", heading: "Fertility Investigation", text: "An important test for women investigating infertility, recurrent miscarriage, or prior to IVF." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A safe, minimally invasive procedure performed under ultrasound guidance with minimal discomfort." }
        ],
        tags: ["Tubal Patency", "Fallopian Tubes", "Infertility", "IVF Investigation", "SSG", "Fertility Test"],

        stepGroups: [
            {
                route: "SSG Procedure",
                icon: "bi bi-search",
                steps: [
                    "Patient lies on the examination table in the lithotomy position.",
                    "A speculum is inserted and the cervix is cleaned.",
                    "A thin catheter is gently passed through the cervix into the uterine cavity.",
                    "Saline solution is slowly instilled through the catheter under ultrasound guidance.",
                    "Fluid flow into and around the fallopian tubes is observed on the monitor.",
                    "Patency (openness) or blockage of each tube is documented.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-calendar3", title: "Best Timing: Day 7–10 of Cycle", text: "Schedule the SSG between day 7 and 10 of your menstrual cycle — after bleeding stops and before ovulation." },
            { icon: "bi bi-capsule", title: "Take Prescribed Medication", text: "Your doctor may prescribe an antibiotic or pain reliever to take before the procedure — follow their instructions." },
            { icon: "bi bi-folder2-open", title: "Bring Referral Letter", text: "Carry your gynaecologist's referral and any fertility investigation reports." },
            { icon: "bi bi-bag", title: "Wear Comfortable Clothing", text: "Wear loose, easily removable lower clothing for the procedure." },
            { icon: "bi bi-people", title: "Bring a Companion", text: "It is advisable to bring someone to accompany you home after the procedure." }
        ],

        faqs: [
            { q: "Is the SSG painful?", a: "Mild cramping is common during the procedure — similar to period pain. Most women tolerate it well." },
            { q: "When should I have an SSG?", a: "Between days 7 and 10 of your menstrual cycle, after bleeding stops and before ovulation." },
            { q: "What does a blocked tube mean for fertility?", a: "Blocked tubes prevent the egg and sperm from meeting — your gynaecologist will discuss treatment options including IVF." },
            { q: "Is SSG safer than HSG (X-ray tubal test)?", a: "SSG uses ultrasound and saline with no radiation — it is a safe and effective alternative to HSG." },
            { q: "When will I get my results?", a: "Same day — tubal patency findings are reported before you leave." }
        ]
    },

    "fibroid-mapping": {
        category: "Women's Imaging",
        title: "Fibroid Mapping",
        lead: "Detailed ultrasound mapping of uterine fibroids — assessing number, size, location, and relationship to the uterine cavity.",
        img: "assets/img/health/emergency-2.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our Fibroid Mapping",
        overviewText: "Our fibroid mapping service at Meera 4D Scans Madurai provides a comprehensive, precise assessment of uterine fibroids — essential for surgical planning and fertility management.",
        details: [
            { icon: "bi bi-rulers", heading: "Size & Number Assessment", text: "Precise measurement of each fibroid — size, location, and number for complete documentation." },
            { icon: "bi bi-geo-alt", heading: "Location Classification", text: "Classification of fibroids as submucosal, intramural, or subserosal — critical for surgical planning." },
            { icon: "bi bi-broadcast", heading: "Vascularity Assessment", text: "Colour Doppler assessment of blood flow within fibroids to support treatment decisions." }
        ],
        tags: ["Uterine Fibroids", "Submucosal", "Intramural", "Subserosal", "Pre-Op Planning", "Fibroid Size"],

        stepGroups: [
            {
                route: "Transabdominal + Transvaginal Ultrasound",
                icon: "bi bi-geo-alt",
                steps: [
                    "Transabdominal scan is performed first with a full bladder.",
                    "Uterus is assessed and all fibroids are identified and numbered.",
                    "Each fibroid is measured in three dimensions.",
                    "Location is classified — submucosal, intramural, or subserosal.",
                    "Relationship to the endometrial cavity and serosa is documented.",
                    "Transvaginal scan is performed for detail of small or cavity fibroids.",
                    "Colour Doppler assesses vascularity of each fibroid.",
                    "A comprehensive mapping report is issued same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Full Bladder", text: "Drink 3–4 glasses of water one hour before for the transabdominal component." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Scan Reports", text: "Carry any earlier pelvic scan or MRI reports for comparison." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, easily removable lower clothing." },
            { icon: "bi bi-clock", title: "Allow Sufficient Time", text: "Fibroid mapping is detailed — allow 30 to 45 minutes for the appointment." }
        ],

        faqs: [
            { q: "Why is fibroid mapping important before surgery?", a: "Precise mapping of size, number, and location helps surgeons plan myomectomy or hysterectomy accurately." },
            { q: "What is the difference between submucosal, intramural, and subserosal fibroids?", a: "Submucosal fibroids grow into the uterine cavity, intramural grow within the wall, and subserosal project outside the uterus." },
            { q: "Can fibroids affect fertility?", a: "Submucosal and large intramural fibroids can impair implantation and fertility — mapping helps guide treatment." },
            { q: "Is the scan painful?", a: "No — ultrasound is painless. Mild discomfort is possible with the transvaginal component." },
            { q: "When will I get my results?", a: "Same day with a detailed mapping report." }
        ]
    },

    // ══════════════════════════════════════════════
    // 3. WHOLE ABDOMEN
    // ══════════════════════════════════════════════

    "whole-abdomen": {
        category: "Abdominal Imaging",
        title: "Whole Abdomen Ultrasound",
        lead: "A comprehensive ultrasound examination of all abdominal organs — liver, gallbladder, pancreas, spleen, kidneys, and bladder.",
        img: "assets/img/newService/Abdomen2.webp",
        overviewImg: "assets/img/newService/abdomen3.webp",
        overviewTitle: "Why Choose Our Whole Abdomen Scan",
        overviewText: "At Meera 4D Scans Madurai, our whole abdomen ultrasound provides a thorough, high-resolution assessment of all abdominal organs — delivering accurate diagnostic information with same-day results.",
        details: [
            { icon: "bi bi-search", heading: "Liver & Biliary System", text: "Assessment of liver size, echogenicity, gallbladder, bile ducts, and detection of gallstones or fatty liver." },
            { icon: "bi bi-activity", heading: "Kidneys & Urinary Tract", text: "Evaluation of kidney size, cortical echogenicity, collecting system, and bladder for urological conditions." },
            { icon: "bi bi-clipboard2-pulse", heading: "Pancreas & Spleen", text: "Assessment of pancreas echogenicity and spleen size — important for metabolic and haematological conditions." }
        ],
        tags: ["Liver", "Gallbladder", "Gallstones", "Kidney", "Pancreas", "Spleen", "Fatty Liver", "Abdominal Pain"],

        stepGroups: [
            {
                route: "Abdominal Ultrasound",
                icon: "bi bi-search",
                steps: [
                    "Patient lies supine and gel is applied to the abdomen.",
                    "Liver is assessed — size, echogenicity, surface, and for any focal lesions.",
                    "Gallbladder and bile ducts are examined for stones or dilatation.",
                    "Pancreas is assessed for size and echogenicity.",
                    "Spleen is measured and assessed for enlargement.",
                    "Both kidneys are examined — size, cortex, collecting system, and for stones.",
                    "Bladder is assessed for wall thickening, stones, or masses.",
                    "Aorta and free fluid in the abdomen are noted.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-moon", title: "Fast for 4–6 Hours", text: "Avoid eating or drinking (except water) for 4–6 hours before the scan — fasting reduces bowel gas and improves gallbladder visualisation." },
            { icon: "bi bi-droplet", title: "Full Bladder for Pelvic Component", text: "If the pelvic organs are to be assessed, drink 2–3 glasses of water 30 minutes before." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier abdominal scan, blood test, or CT reports if available." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, two-piece clothing for easy abdominal access." },
            { icon: "bi bi-capsule", title: "Continue Medications", text: "Take your regular medications as usual unless advised otherwise by your doctor." }
        ],

        faqs: [
            { q: "Why do I need to fast before a whole abdomen scan?", a: "Fasting ensures the gallbladder is distended and reduces bowel gas — this significantly improves image quality." },
            { q: "What conditions can be detected?", a: "Fatty liver, gallstones, liver cysts or tumours, kidney stones, splenomegaly, pancreatic abnormalities, and free fluid." },
            { q: "Is the scan painful?", a: "No — completely painless and non-invasive." },
            { q: "Can kidney stones be seen on ultrasound?", a: "Yes — kidney and upper ureter stones are clearly visible; lower ureter and bladder stones may require additional imaging." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    // ══════════════════════════════════════════════
    // 4. USG LOCAL PARTS
    // ══════════════════════════════════════════════

    "usg-local-parts": {
        category: "Diagnostic Imaging",
        title: "USG — Local Parts",
        lead: "Focused ultrasound examination of specific anatomical regions — neck, soft tissue, scrotum, groin, or any localised area of clinical concern.",
        img: "assets/img/newService/usg1.webp",
        overviewImg: "assets/img/newService/usg2.webp",
        overviewTitle: "Why Choose Our Local Parts USG",
        overviewText: "Our focused ultrasound assessment of local parts at Meera 4D Scans Madurai provides a precise, targeted evaluation of any specific region — delivering clear diagnostic information quickly.",
        details: [
            { icon: "bi bi-search", heading: "Soft Tissue Assessment", text: "Evaluation of lumps, swellings, and soft tissue masses in any localised anatomical region." },
            { icon: "bi bi-person-check", heading: "Scrotal Ultrasound", text: "Assessment of testicular size, echogenicity, epididymis, and detection of varicocele or hydrocele." },
            { icon: "bi bi-geo-alt", heading: "Neck & Lymph Node Scan", text: "Ultrasound of neck structures including lymph nodes, salivary glands, and soft tissue masses." }
        ],
        tags: ["Soft Tissue Lump", "Scrotal Scan", "Lymph Node", "Neck Swelling", "Groin Swelling", "Local USG"],

        stepGroups: [
            {
                route: "Focused Ultrasound",
                icon: "bi bi-geo-alt",
                steps: [
                    "The area of clinical concern is exposed and gel is applied.",
                    "A high-frequency probe is used for detailed assessment of superficial structures.",
                    "The lump, swelling, or mass is characterised — size, shape, margins, and echogenicity.",
                    "Colour Doppler assesses vascularity within the lesion.",
                    "Surrounding structures and lymph nodes are also assessed.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Expose the Area", text: "Wear clothing that allows easy access to the area being scanned." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier scans or investigations of the same area." },
            { icon: "bi bi-droplet", title: "Full Bladder for Scrotal Scan", text: "No special preparation needed for scrotal scans — attend comfortably." },
            { icon: "bi bi-file-text", title: "Bring Referral Letter", text: "Carry your doctor's referral describing the area of concern." }
        ],

        faqs: [
            { q: "What areas can be scanned under local parts USG?", a: "Any accessible area — neck, axilla, groin, scrotum, limb soft tissue, abdominal wall, and more." },
            { q: "Is the scrotal scan painful?", a: "No — completely painless. The probe is applied externally with gentle pressure." },
            { q: "What if the scan shows a suspicious lump?", a: "Further investigation such as FNAC or biopsy may be recommended, which we also offer at Meera 4D Scans." },
            { q: "Can lymph node swellings be assessed?", a: "Yes — cervical, axillary, and inguinal lymph nodes are clearly assessed for size and suspicious features." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    // ══════════════════════════════════════════════
    // 5. ADULT ECHO
    // ══════════════════════════════════════════════

    "adult-echo": {
        category: "Cardiac Imaging",
        title: "Adult Echocardiography (ECHO)",
        lead: "Detailed ultrasound imaging of the adult heart — assessing chambers, valves, wall motion, and cardiac function.",
        img: "assets/img/newService/echo1.webp",
        overviewImg: "assets/img/newService/echo2.webp",
        overviewTitle: "Why Choose Our Adult Echo",
        overviewText: "Our adult echocardiography service at Meera 4D Scans Madurai provides a comprehensive cardiac assessment — using 2D, M-mode, and Doppler techniques to deliver a detailed report of your heart health.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "Cardiac Chambers & Valves", text: "Assessment of all four cardiac chambers, valve morphology, and function including regurgitation and stenosis." },
            { icon: "bi bi-activity", heading: "Wall Motion Analysis", text: "Evaluation of left ventricular wall motion and ejection fraction for assessment of cardiac function." },
            { icon: "bi bi-broadcast", heading: "Doppler Blood Flow", text: "Colour and spectral Doppler assessment of blood flow across valves and through cardiac chambers." }
        ],
        tags: ["Echocardiography", "Ejection Fraction", "Valve Disease", "LV Function", "Cardiac Assessment", "Heart Failure"],

        stepGroups: [
            {
                route: "2D Echocardiography",
                icon: "bi bi-heart-pulse",
                steps: [
                    "Patient lies in the left lateral decubitus position on the examination table.",
                    "ECG leads are attached for simultaneous heart rhythm recording.",
                    "Gel is applied to the chest and the probe is positioned.",
                    "Standard views — parasternal, apical, subcostal — are obtained.",
                    "All four chambers, valves, and wall motion are assessed.",
                    "Ejection fraction (EF) is calculated.",
                    "Colour and spectral Doppler assess blood flow across valves.",
                    "Pericardium and any effusion are documented.",
                    "Detailed cardiac report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Accessible Clothing", text: "Wear a loose top or shirt that can be easily opened for chest access." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Echo Reports", text: "Carry any earlier echocardiography or cardiac reports for comparison." },
            { icon: "bi bi-capsule", title: "Continue Heart Medications", text: "Take all your regular cardiac medications as prescribed unless instructed otherwise." },
            { icon: "bi bi-clock", title: "Allow 30–45 Minutes", text: "A full echocardiogram takes approximately 30 to 45 minutes." }
        ],

        faqs: [
            { q: "Who needs an echocardiogram?", a: "Patients with chest pain, breathlessness, heart murmur, palpitations, or known cardiac conditions requiring monitoring." },
            { q: "What is ejection fraction?", a: "Ejection fraction (EF) measures how much blood the left ventricle pumps out with each beat — normal is above 55%." },
            { q: "Is the scan painful?", a: "No — completely painless and non-invasive." },
            { q: "What conditions can be diagnosed?", a: "Valve disease, cardiomyopathy, heart failure, pericardial effusion, and congenital heart defects." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "ecg-holter": {
        category: "Cardiac Imaging",
        title: "ECG & Holter Monitoring",
        lead: "Continuous heart rhythm monitoring to detect arrhythmias, palpitations, and irregular heartbeat patterns.",
        img: "assets/img/health/laboratory-3.webp",
        overviewImg: "assets/img/health/laboratory-3.webp",
        overviewTitle: "Why Choose Our ECG & Holter Service",
        overviewText: "Our cardiac monitoring services provide accurate, detailed heart rhythm analysis with quick turnaround — helping doctors make timely and informed treatment decisions.",
        details: [
            { icon: "bi bi-heart-pulse", heading: "12-Lead ECG", text: "Standard resting electrocardiogram to assess heart rhythm, rate, and electrical activity." },
            { icon: "bi bi-clock-history", heading: "24–48 Hour Holter", text: "Ambulatory ECG monitoring over 24 to 48 hours to capture intermittent arrhythmias." },
            { icon: "bi bi-graph-up-arrow", heading: "Arrhythmia Detection", text: "Comprehensive analysis of heart rhythm irregularities including atrial fibrillation and ectopics." }
        ],
        tags: ["Atrial Fibrillation", "Palpitations", "Bradycardia", "Tachycardia", "Syncope Evaluation", "Pre-Op Screening"],

        stepGroups: [
            {
                route: "Resting 12-Lead ECG",
                icon: "bi bi-heart-pulse",
                steps: [
                    "Patient lies flat on the examination table.",
                    "Ten electrode stickers are placed on the chest, arms, and legs.",
                    "A 12-lead ECG tracing is recorded over 10 seconds.",
                    "Heart rhythm, rate, axis, and any conduction abnormalities are interpreted.",
                    "Report is provided immediately."
                ]
            },
            {
                route: "24–48 Hour Holter Monitor",
                icon: "bi bi-clock-history",
                note: "Worn continuously to capture intermittent rhythm abnormalities during daily activities.",
                steps: [
                    "Electrode stickers are applied to the chest.",
                    "A small portable Holter recorder is attached and explained.",
                    "Patient wears the device for 24 or 48 hours during normal daily activities.",
                    "Patient keeps a diary of symptoms and activities during monitoring.",
                    "Device is returned and data is downloaded for analysis.",
                    "Full rhythm analysis report is provided."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Accessible Clothing", text: "For ECG and Holter fitting, wear a loose top that can be easily opened for chest electrode placement." },
            { icon: "bi bi-x-circle", title: "No Creams on Chest", text: "Avoid applying lotions, oils, or powders to the chest on the day of the appointment — they reduce electrode adhesion." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally." },
            { icon: "bi bi-capsule", title: "Continue Medications", text: "Take all regular medications as prescribed — do not stop them before the test." },
            { icon: "bi bi-journal-text", title: "Keep a Symptom Diary (Holter)", text: "During Holter monitoring, note the time and nature of any symptoms — palpitations, dizziness, or chest discomfort." }
        ],

        faqs: [
            { q: "What is the difference between an ECG and a Holter monitor?", a: "An ECG records heart rhythm for 10 seconds at rest; a Holter records continuously for 24–48 hours to capture intermittent symptoms." },
            { q: "Can I shower with the Holter monitor on?", a: "No — the device must be kept dry. Avoid showering, bathing, or swimming during the monitoring period." },
            { q: "What activities should I avoid during Holter monitoring?", a: "Avoid strong magnets, metal detectors, and electric blankets — otherwise carry on your normal daily routine." },
            { q: "When will I get Holter results?", a: "After the device is returned and analysed — results are typically available within 24 to 48 hours." },
            { q: "Who needs Holter monitoring?", a: "Patients with palpitations, unexplained dizziness, syncope, or suspected atrial fibrillation that was not captured on a resting ECG." }
        ]
    },

    // ══════════════════════════════════════════════
    // 6. DOPPLER STUDIES
    // ══════════════════════════════════════════════

    "upper-limb-arterial-doppler": {
        category: "Doppler Studies",
        title: "Upper Limb Arterial Doppler",
        lead: "Ultrasound Doppler assessment of the arterial blood flow in the upper limb — detecting blockages, stenosis, and circulatory problems.",
        img: "assets/img/newService/doppler/Arterial2.webp",
        overviewImg: "assets/img/newService/doppler/Arterial1.webp",
        overviewTitle: "Why Choose Our Upper Limb Arterial Doppler",
        overviewText: "Our upper limb arterial Doppler at Meera 4D Scans Madurai provides a precise assessment of arm arterial blood flow — identifying peripheral arterial disease, stenosis, and occlusions with same-day results.",
        details: [
            { icon: "bi bi-broadcast", heading: "Arterial Flow Mapping", text: "Colour and spectral Doppler mapping of upper limb arteries from subclavian to radial and ulnar arteries." },
            { icon: "bi bi-search", heading: "Stenosis Detection", text: "Identification of arterial stenosis, occlusion, or plaque causing reduced blood flow to the arm." },
            { icon: "bi bi-activity", heading: "ABI Assessment", text: "Ankle-brachial index equivalent assessment for upper limb peripheral vascular disease evaluation." }
        ],
        tags: ["Upper Limb Arteries", "Peripheral Arterial Disease", "Stenosis", "Occlusion", "Subclavian Artery", "Brachial Artery"],

        stepGroups: [
            {
                route: "Arterial Doppler — Both Arms",
                icon: "bi bi-broadcast",
                steps: [
                    "Patient lies supine with the arm extended alongside the body.",
                    "Gel is applied and the probe is positioned at the subclavian artery.",
                    "Colour Doppler maps blood flow from subclavian to brachial, radial, and ulnar arteries.",
                    "Spectral waveforms are recorded and resistance indices calculated.",
                    "Any areas of stenosis, occlusion, or plaque are identified and measured.",
                    "Blood pressure measurements may be taken at multiple levels.",
                    "Both arms are assessed and compared.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Short-Sleeved Clothing", text: "Wear a short-sleeved or sleeveless top for easy access to both arms." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-x-circle", title: "Avoid Smoking Before the Test", text: "Do not smoke for at least 2 hours before the scan — smoking causes arterial constriction that may affect results." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier vascular Doppler or angiography reports." },
            { icon: "bi bi-capsule", title: "Continue Medications", text: "Take all regular medications as prescribed." }
        ],

        faqs: [
            { q: "Why is an upper limb arterial Doppler ordered?", a: "For arm pain, coldness, numbness, pulse difference between arms, or suspected peripheral arterial disease." },
            { q: "Is the scan painful?", a: "No — completely painless and non-invasive." },
            { q: "What is subclavian steal syndrome?", a: "A condition where a blocked subclavian artery causes blood to be diverted from the brain — Doppler can detect this." },
            { q: "How long does the scan take?", a: "Approximately 30 to 45 minutes for both arms." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "upper-limb-venous-doppler": {
        category: "Doppler Studies",
        title: "Upper Limb Venous Doppler",
        lead: "Doppler ultrasound of the upper limb veins to detect deep vein thrombosis (DVT), venous obstruction, and reflux.",
        img: "assets/img/newService/doppler/Venous2.webp",
        overviewImg: "assets/img/newService/doppler/Venous1.webp",
        overviewTitle: "Why Choose Our Upper Limb Venous Doppler",
        overviewText: "At Meera 4D Scans Madurai, our upper limb venous Doppler provides accurate, real-time detection of DVT and venous obstruction — critical for timely treatment and prevention of serious complications.",
        details: [
            { icon: "bi bi-broadcast", heading: "DVT Detection", text: "Assessment of upper limb deep veins for thrombosis — compression, flow, and augmentation testing." },
            { icon: "bi bi-search", heading: "Venous Obstruction", text: "Detection of extrinsic venous compression or obstruction causing upper limb swelling or pain." },
            { icon: "bi bi-activity", heading: "Venous Reflux", text: "Assessment of venous valve competence and reflux in upper limb venous insufficiency." }
        ],
        tags: ["Upper Limb DVT", "Venous Thrombosis", "Venous Obstruction", "Arm Swelling", "PICC Line Check", "Venous Reflux"],

        stepGroups: [
            {
                route: "Venous Doppler — Upper Limb",
                icon: "bi bi-broadcast",
                steps: [
                    "Patient lies supine with the arm slightly abducted.",
                    "Gel is applied and the probe is positioned at the subclavian vein.",
                    "Deep veins are assessed — subclavian, axillary, brachial, and forearm veins.",
                    "Compression test is performed — veins are compressed to assess for thrombus.",
                    "Colour and spectral Doppler confirm flow patency and augmentation.",
                    "Any filling defects or non-compressible segments are documented.",
                    "PICC line position and surrounding veins are assessed if indicated.",
                    "Report is provided on the same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Short-Sleeved Clothing", text: "Wear a short-sleeved or sleeveless top for easy access to both arms and axilla." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier DVT scan or venous reports." },
            { icon: "bi bi-capsule", title: "Continue Medications", text: "Continue anticoagulants as prescribed — do not stop them before the scan." },
            { icon: "bi bi-file-text", title: "Bring Referral Letter", text: "Carry your doctor's referral with clinical details for an accurate assessment." }
        ],

        faqs: [
            { q: "What symptoms suggest upper limb DVT?", a: "Arm swelling, pain, redness, warmth, and visible veins — particularly after PICC line insertion or IV cannulation." },
            { q: "Is upper limb DVT serious?", a: "Yes — it can cause pulmonary embolism. Early detection and treatment are important." },
            { q: "Is the scan painful?", a: "No — painless. Gentle compression of the veins is performed but is well-tolerated." },
            { q: "How long does the scan take?", a: "Approximately 20 to 30 minutes." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "lower-limb-arterial-doppler": {
        category: "Doppler Studies",
        title: "Lower Limb Arterial Doppler",
        lead: "Comprehensive Doppler assessment of lower limb arteries — detecting peripheral arterial disease, stenosis, and leg circulation problems.",
        img: "assets/img/newService/doppler/Lowerl1.webp",
        overviewImg: "assets/img/newService/doppler/lower2.webp",
        overviewTitle: "Why Choose Our Lower Limb Arterial Doppler",
        overviewText: "Our lower limb arterial Doppler at Meera 4D Scans Madurai provides a thorough assessment of leg arterial circulation — essential for peripheral arterial disease diagnosis and pre-surgical planning.",
        details: [
            { icon: "bi bi-broadcast", heading: "Arterial Flow Mapping", text: "Detailed Doppler mapping from iliac arteries to the pedal arteries of both lower limbs." },
            { icon: "bi bi-search", heading: "Stenosis & Occlusion", text: "Detection of arterial stenosis, calcification, and occlusion causing leg pain, claudication, or non-healing wounds." },
            { icon: "bi bi-activity", heading: "ABI Measurement", text: "Ankle-brachial pressure index calculation for peripheral arterial disease risk stratification." }
        ],
        tags: ["Peripheral Arterial Disease", "Claudication", "ABI", "Femoral Artery", "Popliteal Artery", "Leg Circulation"],

        stepGroups: [
            {
                route: "Arterial Doppler — Both Legs",
                icon: "bi bi-broadcast",
                steps: [
                    "Patient lies supine and gel is applied to the groin.",
                    "Colour Doppler maps blood flow from iliac to femoral, popliteal, and tibial arteries.",
                    "Spectral waveforms are recorded and peak systolic velocities noted.",
                    "Areas of stenosis, calcification, or occlusion are identified.",
                    "Ankle-brachial index (ABI) is calculated using arm and ankle pressures.",
                    "Both limbs are assessed and findings compared.",
                    "Report with ABI values and arterial map is provided same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Loose Clothing", text: "Wear shorts or loose trousers that can be rolled up for easy leg access." },
            { icon: "bi bi-x-circle", title: "Avoid Smoking Before the Test", text: "Do not smoke for at least 2 hours before the scan." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Vascular Reports", text: "Carry any earlier Doppler, angiography, or vascular surgery reports." },
            { icon: "bi bi-clock", title: "Allow 45–60 Minutes", text: "A full bilateral lower limb arterial Doppler takes 45 to 60 minutes." }
        ],

        faqs: [
            { q: "What is claudication?", a: "Leg pain or cramping on walking that is relieved by rest — a classic symptom of peripheral arterial disease." },
            { q: "What is a normal ABI?", a: "An ABI of 0.9 to 1.3 is normal. Below 0.9 suggests peripheral arterial disease." },
            { q: "Is the scan painful?", a: "The scan itself is painless. Blood pressure cuffs are applied to the legs which may cause brief discomfort." },
            { q: "What happens if severe arterial disease is found?", a: "You will be referred to a vascular surgeon for further evaluation and management." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    "lower-limb-venous-doppler": {
        category: "Doppler Studies",
        title: "Lower Limb Venous Doppler",
        lead: "Doppler ultrasound of the lower limb veins — the gold standard for detection of deep vein thrombosis (DVT) and venous insufficiency.",
        img: "assets/img/newService/doppler/Limb1.webp",
        overviewImg: "assets/img/newService/doppler/lim2.webp",
        overviewTitle: "Why Choose Our Lower Limb Venous Doppler",
        overviewText: "At Meera 4D Scans Madurai, our lower limb venous Doppler is the gold standard for DVT detection — providing accurate, real-time assessment of deep and superficial veins for immediate clinical action.",
        details: [
            { icon: "bi bi-broadcast", heading: "DVT Diagnosis", text: "Compression and Doppler assessment of deep veins from femoral to calf for thrombosis detection." },
            { icon: "bi bi-search", heading: "Varicose Vein Assessment", text: "Evaluation of superficial venous reflux and incompetent perforators causing varicose veins." },
            { icon: "bi bi-activity", heading: "Chronic Venous Insufficiency", text: "Assessment of chronic venous insufficiency and post-thrombotic syndrome affecting lower limb circulation." }
        ],
        tags: ["DVT", "Deep Vein Thrombosis", "Varicose Veins", "Venous Insufficiency", "Leg Swelling", "Post-Thrombotic Syndrome"],

        stepGroups: [
            {
                route: "Venous Doppler — Both Legs",
                icon: "bi bi-broadcast",
                steps: [
                    "Patient lies supine and the leg is slightly externally rotated.",
                    "Gel is applied from the groin and the probe is positioned.",
                    "Deep veins are assessed — femoral, popliteal, and calf veins.",
                    "Compression test confirms vein compressibility — non-compressible veins indicate DVT.",
                    "Colour Doppler confirms flow and augmentation responses.",
                    "Superficial veins (great and small saphenous) are assessed for reflux.",
                    "Perforator veins are identified if varicose veins are present.",
                    "Both legs are assessed and a detailed report issued same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Loose Clothing", text: "Wear shorts or easily rolled-up trousers for full leg access." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-capsule", title: "Continue Anticoagulants", text: "Do not stop blood thinners before the scan — continue as prescribed." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier DVT scan or venous reports." },
            { icon: "bi bi-file-text", title: "Bring Referral with Clinical Details", text: "A referral noting symptom duration and clinical findings helps focus the assessment." }
        ],

        faqs: [
            { q: "What are the symptoms of DVT?", a: "Leg swelling, pain, warmth, redness, and prominent superficial veins — particularly after surgery, long travel, or immobility." },
            { q: "Is DVT dangerous?", a: "Yes — a clot can break off and travel to the lungs (pulmonary embolism), which can be life-threatening." },
            { q: "Is the scan painful?", a: "Painless. Gentle leg compression is performed but is generally well-tolerated." },
            { q: "Can varicose veins be assessed at the same time?", a: "Yes — superficial venous reflux and varicose vein mapping can be performed during the same appointment." },
            { q: "When will I get my results?", a: "Same day — urgent findings are communicated immediately to your referring doctor." }
        ]
    },

    "carotid-doppler": {
        category: "Doppler Studies",
        title: "Carotid Doppler",
        lead: "Ultrasound Doppler assessment of the carotid arteries — detecting plaque, stenosis, and blood flow abnormalities that may increase stroke risk.",
        img: "assets/img/newService/doppler/Carotid1.webp",
        overviewImg: "assets/img/newService/doppler/Carotid2.webp",
        overviewTitle: "Why Choose Our Carotid Doppler",
        overviewText: "Our carotid Doppler at Meera 4D Scans Madurai provides a precise assessment of carotid artery health — identifying atherosclerotic plaque and stenosis that increases the risk of stroke and TIA.",
        details: [
            { icon: "bi bi-broadcast", heading: "Plaque Detection", text: "Identification of atherosclerotic plaque in the carotid arteries — size, morphology, and stability assessment." },
            { icon: "bi bi-activity", heading: "IMT Measurement", text: "Intima-media thickness measurement — an important early marker of cardiovascular disease risk." },
            { icon: "bi bi-search", heading: "Stenosis Grading", text: "Spectral Doppler grading of carotid stenosis severity — essential for stroke risk stratification." }
        ],
        tags: ["Carotid Stenosis", "Atherosclerosis", "IMT", "Stroke Risk", "Plaque", "TIA Assessment"],

        stepGroups: [
            {
                route: "Carotid Doppler Ultrasound",
                icon: "bi bi-broadcast",
                steps: [
                    "Patient lies supine with the neck slightly extended and head turned to one side.",
                    "Gel is applied to the neck and the probe is positioned over the carotid artery.",
                    "Common carotid artery, carotid bulb, ICA, and ECA are systematically assessed.",
                    "Intima-media thickness (IMT) is measured at the common carotid artery.",
                    "Any plaques are identified — location, size, echogenicity, and surface.",
                    "Colour and spectral Doppler assess flow velocities and stenosis grading.",
                    "Vertebral arteries are assessed for flow direction.",
                    "Both sides are examined and the report is provided same day."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-bag", title: "Wear Low-Neck Clothing", text: "Wear a low-cut or open-collar top for easy access to both sides of the neck." },
            { icon: "bi bi-x-circle", title: "Remove Neck Jewellery", text: "Remove necklaces and chains before your appointment." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-capsule", title: "Continue Medications", text: "Take all regular medications including blood pressure and cholesterol drugs as prescribed." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Reports", text: "Carry any earlier carotid Doppler, MRI, or cardiac reports if available." }
        ],

        faqs: [
            { q: "Who needs a carotid Doppler?", a: "Patients with TIA, stroke, carotid bruit, hypertension, diabetes, high cholesterol, or cardiovascular disease risk factors." },
            { q: "What is IMT and why is it important?", a: "Intima-media thickness is the wall thickness of the carotid artery — increased IMT is an early marker of atherosclerosis." },
            { q: "What degree of stenosis is significant?", a: "Stenosis above 50% is clinically significant; above 70% typically requires intervention." },
            { q: "Is the scan painful?", a: "No — completely painless and non-invasive." },
            { q: "When will I get my results?", a: "Same day at Meera 4D Scans Madurai." }
        ]
    },

    // ══════════════════════════════════════════════
    // 7. FETAL INTERVENTIONS
    // ══════════════════════════════════════════════

    "cvs": {
        category: "Fetal Interventions",
        title: "Chorionic Villus Sampling (CVS)",
        lead: "An ultrasound-guided procedure to obtain a small sample of placental tissue for chromosomal and genetic diagnosis.",
        img: "assets/img/newService/f/cvs2.webp",
        overviewImg: "assets/img/newService/f/cvs1.webp",
        overviewTitle: "Why Choose Our CVS Service",
        overviewText: "At Meera 4D Scans Madurai, CVS is performed by experienced fetal medicine specialists under continuous ultrasound guidance — ensuring safety, accuracy, and compassionate care throughout the procedure.",
        details: [
            { icon: "bi bi-search", heading: "Chromosomal Diagnosis", text: "Obtains placental tissue for definitive chromosomal analysis — diagnosing Down syndrome and other genetic conditions." },
            { icon: "bi bi-shield-check", heading: "Ultrasound Guided", text: "Performed under continuous ultrasound guidance for precise needle placement and maximum safety." },
            { icon: "bi bi-clock-history", heading: "Early Diagnosis", text: "Available from 10 to 13 weeks — provides earlier answers compared to amniocentesis." }
        ],
        tags: ["Chromosomal Analysis", "Down Syndrome Diagnosis", "Genetic Testing", "10–13 Weeks", "Fetal Intervention", "CVS"],

        stepGroups: [
            {
                route: "Transabdominal CVS",
                icon: "bi bi-shield-check",
                steps: [
                    "Pre-procedure counselling is provided and consent is obtained.",
                    "Ultrasound confirms fetal viability and placental position.",
                    "The abdomen is cleaned with antiseptic solution.",
                    "A fine needle is inserted through the abdomen under continuous ultrasound guidance.",
                    "A small sample of placental (chorionic villus) tissue is aspirated.",
                    "The needle is withdrawn and fetal heart rate is confirmed.",
                    "The sample is sent to the genetics laboratory for analysis.",
                    "Post-procedure rest and instructions are provided."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2 glasses of water 30 minutes before — helps with ultrasound guidance." },
            { icon: "bi bi-folder2-open", title: "Bring All Scan Reports", text: "Carry your NT scan, blood test results, and referral letter." },
            { icon: "bi bi-people", title: "Bring a Companion", text: "It is strongly advised to bring someone to accompany you for support and to drive you home." },
            { icon: "bi bi-bag", title: "Wear Comfortable Clothing", text: "Wear loose two-piece clothing for abdominal access." },
            { icon: "bi bi-calendar3", title: "Confirm Gestational Age", text: "CVS is performed between 10 and 13 weeks — confirm your gestational age before booking." }
        ],

        faqs: [
            { q: "Who is CVS recommended for?", a: "Women with high-risk NT scan results, abnormal combined screening, advanced maternal age, or a family history of chromosomal conditions." },
            { q: "What is the risk of miscarriage?", a: "The procedure-related miscarriage risk is approximately 0.5–1% — your specialist will discuss this in detail during counselling." },
            { q: "When will results be available?", a: "Rapid FISH results are available within 2–3 days; full karyotype results take 2–3 weeks." },
            { q: "Is CVS more accurate than blood screening?", a: "Yes — CVS provides a definitive chromosomal diagnosis, unlike screening tests which only estimate risk." },
            { q: "What should I do after the procedure?", a: "Rest for the remainder of the day, avoid strenuous activity, and contact your doctor if you experience cramping, bleeding, or fluid loss." }
        ]
    },

    "amniocentesis": {
        category: "Fetal Interventions",
        title: "Amniocentesis",
        lead: "An ultrasound-guided procedure to sample amniotic fluid for definitive chromosomal and genetic diagnosis of the fetus.",
        img: "assets/img/newService/f/amni1.webp",
        overviewImg: "assets/img/newService/f/amni2.webp",
        overviewTitle: "Why Choose Our Amniocentesis Service",
        overviewText: "Our amniocentesis is performed by experienced fetal medicine specialists at Meera 4D Scans Madurai — under continuous ultrasound guidance with meticulous attention to safety and patient comfort.",
        details: [
            { icon: "bi bi-search", heading: "Definitive Chromosomal Testing", text: "Amniotic fluid analysis provides definitive chromosomal karyotype — the gold standard for prenatal diagnosis." },
            { icon: "bi bi-shield-check", heading: "Continuous Ultrasound Guidance", text: "Real-time ultrasound monitoring throughout the procedure for precise and safe needle placement." },
            { icon: "bi bi-clipboard2-pulse", heading: "Genetic Disorder Diagnosis", text: "Diagnosis of chromosomal abnormalities, single gene disorders, and neural tube defects." }
        ],
        tags: ["Amniocentesis", "Chromosomal Karyotype", "Genetic Diagnosis", "15–20 Weeks", "Prenatal Diagnosis", "Fetal Intervention"],

        stepGroups: [
            {
                route: "Amniocentesis Procedure",
                icon: "bi bi-shield-check",
                steps: [
                    "Pre-procedure counselling is provided and consent is obtained.",
                    "Ultrasound confirms fetal position and identifies a safe pocket of amniotic fluid.",
                    "The abdomen is cleaned with antiseptic solution.",
                    "A fine needle is inserted through the abdomen under continuous ultrasound guidance.",
                    "Approximately 15–20 ml of amniotic fluid is withdrawn.",
                    "The needle is removed and fetal heart rate is confirmed post-procedure.",
                    "The fluid sample is sent to the genetics laboratory.",
                    "Post-procedure rest and monitoring instructions are provided."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2 glasses of water 30 minutes before — assists with ultrasound guidance." },
            { icon: "bi bi-folder2-open", title: "Bring All Previous Reports", text: "Carry NT scan, combined screening results, and your doctor's referral letter." },
            { icon: "bi bi-people", title: "Bring a Companion", text: "Strongly advised — bring someone for support and to drive you home after the procedure." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose two-piece clothing for abdominal access." },
            { icon: "bi bi-calendar3", title: "Confirm Gestational Age", text: "Amniocentesis is performed between 15 and 20 weeks — confirm your dates before booking." }
        ],

        faqs: [
            { q: "How is amniocentesis different from CVS?", a: "CVS is done at 10–13 weeks and samples placental tissue; amniocentesis is done at 15–20 weeks and samples amniotic fluid." },
            { q: "What is the miscarriage risk?", a: "Approximately 0.5% — your specialist will discuss this during pre-procedure counselling." },
            { q: "When will results be available?", a: "Rapid FISH results in 2–3 days; full karyotype in 2–3 weeks." },
            { q: "Is the procedure painful?", a: "Most women feel brief pressure or mild cramps — the needle insertion is quick and well-tolerated." },
            { q: "What after-care is needed?", a: "Rest for the remainder of the day, avoid strenuous activity, and contact your doctor if you experience cramping, bleeding, or fluid leakage." }
        ]
    },

    "multifetal-reduction": {
        category: "Fetal Interventions",
        title: "Multifetal Pregnancy Reduction",
        lead: "An ultrasound-guided specialist procedure to reduce the number of fetuses in a higher-order multiple pregnancy.",
        img: "assets/img/newService/f/mul1.webp",
        overviewImg: "assets/img/newService/f/mul2.webp",
        overviewTitle: "Why Choose Our Multifetal Reduction Service",
        overviewText: "Multifetal pregnancy reduction is a delicate, specialist procedure performed by our experienced fetal medicine team at Meera 4D Scans Madurai — under continuous ultrasound guidance with compassionate counselling support.",
        details: [
            { icon: "bi bi-shield-check", heading: "Specialist Procedure", text: "Performed by experienced fetal medicine specialists to reduce risks associated with higher-order multiple pregnancies." },
            { icon: "bi bi-broadcast", heading: "Ultrasound Guided", text: "Continuous ultrasound guidance throughout the procedure for precision and safety." },
            { icon: "bi bi-person-hearts", heading: "Counselling & Support", text: "Comprehensive pre- and post-procedure counselling to support families through this difficult decision." }
        ],
        tags: ["Multiple Pregnancy", "Triplets", "Higher Order Multiples", "Fetal Reduction", "IVF Complication", "Specialist Procedure"],

        stepGroups: [
            {
                route: "Multifetal Reduction Procedure",
                icon: "bi bi-shield-check",
                steps: [
                    "Comprehensive pre-procedure counselling and consent session is conducted.",
                    "Detailed ultrasound survey confirms fetal number, viability, and chorionicity.",
                    "The procedure is planned — the fetus or fetuses to be reduced are selected based on position and findings.",
                    "The abdomen is cleaned and the procedure is performed under continuous ultrasound guidance.",
                    "Potassium chloride is injected into the selected fetal heart under direct vision.",
                    "Cessation of cardiac activity is confirmed on ultrasound.",
                    "Remaining fetuses and their heartbeats are confirmed.",
                    "Post-procedure monitoring and follow-up scan instructions are provided."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-people", title: "Attend with Your Partner or Support Person", text: "This is an emotionally significant procedure — it is strongly advised to attend with a partner or trusted companion." },
            { icon: "bi bi-folder2-open", title: "Bring All Scan and IVF Reports", text: "Carry all pregnancy scans, IVF documentation, and your specialist's referral letter." },
            { icon: "bi bi-droplet", title: "Moderately Full Bladder", text: "Drink 2 glasses of water 30 minutes before the procedure." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose, two-piece clothing for abdominal access." },
            { icon: "bi bi-calendar3", title: "Optimal Timing: 11–14 Weeks", text: "The procedure is ideally performed at 11–14 weeks when fetal structures are well-defined." }
        ],

        faqs: [
            { q: "Why is multifetal reduction considered?", a: "Higher-order multiple pregnancies (triplets or more) carry significant risks of prematurity, low birth weight, and maternal complications — reduction improves outcomes for the remaining babies." },
            { q: "Is this an emotionally difficult decision?", a: "Yes — it is a deeply personal decision. Our team provides compassionate counselling before and after the procedure." },
            { q: "What is the procedure risk?", a: "There is a small risk of losing the entire pregnancy — your specialist will discuss all risks in detail during counselling." },
            { q: "When will I have a follow-up scan?", a: "A follow-up scan is arranged within 1–2 weeks to confirm the ongoing pregnancy." },
            { q: "Is this procedure available at Meera 4D Scans?", a: "Yes — performed by our experienced fetal medicine specialist team with full counselling support." }
        ]
    },

    // ══════════════════════════════════════════════
    // 8. GENERAL INTERVENTIONS
    // ══════════════════════════════════════════════

    "fnac": {
        category: "General Interventions",
        title: "FNAC — Fine Needle Aspiration Cytology",
        lead: "Ultrasound-guided fine needle aspiration for cytological diagnosis of lumps, nodules, and masses in any accessible anatomical site.",
        img: "assets/img/newService/f/fnac2.webp",
        overviewImg: "assets/img/newService/f/fnac1.webp",
        overviewTitle: "Why Choose Our FNAC Service",
        overviewText: "At Meera 4D Scans Madurai, ultrasound-guided FNAC provides precise, minimally invasive cell sampling from any accessible lump or mass — delivering rapid cytological results to guide clinical management.",
        details: [
            { icon: "bi bi-search", heading: "Ultrasound Guided Precision", text: "Real-time ultrasound guidance ensures accurate needle placement directly into the target lesion." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A quick, well-tolerated outpatient procedure using a fine needle — no surgical incision required." },
            { icon: "bi bi-clipboard2-pulse", heading: "Cytological Diagnosis", text: "Cellular material obtained for cytological analysis — guiding benign versus malignant diagnosis." }
        ],
        tags: ["FNAC", "Thyroid FNAC", "Breast FNAC", "Lymph Node FNAC", "Fine Needle Aspiration", "Cytology"],

        stepGroups: [
            {
                route: "Ultrasound-Guided FNAC",
                icon: "bi bi-search",
                steps: [
                    "The target area is positioned and the skin is cleaned with antiseptic.",
                    "Ultrasound is used to localise the lesion precisely.",
                    "A fine needle (22–25 gauge) is inserted under real-time ultrasound guidance.",
                    "Cells are aspirated from the lesion with gentle suction.",
                    "The needle is withdrawn and gentle pressure is applied.",
                    "The aspirated material is smeared onto glass slides and fixed.",
                    "Slides are sent to the cytology laboratory for analysis.",
                    "Results are typically available within 24–48 hours."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-capsule", title: "Inform About Blood Thinners", text: "Tell your doctor if you are on aspirin, warfarin, or any anticoagulants — these may need to be paused before the procedure." },
            { icon: "bi bi-cup-hot", title: "No Fasting Required", text: "Eat and drink normally before your appointment." },
            { icon: "bi bi-folder2-open", title: "Bring Previous Scan Reports", text: "Carry any earlier scans or investigations of the lump or nodule." },
            { icon: "bi bi-bag", title: "Wear Accessible Clothing", text: "Wear clothing that allows easy access to the area being sampled." },
            { icon: "bi bi-file-text", title: "Bring Referral Letter", text: "Carry your doctor's referral with details of the clinical indication." }
        ],

        faqs: [
            { q: "Is FNAC painful?", a: "Mild discomfort similar to a blood test — local anaesthetic cream or injection may be used for sensitive areas." },
            { q: "What sites can be sampled with FNAC?", a: "Thyroid, breast, lymph nodes, salivary glands, liver, kidney, and soft tissue masses." },
            { q: "How accurate is FNAC?", a: "FNAC is highly accurate for most lesions — in some cases, a core biopsy (trucut) may be recommended for a definitive tissue diagnosis." },
            { q: "When will I get results?", a: "Cytology results are typically available within 24–48 hours from the laboratory." },
            { q: "Are there any risks?", a: "Minimal — small risk of bruising or bleeding at the needle site. Serious complications are extremely rare." }
        ]
    },

    "trucut-biopsy": {
        category: "General Interventions",
        title: "Trucut Biopsy",
        lead: "Ultrasound-guided core needle biopsy for histological diagnosis of tumours, masses, and organ lesions.",
        img: "assets/img/newService/f/tru2.webp",
        overviewImg: "assets/img/newService/f/tru1.webp",
        overviewTitle: "Why Choose Our Trucut Biopsy Service",
        overviewText: "Our ultrasound-guided trucut biopsy at Meera 4D Scans Madurai provides accurate core tissue sampling for definitive histological diagnosis — a critical step in cancer diagnosis and management.",
        details: [
            { icon: "bi bi-search", heading: "Ultrasound Guided Biopsy", text: "Precise core needle placement under real-time ultrasound guidance for accurate tissue sampling." },
            { icon: "bi bi-clipboard2-pulse", heading: "Histological Diagnosis", text: "Core tissue samples provide histological analysis — superior to FNAC for definitive tissue diagnosis." },
            { icon: "bi bi-shield-check", heading: "Wide Clinical Application", text: "Used for liver, kidney, lymph node, breast, thyroid, and soft tissue mass biopsy." }
        ],
        tags: ["Core Biopsy", "Trucut", "Histology", "Liver Biopsy", "Breast Biopsy", "Lymph Node Biopsy", "Cancer Diagnosis"],

        stepGroups: [
            {
                route: "Ultrasound-Guided Core Biopsy",
                icon: "bi bi-search",
                steps: [
                    "The target area is positioned and the skin is cleaned with antiseptic.",
                    "Local anaesthetic is injected into the skin and deeper tissues.",
                    "Ultrasound localises the lesion and the biopsy path is planned.",
                    "A small skin nick is made with a scalpel.",
                    "The core biopsy needle is advanced to the lesion edge under ultrasound guidance.",
                    "The biopsy gun is fired — a core of tissue is obtained.",
                    "Two to three cores are typically taken for adequate sampling.",
                    "Pressure is applied and a dressing is placed.",
                    "Cores are placed in formalin and sent to histopathology.",
                    "Results are available within 3–5 working days."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-capsule", title: "Stop Blood Thinners if Advised", text: "Aspirin, warfarin, and anticoagulants are usually paused 5–7 days before biopsy — follow your doctor's instructions." },
            { icon: "bi bi-moon", title: "Fast for 4 Hours (Abdominal Biopsy)", text: "For liver or kidney biopsy, fast for 4 hours before the procedure." },
            { icon: "bi bi-folder2-open", title: "Bring All Investigations", text: "Carry blood test results (including clotting), scan reports, and your referral letter." },
            { icon: "bi bi-people", title: "Bring a Companion", text: "Bring someone to accompany you home after the procedure — you should not drive." },
            { icon: "bi bi-bag", title: "Wear Comfortable Clothing", text: "Wear loose clothing that allows easy access to the biopsy site." }
        ],

        faqs: [
            { q: "Is trucut biopsy better than FNAC?", a: "For most solid lesions, core biopsy provides a definitive histological diagnosis — superior to FNAC which only provides cytology." },
            { q: "Is the procedure painful?", a: "Local anaesthetic is given — you may feel pressure and a click from the biopsy gun but the procedure is generally well-tolerated." },
            { q: "What are the risks?", a: "Bleeding, bruising, and infection are uncommon. Serious complications are rare when performed under ultrasound guidance." },
            { q: "When will I get results?", a: "Histopathology results are typically available within 3–5 working days." },
            { q: "What should I do after the biopsy?", a: "Rest for the remainder of the day, avoid strenuous activity, and watch for excessive bleeding or fever. Contact your doctor if concerned." }
        ]
    },

    "aspiration": {
        category: "General Interventions",
        title: "Aspiration",
        lead: "Ultrasound-guided drainage and aspiration of cysts, abscesses, fluid collections, and effusions.",
        img: "assets/img/newService/f/asp1.webp",
        overviewImg: "assets/img/newService/f/asp2.webp",
        overviewTitle: "Why Choose Our Aspiration Service",
        overviewText: "At Meera 4D Scans Madurai, ultrasound-guided aspiration provides safe, precise drainage of fluid collections — a minimally invasive alternative to surgical drainage in many clinical situations.",
        details: [
            { icon: "bi bi-search", heading: "Cyst & Abscess Drainage", text: "Precise drainage of cysts and abscesses under real-time ultrasound guidance for maximum safety." },
            { icon: "bi bi-droplet", heading: "Fluid Collection Aspiration", text: "Aspiration of pleural effusions, ascites, and localised fluid collections for diagnostic and therapeutic purposes." },
            { icon: "bi bi-shield-check", heading: "Minimally Invasive", text: "A well-tolerated outpatient procedure avoiding the need for surgical drainage in most cases." }
        ],
        tags: ["Cyst Aspiration", "Abscess Drainage", "Pleural Effusion", "Ascites", "Fluid Collection", "Ultrasound Guided"],

        stepGroups: [
            {
                route: "Ultrasound-Guided Aspiration",
                icon: "bi bi-droplet",
                steps: [
                    "Ultrasound confirms the size and location of the fluid collection.",
                    "The skin over the aspiration site is cleaned with antiseptic.",
                    "Local anaesthetic is applied to the skin and deeper tissues.",
                    "A needle or catheter is inserted under continuous ultrasound guidance.",
                    "Fluid is aspirated — volume, colour, and character are noted.",
                    "A sample may be sent for microbiological or cytological analysis.",
                    "The needle is removed and a dressing is applied.",
                    "Post-procedure ultrasound confirms adequate drainage.",
                    "Report and fluid analysis results are provided."
                ]
            }
        ],

        prepare: [
            { icon: "bi bi-capsule", title: "Inform About Blood Thinners", text: "Tell your doctor if you are on anticoagulants — these may need to be paused before the procedure." },
            { icon: "bi bi-moon", title: "Fast if Required", text: "For abdominal aspiration, fast for 4 hours before the procedure — your doctor will advise." },
            { icon: "bi bi-folder2-open", title: "Bring All Investigations", text: "Carry recent blood tests (including clotting), imaging reports, and referral letter." },
            { icon: "bi bi-people", title: "Bring a Companion", text: "Bring someone to take you home — avoid driving after the procedure." },
            { icon: "bi bi-bag", title: "Comfortable Clothing", text: "Wear loose clothing that allows easy access to the aspiration site." }
        ],

        faqs: [
            { q: "Is the aspiration procedure painful?", a: "Local anaesthetic is given — most patients experience only mild pressure or discomfort during the procedure." },
            { q: "What types of fluid collections can be drained?", a: "Breast cysts, liver cysts, abscesses, pleural effusions, ascites, pericardial effusions, and joint effusions." },
            { q: "Will the fluid come back after aspiration?", a: "Cysts and collections may recur in some cases — your doctor will advise on further management." },
            { q: "Are there any risks?", a: "Minor bleeding and bruising are possible. Infection is rare when performed under sterile conditions. Serious complications are uncommon." },
            { q: "When will I get results?", a: "Fluid analysis results from the laboratory are typically available within 24–48 hours." }
        ]
    },

    // ── Legacy keys ──

    "ultrasound": {
        category: "Diagnostic Imaging",
        title: "Ultrasound Imaging",
        lead: "High-resolution diagnostic ultrasound scans providing clear, detailed views for accurate patient assessment.",
        img: "assets/img/health/emergency-2.webp",
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
// ── Render Function ──────────────────────────────────────────────────────────
function renderPage(d) {
    document.getElementById("svc-category").innerText = d.category;
    document.getElementById("svc-title").innerText = d.title;
    document.getElementById("svc-lead").innerText = d.lead;
    document.getElementById("svc-image").src = d.img;
    document.getElementById("svc-image").alt = d.title;

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
    if (tagsEl) {
        tagsEl.innerHTML = d.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    }

    // ── Step Groups ──
    const stepsEl = document.getElementById("svc-steps");
    if (stepsEl) {
        if (d.stepGroups) {
            stepsEl.innerHTML = d.stepGroups.map(group => `
            <div class="svc-route-group">
                <div class="svc-route-heading">
                    <i class="${group.icon}"></i>
                    <span>${group.route}</span>
                </div>
                ${group.note ? `<p class="svc-route-note">${group.note}</p>` : ''}
                ${group.steps.map((s, i) => `
                    <div class="svc-step">
                        <div class="step-num">${i + 1}</div>
                        <div class="step-text">${s}</div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        } else if (d.steps) {
            stepsEl.innerHTML = d.steps.map((s, i) => `
            <div class="svc-step">
                <div class="step-num">${i + 1}</div>
                <div class="step-text">
                    <strong>${s.title}</strong> ${s.text}
                </div>
            </div>
        `).join('');
        } else {
            stepsEl.innerHTML = '';
        }
    }

    // ── Prepare ──
    const prepareEl = document.getElementById("svc-prepare");
    if (prepareEl) {
        if (d.prepare && d.prepare.length && typeof d.prepare[0] === 'object') {
            // Rich card format
            prepareEl.innerHTML = d.prepare.map(item => `
            <li class="svc-prepare-card">
                <i class="${item.icon}"></i>
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.text}</span>
                </div>
            </li>
        `).join('');
        } else if (d.prepare) {
            // Simple string format (for other services)
            prepareEl.innerHTML = d.prepare.map(item => `
            <li><i class="bi bi-check-circle-fill"></i> ${item}</li>
        `).join('');
        } else {
            prepareEl.innerHTML = '';
        }
    }

    // ── FAQ ──
    const faqEl = document.getElementById("svc-faq");
    if (faqEl) {
        faqEl.innerHTML = d.faqs ? d.faqs.map((f) => `
            <div class="svc-faq-item">
                <div class="svc-faq-question" onclick="toggleSvcFaq(this)">
                    ${f.q}
                    <i class="bi bi-chevron-down"></i>
                </div>
                <div class="svc-faq-answer">
                    <p>${f.a}</p>
                </div>
            </div>
        `).join('') : '';
    }
}

// ── FAQ Toggle ────────────────────────────────────────────────────────────────
function toggleSvcFaq(el) {
    const answer = el.nextElementSibling;
    const icon = el.querySelector('i');
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.svc-faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.svc-faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');

    if (!isOpen) {
        answer.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
    }
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    if (data[service]) {
        renderPage(data[service]);
    } else {
        const titleEl = document.getElementById("svc-title");
        if (titleEl) titleEl.innerText = "Service Not Found";
    }
});