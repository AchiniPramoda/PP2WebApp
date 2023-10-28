
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting to a server

        // Capture the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Combine the form data into a string
        const formData = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

        // Create a Blob with the form data
        const blob = new Blob([formData], { type: "text/plain" });

        // Create an <a> element to trigger the download
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.style.display = "none";

        // Append the <a> element to the document and trigger a click event
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
    });
