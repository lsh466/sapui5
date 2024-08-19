sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (
    UIComponent,
    JSONModel,
    ResourceModel
) {
    "use strict";

    return UIComponent.extend("app.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        /**
         * @override
         */
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            //set Data Model
            var oData = {
                recipient: {
                    name: "Seungho"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // //set i18n Model
            // var i18nModel = new ResourceModel({
            //     bundleName: "app.i18n.i18n"
            // });
            // this.setModel(i18nModel, "i18n");


        }
    });
});