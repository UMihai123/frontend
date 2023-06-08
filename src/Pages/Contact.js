import React from 'react';
import "../contact.css";
export default function Contact () {

return (

    // detalii despre about-us
    <div id = "container">
    <div class = "abous-us">
    <div>
        <center><h1>Contact us</h1></center><br></br>
    <h1>Address</h1>
    <ul>
        <li>Address: 1234 Main Street</li>
    </ul>
    <h1>Phone</h1>
    <ul>
        <li>Phone: 123-456-7890</li>
    </ul>
    <h1>Email</h1>
    <ul>
        <li>Email: contact@example.com</li>
    </ul><br></br>
    </div>
    </div>

    {/* formular pentru a ne trimite un mesaj ce contine mai multe tabele */}
    <div class = "send-us">
    <center><h1>Send Us A Message</h1></center><br></br>
    <form>
        <label for="fname">First Name</label><br></br>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input><br></br>
        <label for="lname">Last Name</label><br></br>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input><br></br>
        <label for="email">Enter your email</label><br></br>
        <input type="text" id="email" name="email" placeholder="Eg. example@email.com"></input><br></br>
        <label for="country">Country</label><br></br>
        <select id="country" name="country"><br></br>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="romania">Romania</option>
            <option value="uk">UK</option>
            <option value="franta">Franta</option>
            <option value="italia">Italia</option>
            <option value="austria">Austria</option>
        </select><br></br>
        <label for="subject">Subject</label><br></br>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea><br></br>
        <input type="submit" value="Submit"></input>
    </form></div>
    </div>
    );
};


 