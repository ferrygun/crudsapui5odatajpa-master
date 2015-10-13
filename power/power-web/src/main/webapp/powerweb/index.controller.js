sap.ui.controller("powerweb.index", {
	onInit : function(evt) {

		this.getView().addDelegate(
				{
					onBeforeShow : function(evt) {
						var oModel = new sap.ui.model.odata.ODataModel(
								"PowerOData.svc/");
						evt.to.setModel(oModel);
					}
				});
	},

	onAdd : function(evt) {
		app.to("addpower");
	},
	onDetailPress : function(event) {
		var bindingContext = event.getSource().getBindingContext();
		var powerid = bindingContext.getProperty("Id");
		var myObject = bindingContext.getObject();
		app.to("addpower", "slide", bindingContext);

	}
});