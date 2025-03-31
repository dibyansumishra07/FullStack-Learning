package problem_solving.design_patterns.CREATIONAL.FACTORY;

import problem_solving.design_patterns.CREATIONAL.FACTORY.phone.OS;
import problem_solving.design_patterns.CREATIONAL.FACTORY.phone.OperatingSystemFactory;

public class FactoryMain {
    public static void main(String[] args) {
        OperatingSystemFactory osf = new OperatingSystemFactory();
        OS obj = osf.getInstance("Open");
        obj.specification();
    }
}
