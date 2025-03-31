package advance_java.concept.COUPLING;

public class ShoppingCartLooselyCoupled {
    private PaymentProcessor paymentProcessor;

    public ShoppingCartLooselyCoupled(PaymentProcessor paymentProcessor) { // Dependency Injection
        this.paymentProcessor = paymentProcessor;
    }

    public void checkout() {
        paymentProcessor.processPayment();
    }
}
