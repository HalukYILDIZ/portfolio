import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>iletişime geçin</h3>
          <form action="https://formspree.io/xeqrynez" method="POST">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button className="submit-btn btn">submit here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
