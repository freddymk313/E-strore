export default function Cart() {
    const cartItems = [
      { id: 1, name: "Produit 1", price: 29.99, quantity: 2 },
      { id: 2, name: "Produit 2", price: 49.99, quantity: 1 },
    ];
  
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Votre Panier</h3>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-card p-4 rounded-lg shadow-md">
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-muted-foreground">Quantité: {item.quantity}</p>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <h4 className="text-xl font-bold">Total</h4>
            <p className="text-xl font-semibold">${total.toFixed(2)}</p>
          </div>
          <button className="bg-accent text-accent-foreground py-2 px-6 mt-6 rounded-lg hover:bg-opacity-90">
            Passer à la caisse
          </button>
        </div>
      </section>
    );
  }
  