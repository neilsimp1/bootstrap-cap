'use strict';

class BSCAP{
	
	constructor(){
		let $modal = $('<div id="bscap" class="modal fade" tabindex="-1" role="dialog">')
			, $modalDialog = $('<div class="modal-dialog">')
			, $modalContent = $('<div class="modal-content">')
			, $modalHeader = $('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4></div>')
			, $modalBody = $('<div class="modal-body">')
			, $modalFooter = $('<div class="modal-footer"><button type="button" class="btn btn-default bscap-no" data-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary bscap-yes">Ok</button></div>');
		
		$modalContent.append($modalHeader);
		$modalContent.append($modalBody);
		$modalContent.append($modalFooter);
		$modalDialog.append($modalContent);
		$modal.append($modalDialog);	
		$('body').append($modal);
		
		this.$bscap = $('#bscap');
	}
	
	confirm(text, title, callback){
		this.unbind();
		
		let doTitle = true;
		if(callback === undefined){
			callback = title;
			doTitle = false;
		}
		
		let $bscap = this.$bscap;
		
		$bscap.find('.modal-title').html(doTitle? title: '');
		$bscap.find('.modal-body').html(this.addPTag(text));	
		$bscap.find('.bscap-no').show().one('click', function(){callback(false);});
		$bscap.find('.bscap-yes').one('click', function(){callback(true);});
		$bscap.find('.bscap-no, .bscap-yes').one('click', function(){$bscap.modal('hide');});
		$bscap.modal('show');
	}
	
	alert(text, title, callback){		
		this.unbind();
		
		let doTitle = true;
		if(callback === undefined){
			callback = title;
			doTitle = false;
		}
		
		let $bscap = this.$bscap;
		
		$bscap.find('.modal-title').html(doTitle? title: '');
		$bscap.find('.modal-body').html(this.addPTag(text));
		$bscap.find('.bscap-no').hide();
		$bscap.find('.bscap-yes').one('click', function(){$bscap.modal('hide');callback();});
		$bscap.modal('show');
	}
	
	prompt(text, title, callback){
		this.unbind();
		
		let doTitle = true;
		if(callback === undefined){
			callback = title;
			doTitle = false;
		}
		
		let $bscap = this.$bscap;		
		let $input = $('<input type="text" class="form-control" />')
			, $textDiv = $('<div class="col-xs-12">')
			, $containerDiv = $('<div class="container-fluid">');
		$textDiv.append($input);
		$containerDiv.append($textDiv);
		
		$bscap.find('.modal-title').html(doTitle? title: '');
		$bscap.find('.modal-body').html(this.addPTag(text)).append($containerDiv);
		$bscap.find('.bscap-no').hide();
		$bscap.find('.bscap-yes').one('click', function(){
			$bscap.modal('hide');
			callback($bscap.find('.form-control').val());
		});
		$bscap.modal('show');
	}
	
	addPTag(text){
		return '<p>' + text + '</p>';
	}
	
	unbind(){
		this.$bscap.find('.bscap-yes, .bscap-no').off('click');
	}
}



window.addEventListener('load', function(){window.bsCAP = new BSCAP();}, false);