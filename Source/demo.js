/*
---
description: accessible dialog based on ascribe dialog
 
license: MIT-style
 
authors:
- Christian Merz
 
requires:
- core/1.3: '*'
- more/1.2.4: Fx.Elements
 
provides: Accessible Dialog
 
version: 1.0
...
*/
document.addEvent('domready', function(){

	var tabPane = new TabPane('demo_small');
    
	$('demo_small').addEvent('click:relay(.remove)', function(e) {
		new Event(e).stop();
		var parent = e.target.getParent('.tab');
		tabPane.closeTab(parent);
	});
});
