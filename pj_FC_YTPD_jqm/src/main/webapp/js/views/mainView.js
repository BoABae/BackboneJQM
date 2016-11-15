var home = Backbone.View.extend({

    template:_.template($('#home').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },
    events: {
    	'click #toiletDB_selectCity': 'toiletDB_selectCity',
    },
    toiletDB_selectCity : function(){
    	app.navigate('toiletDB_selectCity', true);
    }
    
});



$(document).ready(function () {
    app = new AppRouter();
    Backbone.history.start();
    pData = new toiletDBModel();
    toiletDB_selectRegion = new toiletDB_selectCity();
    toiletDB_detailInfo = new toiletDB_detailInfo();
    
    
});
