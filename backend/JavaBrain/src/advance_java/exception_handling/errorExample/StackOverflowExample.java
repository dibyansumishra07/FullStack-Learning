package advance_java.exception_handling.errorExample;

public class StackOverflowExample {
    public static void main(String[] args) {
        // Call a method that recursively calls itself indefinitely
        infiniteRecursion();
    }

    public static void infiniteRecursion() {
        // Call itself recursively
        infiniteRecursion();
    }
}

