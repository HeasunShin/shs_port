document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const file = el.dataset.include;

    try {
      const res = await fetch(file);

      if (!res.ok) {
        throw new Error(`${file} (${res.status})`);
      }

      el.innerHTML = await res.text();
    } catch (err) {
      console.error(err);
    }
  }

  document.dispatchEvent(new Event("includeLoaded"));
});
