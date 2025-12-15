"use client";

export default function Chat() {
  return (
    <a href="https://wa.me/+919820155137">
      <div className="ready-chatting-option">
        <label>
          <i className="fab fa-whatsapp" />
          <i className="fas fa-times" />
        </label>
        {/* <div className="wrapper">
          <div className="head-text">Let's chat? - Online</div>
          <div className="chat-box">
            <div className="desc-text">
              Please fill out the form below to sen message to me directly.
            </div>
            <form
              className="tmp-dynamic-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="field">
                <input
                  className="input-field"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </div>
              <div className="field">
                <input
                  className="input-field"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  className="input-field"
                  placeholder="Your Message"
                  name="message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="field">
                <button name="submit" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </a>
  );
}
