(function(Polymer) {
	'use strict';

	Polymer({
		is: 'header-bar',

		properties : {
			elements : {
				type	: Object,
				notify	: true
			},
			selectedElement : {
				type	: Number,
				notify	: true
			}
		},

		listeners : {
			'selectItem'	: 'onSelectItem'
		},

		onSelectItem : function(e, itemId){
			this.set('selectedElement', itemId);
		}
	});
})(Polymer); 