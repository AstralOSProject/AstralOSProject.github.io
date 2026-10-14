document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-download-soon]");
    if (!trigger) return;

    const dialog = document.getElementById("download-soon-dialog");
    if (!dialog) return;

    event.preventDefault();
    dialog.returnFocus = trigger;
    const available = trigger.dataset.available === "true";
    const deviceName = dialog.querySelector("[data-popup-device]");
    const name = trigger.dataset.device || "this device";
    if (deviceName) {
        deviceName.textContent = name;
    }
    dialog.querySelector("#download-soon-title").textContent = available ? "Download Available" : "Download Soon";
    dialog.querySelector("#download-soon-description").textContent = available
        ? `A build for ${name} is available. Open the project releases to download it.`
        : `No build for ${name} yet. Check back here for updates.`;
    const buildLink = dialog.querySelector("[data-popup-build]");
    buildLink.hidden = !available || !trigger.dataset.buildUrl;
    if (!buildLink.hidden) buildLink.href = trigger.dataset.buildUrl;
    dialog.showModal();
});

document.addEventListener("click", event => {
    const dialog = document.getElementById("download-soon-dialog");
    if (!dialog || !dialog.open) return;

    if (event.target.closest("[data-close-download-soon]")) {
        dialog.close();
    } else if (event.target === dialog) {
        dialog.close();
    }
});

document.addEventListener("close", event => {
    if (event.target.id === "download-soon-dialog") {
        event.target.returnFocus?.focus();
    }
}, true);
