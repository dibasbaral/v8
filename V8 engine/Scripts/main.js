/// <reference path="typings/require.d.ts" />
require.config({
    baseUrl: "scripts/amd-demo",
    shim: {
        jquery: { exports: '$' }
    },
    paths: {
        'jquery': '../jquery-1.8.3',
        'toaster': "../toastr"
    }
});
require(['bootstrapper', 'jquery', 'toastr'], function (bootstrapper, $, toaster) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map