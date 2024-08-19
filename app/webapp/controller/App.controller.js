sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function (
    Controller,
    MessageToast,
    JSONModel,
    ResourceModel
) {
    "use strict";

    return Controller.extend("app.controller.App", {

        onInit: function () {
            //Json Model
            console.log("page is loading");

            // var oData = {
            //     recipient: {
            //         name: "Seungho"
            //     }
            // };

            // var oModel = new JSONModel(oData);
            // this.getView().setModel(oModel);

            // console.log(oData);

            //set Model on view 
            // var i18nModel = new ResourceModel({
            //     bundleName: "app.i18n.i18n"
            // });

            // this.getView().setModel(i18nModel, "i18n");



        },

        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            console.log(sRecipient);
            var sMsg = oBundle.getText("helloMsg", [sRecipient, "good Day!"]);
            console.log(sMsg);
            MessageToast.show(sMsg);
        }
    });
});