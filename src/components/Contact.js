function Contact() {
  return (
    <section id="contact" className="mb-5">
      <h3>Contact</h3>

      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your email"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
