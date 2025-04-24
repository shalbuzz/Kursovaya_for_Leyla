document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (hamburger.classList.contains("active")) {
          hamburger.classList.remove("active")
          navLinks.classList.remove("active")
        }
      })
    })
  
    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      question.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })
  
        // Toggle current item
        item.classList.toggle("active")
      })
    })
  
    // Contact Form Validation
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        let isValid = true
  
        // Name validation
        const name = document.getElementById("name")
        const nameError = document.getElementById("nameError")
        if (name.value.trim() === "") {
          nameError.textContent = "Name is required"
          isValid = false
        } else {
          nameError.textContent = ""
        }
  
        // Email validation
        const email = document.getElementById("email")
        const emailError = document.getElementById("emailError")
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (email.value.trim() === "") {
          emailError.textContent = "Email is required"
          isValid = false
        } else if (!emailPattern.test(email.value)) {
          emailError.textContent = "Please enter a valid email address"
          isValid = false
        } else {
          emailError.textContent = ""
        }
  
        // Phone validation (optional)
        const phone = document.getElementById("phone")
        const phoneError = document.getElementById("phoneError")
        if (phone.value.trim() !== "") {
          const phonePattern = /^\d{10}$/
          if (!phonePattern.test(phone.value.replace(/\D/g, ""))) {
            phoneError.textContent = "Please enter a valid 10-digit phone number"
            isValid = false
          } else {
            phoneError.textContent = ""
          }
        }
  
        // Subject validation
        const subject = document.getElementById("subject")
        const subjectError = document.getElementById("subjectError")
        if (subject.value === "") {
          subjectError.textContent = "Please select a subject"
          isValid = false
        } else {
          subjectError.textContent = ""
        }
  
        // Message validation
        const message = document.getElementById("message")
        const messageError = document.getElementById("messageError")
        if (message.value.trim() === "") {
          messageError.textContent = "Message is required"
          isValid = false
        } else if (message.value.length < 10) {
          messageError.textContent = "Message must be at least 10 characters"
          isValid = false
        } else {
          messageError.textContent = ""
        }
  
        // If form is valid, show success message
        if (isValid) {
          const formSuccess = document.getElementById("formSuccess")
          formSuccess.textContent = "Your message has been sent successfully! We will get back to you soon."
          contactForm.reset()
  
          // Clear success message after 5 seconds
          setTimeout(() => {
            formSuccess.textContent = ""
          }, 5000)
        }
      })
    }
  })
  