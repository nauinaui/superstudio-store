//Load common code that includes config, then load the app logic for this page.
requirejs(['./common'], function (common) {
    requirejs(['/new-portada/includes/scripts/app/mainCategory.js']); // /new-portada
});