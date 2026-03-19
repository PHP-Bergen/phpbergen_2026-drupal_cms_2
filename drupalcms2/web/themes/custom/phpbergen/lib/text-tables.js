/**
 * @file
 * Applies designsystemet table styles to CKEditor5-generated tables.
 */

((Drupal, once) => {
  /**
   * Upgrades a plain <table> inside .text-formatted to use ds-table styles.
   *
   * @param {HTMLTableElement} table
   */
  const upgradeTable = (table) => {
    table.classList.add("ds-table");
    table.setAttribute("data-border", "");
    table.setAttribute("data-hover", "");
  };

  /**
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Adds ds-table class and data attributes to tables inside .text-formatted.
   */
  Drupal.behaviors.phpbergenTextTables = {
    attach(context) {
      once(
        "phpbergen-text-tables",
        ".text-formatted table",
        context,
      ).forEach(upgradeTable);
    },
  };
})(Drupal, once);
