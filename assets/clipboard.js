(function () {
  const style = document.createElement("style");
  style.textContent = `
    .book-codeblock-copy {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      z-index: 1;
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--gray-200);
      border-radius: 0.25rem;
      background: var(--body-background);
      color: var(--body-font-color);
      cursor: pointer;
      font: inherit;
      font-size: 0.75rem;
      line-height: 1.25rem;
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }

    pre:has(.book-codeblock-copy) {
      position: relative;
    }

    pre:has(.book-codeblock-copy):hover .book-codeblock-copy,
    pre:has(.book-codeblock-copy) .book-codeblock-copy:focus {
      opacity: 1;
    }

    .book-codeblock-copy:hover {
      background: var(--gray-100);
    }

    @media (hover: none) {
      .book-codeblock-copy {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  function fallbackCopy(content) {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
    } finally {
      textarea.remove();
    }
  }

  function copyToClipboard(content) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(content);
    }

    fallbackCopy(content);
    return Promise.resolve();
  }

  document.querySelectorAll("pre:has(code)").forEach(pre => {
    const code = pre.querySelector("code");

    if (!code || pre.querySelector(".book-codeblock-copy")) {
      return;
    }

    pre.addEventListener("click", () => pre.focus());

    pre.addEventListener("copy", event => {
      event.preventDefault();

      const selection = window.getSelection().toString();
      copyToClipboard(selection || code.textContent);
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "book-codeblock-copy";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code");
    button.title = "Copy code";

    button.addEventListener("click", async () => {
      try {
        await copyToClipboard(code.textContent);
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Code copied");
        button.title = "Code copied";

        window.setTimeout(() => {
          button.textContent = "Copy";
          button.setAttribute("aria-label", "Copy code");
          button.title = "Copy code";
        }, 1500);
      } catch {
        button.textContent = "Failed";
        button.setAttribute("aria-label", "Failed to copy code");
        button.title = "Failed to copy code";

        window.setTimeout(() => {
          button.textContent = "Copy";
          button.setAttribute("aria-label", "Copy code");
          button.title = "Copy code";
        }, 1500);
      }
    });

    pre.appendChild(button);
  });
})();
