sap.ui
		.controller(
				"powerweb.AddPower",
				{
					handleNavButtonPress : function(evt) {
						app.back();
					},
					onInit : function(oEvent) {
						this
								.getView()
								.addDelegate(
										{
											onBeforeShow : function(evt) {
												if (this.direction != "back") {
													if (evt.data.oModel != null) {
														evt.to.setModel(evt.data.oModel);
														evt.to.setBindingContext(evt.data);
													} else {
														var oModel = new sap.ui.model.odata.ODataModel("PowerOData.svc/");
														evt.to.setModel(oModel);
														evt.to.byId("electricity").setValue("");
														evt.to.byId("gas").setValue("");
														evt.to.byId("month").setValue("");
														evt.to.byId("id").setValue("");
													}
												}
											}
										});
					},

					handleCancelPress : function() {
						app.back();
					},

					handleDeletePress : function() {
						var oModel = this.getView().getModel();
						var powerid = this.getView().byId("id").getValue();
						oModel.remove("/Powers(" + powerid + "L)");
						oModel.refresh();
						app.back();

					},

					handleSavePress : function(evt) {
						var oModel = this.getView().getModel();

						var vProperties = {};
						vProperties.Id = this.getView().byId("id").getValue();
						vProperties.Electricity = this.getView().byId("electricity").getValue();
						vProperties.Gas = this.getView().byId("gas").getValue();
						vProperties.Month = this.getView().byId("month").getValue();
						if (vProperties.Id == "") {
							vProperties.Id = 0;
							oModel.createEntry("Powers", vProperties);

						} else {
							var oEntry = {};
							var mParameters = {};
							mParameters.context = this.getView()
									.getBindingContext();
							mParameters.success = this._fnSuccess;
							mParameters.error = this._fnError;
							oEntry.Electricity = vProperties.Electricity;
							oEntry.Gas = vProperties.Gas;
							oEntry.Month = vProperties.Month;
							oModel.update("", oEntry, mParameters);
						}
						oModel.submitChanges(this._fnSuccess, this._fnError);
						oModel.refresh();

					},
					_fnSuccess : function() {
						jQuery.sap.require("sap.m.MessageToast");
						sap.m.MessageToast.show("Success");
						app.back();

					},
					_fnError : function() {
						jQuery.sap.require("sap.m.MessageToast");
						sap.m.MessageToast.show("Error");

					}

				});