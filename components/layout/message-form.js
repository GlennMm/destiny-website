export default {
	template: `
	<form id="contact-form" action="https://whizthemes.com/mail-php/other/mail.php">
	<div class="row">
		<div class="col-md-12">
			<p>Name</p>
			<input type="text" name="con_name">
		</div>
		<div class="col-md-12">
			<p>Email</p>
			<input type="text" name="con_email">
		</div>
		<div class="col-md-12">
			<p>Subject</p>
			<input type="text" name="con_subject">
			<p>Massage</p>
			<textarea name="con_message" cols="15" rows="10"></textarea>
		</div>
	</div>
	<button class="reply-btn" type="submit"><span>send message</span></button>
	<p class="form-message"></p>
</form>
	`
}