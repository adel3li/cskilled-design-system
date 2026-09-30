/* CSkilled design system — minimal behavior. No dependencies. */
(function () {
  'use strict';

  // Segmented toggle: [data-segmented] > .cs-segmented__option[aria-pressed]
  // Emits a "cs:change" event with detail.index on the group.
  document.addEventListener('click', function (e) {
    var option = e.target.closest('[data-segmented] .cs-segmented__option');
    if (!option) return;
    var group = option.closest('[data-segmented]');
    var options = group.querySelectorAll('.cs-segmented__option');
    options.forEach(function (o) { o.setAttribute('aria-pressed', String(o === option)); });
    group.dispatchEvent(new CustomEvent('cs:change', {
      bubbles: true,
      detail: { index: Array.prototype.indexOf.call(options, option) }
    }));
  });

  // Accordion: only one item open per group. Native via <details name>;
  // this fallback covers browsers that ignore the name attribute.
  if (!('name' in HTMLDetailsElement.prototype)) {
    document.addEventListener('toggle', function (e) {
      var item = e.target;
      if (!(item instanceof HTMLDetailsElement) || !item.open) return;
      var name = item.getAttribute('name');
      if (!name) return;
      document.querySelectorAll('details[name="' + name + '"][open]').forEach(function (other) {
        if (other !== item) other.open = false;
      });
    }, true);
  }
})();
