/*
---
description: accessible tab pane demo application
 
license: MIT-style
 
authors:
- akaIDIOT
- Eva Loesch
- Philip Fieber
- Christian Merz
 
requires:
- core/1.2.4: Class
- core/1.2.4: Class.Extras
- core/1.2.4: Element
- core/1.2.4: Element.Event
- core/1.2.4: Selectors
- more/1.2.4: Element.Delegation
 
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
