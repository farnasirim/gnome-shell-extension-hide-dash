const Lang = imports.lang;
const Main = imports.ui.main;

let hideDash;

function init() {
	hideDash = new HideDash();
}

function enable() {
	hideDash.enable();
}

function disable() {
	hideDash.disable();
}

const HideDash = function() {
    this.init();
}

HideDash.prototype = {
	init: function() {
		this.observer = null;
	},

	enable: function() {
		this.observer = Main.overview.connect("showing", Lang.bind(this, this.hide));
	},

	disable: function() {
		this.show();
		Main.overview.disconnect(this.observer);
	},

	hide: function() {
		Main.overview.dash.hide();
	},

	show: function() {
		Main.overview.dash.show();
	}
};
