import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div>
<form method="POST" action="https://formspree.io/camille@creativeambition.net" id="contactForm" className="contact-form contact-section">
        <fieldset id="custInfo">
            <legend>Contact Information</legend>
            <div class="formRow">
                <label for="name">Name</label>
                <input name="custName" id="name" type="text" required="required" placeholder="Required Field">
            </div>
            <div class="formRow">
                <label for="email">E-mail</label>
                <input name="email" id="email" type="email" required="required" placeholder="Required Field">
            </div>
            <div class="formRow">
                <label for="phone">Telephone</label>
                <input name="custPhone" id="phone" type="tel">
            </div>
            <div class="formRow">
                <label for="comments">Write Your Message Below</label>
                <textarea name="custComment" id="comments" rows="5"></textarea>
            </div>
            <div class="formRow">
                <div class="subButton">
                    <button type="submit">Send</button>
                </div>
                <div class="resButton">
                    <button type="reset">Clear</button>
                </div>
            </div>
    </fieldset>
</form>
            </div>
        );
    }
}

export default ContactForm;