export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Contactez-nous</h3>
          <form className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-border rounded-lg p-2 bg-input text-foreground"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-border rounded-lg p-2 bg-input text-foreground"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-border rounded-lg p-2 bg-input text-foreground"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-opacity-90"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    );
  }
  