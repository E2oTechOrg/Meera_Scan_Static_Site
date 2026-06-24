document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".blog-checklist li");

    items.forEach(function (li) {

        const icon = li.querySelector("i");
        const label = li.querySelector("strong");

        if (!icon || !label) return;

        const allNodes = Array.from(li.childNodes);
        const labelIndex = allNodes.indexOf(label);
        const afterLabel = allNodes.slice(labelIndex + 1);

        // Already fixed — skip
        if (afterLabel.length === 1 && afterLabel[0].nodeName === "SPAN") return;

        // Nothing after label — skip
        if (afterLabel.length === 0) return;

        // Wrap description nodes in a <span>
        const span = document.createElement("span");
        afterLabel.forEach(function (node) {
            span.appendChild(node);
        });

        li.appendChild(span);

    });

});