package advance_java.latest_java_features;

public sealed interface ISealed permits Sealed{
   private void test(){
    System.out.println("private");
   }
}
 sealed class Sealed implements ISealed permits SealedConsumer{

}
final class SealedConsumer extends Sealed {

}

