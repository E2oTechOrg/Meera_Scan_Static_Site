/**
 * Due Date Calculator
 * Place this file at: assets/js/due-date-calculator.js
 */

(function () {

    'use strict';

    /* -------------------------------------------------------
     # Utility: add days to a date
    ------------------------------------------------------- */
    function addDays(date, days) {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    }

    /* -------------------------------------------------------
     # Format: "January 31, 2027"
    ------------------------------------------------------- */
    function fmtLong(date) {
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    /* -------------------------------------------------------
     # Format: "Jan 31, 2027"
    ------------------------------------------------------- */
    function fmtShort(date) {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    /* -------------------------------------------------------
     # Format: "Jan 31, 2027 — Mar 5, 2027"
    ------------------------------------------------------- */
    function fmtRange(d1, d2) {
        return fmtShort(d1) + ' — ' + fmtShort(d2);
    }

    /* -------------------------------------------------------
     # Format gestational age: "12w 3d"
    ------------------------------------------------------- */
    function gaString(totalDays) {
        if (totalDays < 0) return 'N/A';
        const w = Math.floor(totalDays / 7);
        const d = totalDays % 7;
        return w + 'w ' + d + 'd';
    }

    /* -------------------------------------------------------
     # Get trimester label
    ------------------------------------------------------- */
    function getTrimester(weeks) {
        if (weeks < 13) return '1st';
        if (weeks < 27) return '2nd';
        return '3rd';
    }

    /* -------------------------------------------------------
     # Set element text safely
    ------------------------------------------------------- */
    function setText(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function setHTML(id, value) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = value;
    }

    /* -------------------------------------------------------
     # Main calculate function
    ------------------------------------------------------- */
    window.calculateDueDate = function () {
        const lmpVal = document.getElementById('lmp').value;
        const cycleVal = parseInt(document.getElementById('cycle').value) || 28;

        if (!lmpVal) {
            alert('Please enter your LMP date.');
            return;
        }

        // lmpRaw = exactly what the user entered — shown to user as-is
        const lmpRaw = new Date(lmpVal + 'T00:00:00');

        // correctedLMP = used for all calculations (shifts LMP by cycle difference)
        // If cycle is 28 days, correction = 0, so correctedLMP = lmpRaw
        const correction = cycleVal - 28;
        const correctedLMP = addDays(lmpRaw, correction);

        // EDD = correctedLMP + 280 days
        const edd = addDays(correctedLMP, 280);

        // Conception = correctedLMP + 14 days (ovulation day)
        const conception = addDays(correctedLMP, 14);

        // Conception window = correctedLMP + 11 to +17 days
        const concStart = addDays(correctedLMP, 11);
        const concEnd = addDays(correctedLMP, 17);

        // Today (midnight)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Gestational age in days from correctedLMP
        const gaDays = Math.floor((today - correctedLMP) / 86400000);
        const gaWeeks = Math.floor(gaDays / 7);

        // Days remaining to EDD
        const daysLeft = Math.max(0, Math.floor((edd - today) / 86400000));

        // Progress percentage (out of 280 days)
        const progress = Math.min(100, Math.max(0, Math.round((gaDays / 280) * 100)));

        // ── EDD banner ──────────────────────────────────────────
        const eddStr = fmtLong(edd);
        const parts = eddStr.split(' ');
        setHTML('edd-date',
            '<span class="edd-month">' + parts[0] + '</span> ' + parts[1] + ' ' + parts[2]
        );
        setText('edd-sub',
            daysLeft + ' days remaining · Calculated on ' + fmtShort(today)
        );

        // ── Progress bar ────────────────────────────────────────
        const fillEl = document.getElementById('progress-fill');
        if (fillEl) fillEl.style.width = progress + '%';
        setText('progress-pct', progress + '%');

        // ── Metric cards ────────────────────────────────────────
        setText('ga-now', gaString(gaDays));
        setText('trimester', gaDays >= 0 ? getTrimester(gaWeeks) : 'N/A');
        setText('days-left', daysLeft);

        // ── Key dates ───────────────────────────────────────────
        // r-lmp shows the ORIGINAL date the user entered (not cycle-corrected)
        setText('r-lmp', fmtShort(lmpRaw));
        setText('r-conception', fmtShort(conception));
        setText('r-conc-window', fmtRange(concStart, concEnd));
        setText('r-viability', fmtShort(addDays(correctedLMP, 154)));          // 22w
        setText('r-nt', fmtRange(addDays(correctedLMP, 77), addDays(correctedLMP, 97)));   // 11w–13w6d
        setText('r-anatomy', fmtRange(addDays(correctedLMP, 126), addDays(correctedLMP, 154)));  // 18w–22w
        setText('r-glucose', fmtRange(addDays(correctedLMP, 168), addDays(correctedLMP, 196)));  // 24w–28w
        setText('r-rhod', fmtShort(addDays(correctedLMP, 196)));           // 28w
        setText('r-tdap', fmtRange(addDays(correctedLMP, 189), addDays(correctedLMP, 259)));  // 27w–37w
        setText('r-gbs', fmtRange(addDays(correctedLMP, 245), addDays(correctedLMP, 259)));  // 35w–37w
        setText('r-early', fmtShort(addDays(correctedLMP, 259)));           // 37w
        setText('r-full', fmtShort(addDays(correctedLMP, 273)));           // 39w
        setText('r-post', fmtShort(addDays(correctedLMP, 287)));           // 41w

        // ── Show results ────────────────────────────────────────
        const resultsEl = document.getElementById('calc-results');
        if (resultsEl) {
            resultsEl.style.display = 'block';
            setTimeout(() => {
                resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    /* -------------------------------------------------------
     # Reset function
    ------------------------------------------------------- */
    window.resetCalculator = function () {
        const lmpEl = document.getElementById('lmp');
        const cycleEl = document.getElementById('cycle');
        const resultsEl = document.getElementById('calc-results');

        if (lmpEl) lmpEl.value = '';
        if (cycleEl) cycleEl.value = '28';
        if (resultsEl) resultsEl.style.display = 'none';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

})();