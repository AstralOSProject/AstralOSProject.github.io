(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const selector = [
        ".hero-copy",
        ".hero-product",
        ".section-head",
        ".screen-card",
        ".feat-card",
        ".source-card",
        ".faq-item",
        ".team-card",
        ".cta-box",
        ".dl-header .wrap",
        ".dl-card",
        ".dev-hero .wrap",
        ".dev-main > h2",
        ".dev-main > p",
        ".dev-main > ul",
        ".dev-main > ol",
        ".dev-main > .dev-warn",
        ".dev-side",
        ".nf .wrap"
    ].join(",");
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    document.documentElement.classList.add("has-scroll-reveal");
    targets.forEach((target, index) => {
        target.setAttribute("data-scroll-reveal", "");
        target.style.setProperty("--scroll-reveal-delay", `${(index % 4) * 65}ms`);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute("data-scroll-revealed", "");
            observer.unobserve(entry.target);
        });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    targets.forEach(target => observer.observe(target));
})();
