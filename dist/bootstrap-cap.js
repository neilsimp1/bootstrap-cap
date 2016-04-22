'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSCAP = function () {
	function BSCAP() {
		_classCallCheck(this, BSCAP);

		var $modal = $('<div id="bscap" class="modal fade" tabindex="-1" role="dialog">'),
		    $modalDialog = $('<div class="modal-dialog">'),
		    $modalContent = $('<div class="modal-content">'),
		    $modalHeader = $('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4></div>'),
		    $modalBody = $('<div class="modal-body">'),
		    $modalFooter = $('<div class="modal-footer"><button type="button" class="btn btn-default bscap-no" data-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary bscap-yes">Ok</button></div>');

		$modalContent.append($modalHeader);
		$modalContent.append($modalBody);
		$modalContent.append($modalFooter);
		$modalDialog.append($modalContent);
		$modal.append($modalDialog);
		$('body').append($modal);

		this.$bscap = $('#bscap');
	}

	BSCAP.prototype.confirm = function confirm(text, title, callback) {
		var doTitle = true;
		if (callback === undefined) {
			callback = title;
			doTitle = false;
		}

		var $bscap = this.$bscap;

		$bscap.find('.modal-title').html(doTitle ? title : '');
		$bscap.find('.modal-body').html(text);
		$bscap.find('.bscap-no').show().one('click', function () {
			callback(false);
		});
		$bscap.find('.bscap-yes').one('click', function () {
			callback(true);
		});
		$bscap.find('.bscap-no, .bscap-yes').one('click', function () {
			$bscap.modal('hide');
		});
		$bscap.modal('show');
	};

	BSCAP.prototype.alert = function alert(text, title, callback) {
		var doTitle = true;
		if (callback === undefined) {
			callback = title;
			doTitle = false;
		}

		var $bscap = this.$bscap;

		$bscap.find('.modal-title').html(doTitle ? title : '');
		$bscap.find('.modal-body').html(text);
		$bscap.find('.bscap-no').hide();
		$bscap.find('.bscap-yes').one('click', function () {
			$bscap.modal('hide');callback();
		});
		$bscap.modal('show');
	};

	// prompt(text, callback){
	// if(callback === undefined) callback = title;

	// let $bscap = this.$bscap;

	// $bscap.find('.modal-body').html(text);
	// $bscap.find('.bscap-no').hide();
	// $bscap.find('.bscap-yes').one('click', function(){$bscap.modal('hide');callback();});
	// $bscap.modal('show');
	// }

	return BSCAP;
}();

window.addEventListener('load', function () {
	window.bsCAP = new BSCAP();
}, false);